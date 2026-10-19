
import React from 'react'

import { getProjectById } from '@/utils/routes'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'

const SingleProperty = dynamic(() => import('@/components/off-plan/single'))

export const revalidate = 30 * 60

export async function generateMetadata({
    params,
}: {
    params: { id: string }
}): Promise<Metadata> {
    const { id } = params
    const locale = await getLocale()

    const data: any = await getProjectById(Number(id), locale)

    const title = data?.Name || 'Off-Plan Property'
    const description = data?.Description || ''

    return {
        title,
        description,
        keywords: [
            title,
            data?.Area?.Name || '',
            data?.City?.Name || '',
        ].filter(Boolean),
        openGraph: {
            title,
            description,
            images: (data?.Images || [])
                .map((item: any) => item?.FullPath)
                .filter(Boolean),
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

    const data: any = await getProjectById(Number(id), locale)

    if (!data?.Id) {
        redirect(`/${locale}/off-plan`)
    }

    return (
        <>
            <SingleProperty data={data} />
        </>
    )
}

export default Page
