import React from 'react'

import { getProjectById } from '@/utils/routes'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'

const SingleProperty = dynamic(() => import('@/components/off-plan/single'))

export const revalidate = 30 * 60

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = params
    const locale = await getLocale()
    const data = await getProjectById(id, locale)
    return {
        title: data?.Name,
        description: data?.Description,
        keywords: [data?.Name, data?.Area?.Name, data?.City?.Name],
        openGraph: {
            title: data?.Name,
            description: data?.Description,
            images: data?.Images?.map((item: any) => item?.FullPath ?? ''),
        },
    }
}

const Page = async (props: any) => {
    const { id } = props?.params
    const locale = await getLocale()
    const data = await getProjectById(id, locale)
    if (!data?.Id) redirect('/off-plan')

    console.log(data)

    return (
        <>
            <SingleProperty data={data} />
        </>
    )
}

export default Page
