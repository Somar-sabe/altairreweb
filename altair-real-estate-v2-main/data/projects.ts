// Mock of the real API. Shape matches what the list card and the detail page read.
// Real data: Name, Slug, Id, Area, price, image names (from altairre.ae pages).
// PLACEHOLDERS (TODO replace): Size, Units, Handover, Description, Amenities, approximate LatLng.

const IMG = 'https://altairre-dev.pages.dev/api.altairre.ae/uploads/temp/'

// TEMP: real image files from the site, reused as placeholder gallery images
// until the real gallery of each project is added (see Images in each project).
const FILLERS = [
    '10C-Building-001.jpg.webp',
    '79e0daeb-133d-4d4e-aac7-89f329523c06.webp',
    '2020-Marquis-3.jpg.webp',
    '25hours-heimat-14.jpg.webp',
    '330-riverside-crescent-4.jpg.webp',
    '350-Riverside-Crescent-1.jpg.webp',
    '360-Riverside-Crescent-30.jpg.webp',
    'national-bonds-1.jpg.webp',
    'Abidos-001.jpg.webp',
    'the-oasis-011.jpg.webp',
]
const gallery = (image: string, id: number) => {
    const others = FILLERS.filter((f) => f !== image)
    const start = id % others.length
    const picked = [0, 1, 2, 3].map((i) => others[(start + i) % others.length])
    return [image, ...picked].map((f) => ({ FullPath: IMG + f }))
}

export type Project = {
    Id: number
    Slug: string
    Name: string
    ImagePath: string
    StartingPrice: number // 0 => "Ask for Price"
    Area: { Name: string }
    City: { Name: string }
    Category: { Name: string }
    CategoryId: number
    Stickers: { Name: string }[]
    Size: number
    Units: string
    Handover: string
    LatLng: { lat: number; lng: number }
    Description: string
    Amenities: { Name: string }[]
    FloorPlan: any[] // shape unknown: keep empty until FloorPlanCarousel is checked
    PaymentPlan: any[] // shape unknown: keep empty until PaymentPlan is checked
    VideoUrl: string
    Images: { FullPath: string }[]
}

const mk = (
    Id: number,
    Slug: string,
    Name: string,
    image: string,
    StartingPrice: number,
    area: string,
    lat: number,
    lng: number,
    extra: Partial<Project> = {}
): Project => ({
    Id,
    Slug,
    Name,
    ImagePath: IMG + image,
    StartingPrice,
    Area: { Name: area },
    City: { Name: 'Dubai' },
    Category: { Name: 'Apartments' },
    CategoryId: 1,
    Stickers: [],
    Size: 800,
    Units: '1-2 Bedrooms',
    Handover: '2027',
    LatLng: { lat, lng },
    Description: `${Name} is an off-plan project in ${area}, Dubai. Replace this placeholder with the real description.`,
    Amenities: [{ Name: 'Swimming Pool' }, { Name: 'Gym' }, { Name: 'Kids Play Area' }],
    FloorPlan: [],
    PaymentPlan: [],
    VideoUrl: '',
    Images: gallery(image, Id),
    ...extra,
})

export const projects: Project[] = [
    mk(919, '10c-building-919', '10C Building', '10C-Building-001.jpg.webp', 0, 'Jumeirah Village Circle', 25.0614, 55.2183),
    mk(1555, '15-cascade-1555', '15 Cascade', '79e0daeb-133d-4d4e-aac7-89f329523c06.webp', 1500000, 'Dubai Sports City', 25.04, 55.22, { Stickers: [{ Name: 'Payment Plan 60/40' }] }),
    mk(954, '2020-msarqui-954', '2020 Msarqui', '2020-Marquis-3.jpg.webp', 887000, 'Arjan', 25.062, 55.245),
    mk(1299, '25h-heimat-1299', '25H Heimat', '25hours-heimat-14.jpg.webp', 3500000, 'Downtown Dubai', 25.1972, 55.2744),
    mk(1194, '330-riverside-crescent-1194', '330 Riverside Crescent', '330-riverside-crescent-4.jpg.webp', 1140000, 'Sobha Hartland 2', 25.185, 55.3),
    mk(1273, '350-riverside-crescent-1273', '350 Riverside Crescent', '350-Riverside-Crescent-1.jpg.webp', 1260000, 'Sobha Hartland 2', 25.185, 55.3),
    mk(1297, '360-riverside-crescent-1297', '360 Riverside Crescent', '360-Riverside-Crescent-30.jpg.webp', 1500000, 'Sobha Hartland 2', 25.185, 55.3),
    mk(1223, '399-hills-park-1223', '399 Hills Park', 'national-bonds-1.jpg.webp', 1700000, 'Dubai Hills Estate', 25.1126, 55.2459),
    mk(931, 'abidos-931', 'Abidos', 'Abidos-001.jpg.webp', 0, 'Al Barsha', 25.1124, 55.2),
    mk(945, 'al-abeir-tower-945', 'Al Abeir Tower', 'Al-Abeir-Tower-4.jpg.webp', 0, 'Jumeirah Village Circle', 25.061394947967287, 55.2183420865536, {
        Size: 384,
        Units: 'Studios Apartments',
        Handover: '2023',
        Images: ['Al-Abeir-Tower-4', 'Al-Abeir-Tower-1', 'Al-Abeir-Tower-3', 'Al-Abeir-Tower-2', 'Al-Abeir-Tower-5'].map((n) => ({ FullPath: IMG + n + '.jpg.webp' })),
    }),
    mk(1241, 'the-oasis-1241', 'Palmiera The Oasis', 'the-oasis-011.jpg.webp', 8100000, 'The Oasis', 25.0, 55.35, { Category: { Name: 'Villas' } }),
]

type Params = {
    PageSize: number
    Page: number // 0-based
    CategoryId?: string
    MinPrice?: string
    MaxPrice?: string
    Search?: string
    OrderBy?: string
    Desc?: string
    [k: string]: any
}

export const getProjects = async (params: Params, _locale?: string) => {
    const { PageSize, Page, CategoryId, MinPrice, MaxPrice, Search, OrderBy, Desc } = params
    const q = (Search ?? '').trim().toLowerCase()
    const min = Number(MinPrice) || 0
    const max = Number(MaxPrice) || 0

    let items = projects.filter((p) => {
        if (q && !p.Name.toLowerCase().includes(q) && !p.Area.Name.toLowerCase().includes(q)) return false
        if (CategoryId && CategoryId !== '0' && String(p.CategoryId) !== CategoryId) return false
        if (min || max) {
            if (!p.StartingPrice) return false
            if (min && p.StartingPrice < min) return false
            if (max && p.StartingPrice > max) return false
        }
        return true
    })

    const desc = Desc !== 'False'
    const key = (p: Project) =>
        OrderBy === 'StartingPrice' ? p.StartingPrice || Infinity : p.Id
    items = [...items].sort((a, b) => (desc ? key(b) - key(a) : key(a) - key(b)))

    return {
        Data: items.slice(Page * PageSize, (Page + 1) * PageSize),
        Count: items.length,
        PageCount: Math.ceil(items.length / PageSize),
    }
}