import React from 'react'
import ApartmentType from './ApartmentType'
import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {}

const ApartmentTypes = async (props: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Home.Apartments')
    return (
        <section id="explore-property" className="pb90 pb30-md">
            <div className="container">
                <div className="row  justify-content-between align-items-center">
                    <div className="col-auto">
                        <div
                            className="main-title"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h2 className="title">{t('Title')}</h2>
                            {/* <p className="paragraph">
                                Get some Inspirations from 1800+ skills
                            </p> */}
                        </div>
                    </div>
                    {/* End header */}

                    <div className="col-auto mb30">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="prev__active swiper_button rtl:rotate-180">
                                    <i className="far fa-arrow-left-long" />
                                </button>
                            </div>

                            <div className="col-auto">
                                <div className="pagination swiper--pagination pagination__active" />
                            </div>

                            <div className="col-auto">
                                <button className="next__active swiper_button rtl:rotate-180">
                                    <i className="far fa-arrow-right-long" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End .col for navigation and pagination */}
                </div>
                {/* End .row */}

                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="explore-apartment-slider"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <ApartmentType />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApartmentTypes
