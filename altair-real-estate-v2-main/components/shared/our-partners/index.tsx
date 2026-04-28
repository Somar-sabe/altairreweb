import React from 'react'
import Partner from './Partner'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useLocale, useTranslations } from 'next-intl'

type Props = {}

const index = (props: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Home.Partners')
    return (
        <section className="our-partners bgc-white pb90 pt0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title text-center">
                            <h6>{t('Title')}</h6>
                        </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-lg-12 text-center">
                        <Partner />
                    </div>
                    {/* End .col-12 */}
                </div>
                {/* End .row */}
            </div>
        </section>
    )
}

export default index
