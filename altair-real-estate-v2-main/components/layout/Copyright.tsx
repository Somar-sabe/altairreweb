import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

const getCurrentYear = () => {
    return new Date().getFullYear()
}

const Copyright = () => {
    const footerMenuItems = [
        {
            label: 'Privacy',
            link: '/privacy-policy',
        },
        {
            label: 'Terms',
            link: '#',
        },
        {
            label: 'Sitemap',
            link: '#',
        },
    ]
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Footer.Copyright')

    return (
        <div className="container white-bdrt1 py-4">
            <div className="row">
                <div className="col-sm-6">
                    <p className="copyright-text text-gray ff-heading mt-2 text-center lg:!text-start ">
                        © Altair 2025 by{' '}
                        <a
                            href="https://evolabs.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            EVO Labs
                        </a>{' '}
                        - {t('Rights')}
                    </p>
                </div>
                {/* End .col-sm-6 */}

                <div className="col-sm-6">
                    <p className="footer-menu ff-heading text-gray mt-2 text-center lg:!text-end">
                        {footerMenuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <a className="text-gray" href={item.link}>
                                    {t(item.label)}
                                </a>
                                {index !== footerMenuItems.length - 1 && ' · '}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                {/* End .col-sm-6 */}
            </div>
        </div>
    )
}

export default Copyright
