import { locales } from '@/navigation'
import {
    getBlogsSitemap,
    getNewsSitemap,
    getProjectSitemap,
    getRentalsSitemap,
    getSalesSitemap,
} from '@/utils/routes'
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
    let basicUrls: string[] = [
        '/',
        '/off-plan',
        '/secondary',
        '/rent',
        '/blog',
        '/contact',
        '/faq',
        '/privacy-policy',
        '/about-company',
        '/our-team',
        '/partnership',
    ]

    const projects = (await getProjectSitemap()) as unknown as string[]
    basicUrls = [
        ...basicUrls,
        ...projects.map((slug: string) => `/off-plan/${slug}`),
    ]

    const sales = (await getSalesSitemap()) as unknown as string[]
    basicUrls = [
        ...basicUrls,
        ...sales.map((slug: string) => `/secondary/${slug}`),
    ]

    const rentals = (await getRentalsSitemap()) as unknown as string[]
    basicUrls = [
        ...basicUrls,
        ...rentals.map((slug: string) => `/rent/${slug}`),
    ]

    const blogs = (await getBlogsSitemap()) as unknown as string[]
    basicUrls = [...basicUrls, ...blogs.map((slug: string) => `/blog/${slug}`)]

    const news = (await getNewsSitemap()) as unknown as string[]
    basicUrls = [...basicUrls, ...news.map((slug: string) => `/news/${slug}`)]

    let sitemaps: any[] = []

    for (const locale of locales) {
        sitemaps = [
            ...sitemaps,
            ...basicUrls.map((item) => ({
                loc: `https://www.altairre.ae/${locale}${item}`,
            })),
        ]
    }

    return await getServerSideSitemap(sitemaps)
}