import Related from '@/components/media/single/Related'
import SingleMain from '@/components/media/single/SingleMain'
import { getArticlesById } from '@/utils/routes'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import React from 'react'

export const revalidate = 30 * 60

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = params
    const locale = await getLocale()
    const data = await getArticlesById(id, locale)
    return {
        title: data?.Title,
        description: data?.Sections?.[0]?.Description,
        keywords: [
            data?.Title,
            'Real Estate',
            'UAE',
            'Dubai',
            'Real Estate Dubai',
            'Real Estate Blog',
        ],
        openGraph: {
            title: data?.Title,
            description: data?.Sections?.[0]?.Description,
            images: [
                data?.ImagePathFull,
                data?.Sections?.filter(
                    (item: any) => item?.ImagePathFull != ''
                )?.map((item: any) => item?.ImagePathFull ?? ''),
            ],
        },
    }
}

const Page = async (props: any) => {
    const { id } = props?.params
    const locale = await getLocale()
    const data = await getArticlesById(id, locale)
    console.log('blog', data)

    return (
        <>
            <SingleMain data={data} />
            <Related IsBlog />
        </>
    )
}

export default Page
