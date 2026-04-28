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
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')
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

    const projects = await getProjectSitemap()

    basicUrls = [
        ...basicUrls,
        ...projects.map((slug: string) => `/off-plan/${slug}`),
    ]

    const sales = await getSalesSitemap()

    basicUrls = [
        ...basicUrls,
        ...sales.map((slug: string) => `/secondary/${slug}`),
    ]

    const rentals = await getRentalsSitemap()

    basicUrls = [
        ...basicUrls,
        ...rentals.map((slug: string) => `/rent/${slug}`),
    ]

    const blogs = await getBlogsSitemap()

    basicUrls = [...basicUrls, ...blogs.map((slug: string) => `/blog/${slug}`)]

    const news = await getNewsSitemap()

    basicUrls = [...basicUrls, ...news.map((slug: string) => `/news/${slug}`)]

    let sitemaps: any[] = []

    for (const locale of locales) {
        sitemaps = [
            ...basicUrls.map((item) => ({
                loc: `https://www.altairre.ae/${locale}${item}`,
            })),
        ]
    }

    return await getServerSideSitemap(sitemaps)
}
