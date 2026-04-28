'use client'
import { useTranslations } from 'next-intl'

import React from 'react'

type Props = {
    name: string
}

const Features = ({ name }: Props) => {
    const t = useTranslations(`LP.${name}.Features`)
    return (
        <section className="feature-one overflow-hidden">
            <div className="feature-one__bg-box">
                <div
                    className="feature-one__bg"
                    style={{
                        backgroundImage:
                            'url(/images/LP/aeternitas/1920x670.webp)',
                    }}
                />
            </div>
            {/* <div className="feature-one__shape-1 float-bob-x">
                <img src="/images/shapes/feature-one-shape-1.png" alt="" />
            </div> */}
            <div className="w-full !max-w-[1200px] mx-auto px-4">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="feature-one__left">
                            <div className="section-title text-left rtl:text-right">
                                <span className="section-title__tagline">
                                    {t('Label')}
                                </span>
                                <h2 className="section-title__title ">
                                    {t('Title')}
                                </h2>
                            </div>
                            <p className="feature-one__text ">{t('Desc')}</p>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        <div className="feature-one__right">
                            <div className="row">
                                {Array.from({ length: 4 })?.map((_, index) => {
                                    return (
                                        <div
                                            className="col-xl-6"
                                            data-aos="fade-up"
                                            data-aos-delay={`${
                                                100 * index + 1
                                            }`}
                                            key={index}
                                        >
                                            <div className="feature-one__single">
                                                <div className="feature-one__single-inner">
                                                    <div className="feature-one__icon">
                                                        <span
                                                            className={t(
                                                                `${
                                                                    index + 1
                                                                }.Icon`
                                                            )}
                                                        ></span>
                                                    </div>
                                                    <h3 className="feature-one__title">
                                                        <span>
                                                            {t(
                                                                `${
                                                                    index + 1
                                                                }.Title`
                                                            )}
                                                        </span>
                                                    </h3>
                                                    {/* <p className="feature-one__text">
                                                        {t(`${index + 1}.Desc`)}
                                                    </p> */}
                                                    {/* <div className="feature-one__btn">
                                                    <a href="services.html">
                                                        {' '}
                                                        <i className="fa fa-arrow-right"></i>
                                                        Read More
                                                    </a>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
