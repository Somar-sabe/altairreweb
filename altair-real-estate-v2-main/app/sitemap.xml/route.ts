import { locales } from '@/navigation'
import {
    getBlogsSitemap,
    getNewsSitemap,
    getProjectSitemap,
    getRentalsSitemap,
    getSalesSitemap,
} from '@/utils/routes'
import { getServerSideSitemap } from 'next-sitemap'

export const dynamic = 'force-static'

// يرجع مdflصفوفة دائماً، حتى لو الدالة رجّعت شيئاً آخر أو فشلت
async function safeSlugs(fn: () => Promise<unknown>): Promise<string[]> {
    try {
        const res = await fn()
        return Array.isArray(res) ? (res as string[]) : []
    } catch {
        return []
    }
}

export async function GET() {
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

    const projects = await safeSlugs(getProjectSitemap)
    basicUrls = [
        ...basicUrls,
        ...projects.map((slug) => `/off-plan/${slug}`),
    ]

    const sales = await safeSlugs(getSalesSitemap)
    basicUrls = [...basicUrls, ...sales.map((slug) => `/secondary/${slug}`)]

    const rentals = await safeSlugs(getRentalsSitemap)
    basicUrls = [...basicUrls, ...rentals.map((slug) => `/rent/${slug}`)]

    const blogs = await safeSlugs(getBlogsSitemap)
    basicUrls = [...basicUrls, ...blogs.map((slug) => `/blog/${slug}`)]

    const news = await safeSlugs(getNewsSitemap)
    basicUrls = [...basicUrls, ...news.map((slug) => `/news/${slug}`)]

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