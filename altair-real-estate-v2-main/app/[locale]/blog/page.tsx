import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'
import Articles from '@/components/media/news-articles'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useLocale, useTranslations } from 'next-intl'

type Props = {}

const Page = ({ params }: any) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Blogs')
    return (
        <>
            <Breadcrumb tab={t('Title')} title={t('Title')} isTransparent />
            <Articles IsBlog />
        </>
    )
}

export default Page
