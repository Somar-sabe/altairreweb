import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import React from 'react'

type Props = {
    tab: string
    title: string
    isTransparent?: boolean
}

const Breadcrumb = ({ tab, title, isTransparent }: Props) => {
    const t = useTranslations('Shared')
    return (
        <section
            className={`breadcumb-section ${isTransparent ? '' : 'bgc-f7'} `}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcumb-style1">
                            <h1 className="title">{title}</h1>
                            <div className="">
                                <Link href={'/'}>{t('Home')}</Link>
                                <span> / </span>
                                <span className="capitalize">
                                    {tab?.replaceAll('-', ' ')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb
