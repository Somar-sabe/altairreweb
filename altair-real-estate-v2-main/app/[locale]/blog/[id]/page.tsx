
import Related from '@/components/media/single/Related'
import SingleMain from '@/components/media/single/SingleMain'
import { getArticlesById } from '@/utils/routes'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import React from 'react'

export const revalidate = 30 * 60

export async function generateMetadata({
    params,
}: {
    params: { id: string }
}): Promise<Metadata> {
    const { id } = params
    const locale = await getLocale()

    const data: any = await getArticlesById(Number(id), locale)

    const title = data?.Title || 'Real Estate Blog'
    const description = data?.Sections?.[0]?.Description || ''

    const images = [
        data?.ImagePathFull,
        ...(data?.Sections || [])
            .filter((item: any) => item?.ImagePathFull)
            .map((item: any) => item.ImagePathFull),
    ].filter(Boolean)

    return {
        title,
        description,
        keywords: [
            title,
            'Real Estate',
            'UAE',
            'Dubai',
            'Real Estate Dubai',
            'Real Estate Blog',
        ],
        openGraph: {
            title,
            description,
            images,
        },
    }
}

const Page = async ({
    params,
}: {
    params: { id: string }
}) => {
    const { id } = params
    const locale = await getLocale()

    const data: any = await getArticlesById(Number(id), locale)

    return (
        <>
            <SingleMain data={data} />
            <Related IsBlog />
        </>
    )
}

export default Page
