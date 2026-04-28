import Faq from '@/components/faq'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

type Props = {}

const Page = ({ params }: any) => {
    const { locale } = params
    unstable_setRequestLocale(locale)
    const t = useTranslations('FAQ')
    return (
        <>
            <Breadcrumb tab={t('Tab')} title={t('Title')} isTransparent />
            <Faq />
        </>
    )
}

export default Page
