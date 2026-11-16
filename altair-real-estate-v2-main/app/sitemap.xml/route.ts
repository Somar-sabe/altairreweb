import { projects } from '@/data/projects'

export const dynamic = 'force-static'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://altairre.ae'

// Adjust to your real static pages
const staticPaths = ['', '/projects', '/about', '/contact']

export async function GET() {
    const urls = [
        ...staticPaths.map((p) => `${BASE_URL}${p}`),
        ...projects
            .filter((p: any) => p.Slug)
            .map((p: any) => `${BASE_URL}/projects/${p.Slug}`),
    ]

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml' },
    })
}