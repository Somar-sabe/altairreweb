'use client'
import React from 'react'
import CountUp from '../shared/CountUp'
import { useTranslations } from 'next-intl'

type Props = {
    name: string
}

const Overview = ({ name }: Props) => {
    const t = useTranslations(`LP.${name}.Overview`)

    return (
        <>
            <section className="about-one overflow-hidden">
                <div className="w-full !max-w-[1200px] mx-auto px-4">
                    <div className="row">
                        <div className="col-xl-6 z-10">
                            <div
                                className="about-one__left ms-[100px] w-full"
                                data-aos="slide-left"
                                data-aos-delay="100"
                                data-aos-duration="2500"
                            >
                                <div className="about-one__big-text start-[-607px]">
                                    Apartments
                                </div>
                                <div className="about-one__img-box">
                                    <div className="about-one__img-one relative">
                                        <img
                                            src="/images/LP/aeternitas/Artboard.webp"
                                            alt=""
                                            className="max-h-[711px] custom-lg:max-w-[470px] aspect-auto object-cover rounded bg-center"
                                        />
                                    </div>
                                    <div className="about-one__img-two relative start-[-130px]">
                                        <img
                                            src="/images/LP/aeternitas/353-x-419.webp"
                                            alt=""
                                            className="max-h-[419px] custom-lg:max-w-[353px] aspect-auto object-cover rounded select-none"
                                        />
                                    </div>
                                    {/* <div className="about-one__shape-1 start-[-83px] float-bob-y !bottom-[329px]"></div> */}
                                    <div className="about-one__shape-2 end-[-59px]">
                                        <img
                                            src="/images/LP/aeternitas/about-one-shape-2.png"
                                            alt=""
                                            className="select-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right me-[100px]">
                                <div className="section-title text-left rtl:text-right">
                                    <span className="section-title__tagline">
                                        {t('Label')}
                                    </span>
                                    <h2 className="section-title__title">
                                        {t('Title')}
                                    </h2>
                                </div>
                                <p className="about-one__text">{t('Desc')}</p>
                                <ul className="list-unstyled about-one__points">
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text ml-[15px] rtl:mr-[15px]">
                                            <p>{t('StartingPrice')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text ml-[15px] rtl:mr-[15px]">
                                            <p>{t('PaymentPlan')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text ml-[15px] rtl:mr-[15px]">
                                            <p>{t('Handover')}</p>
                                        </div>
                                    </li>
                                </ul>
                                <a
                                    href="#contact"
                                    className="thm-btn about-one__btn"
                                >
                                    {t('Button')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter-one overflow-hidden">
                <div className="w-full !max-w-[1200px] mx-auto px-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter-one__inner custom-lg:me-0 me-auto">
                                <ul className="list-unstyled counter-one__list">
                                    <li
                                        className="counter-one__single"
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        <div className="counter-one__icon">
                                            <span className="icon-size"></span>
                                        </div>
                                        <div className="counter-one__content-box count-box">
                                            <h3 className="count-text">
                                                <CountUp
                                                    start={0}
                                                    end={parseInt(t('Area'))}
                                                    duration={1.5}
                                                />
                                            </h3>

                                            <p className="counter-one__text">
                                                {t('AreaPlaceholder')}
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="counter-one__single"
                                        data-aos="fade-left"
                                        data-aos-delay="200"
                                    >
                                        <div className="counter-one__icon">
                                            <span className="icon-parking"></span>
                                        </div>
                                        <div className="counter-one__content-box count-box">
                                            <h3 className="count-text">
                                                <CountUp
                                                    start={0}
                                                    end={parseInt(t('Parking'))}
                                                    duration={1.5}
                                                />
                                            </h3>

                                            <p className="counter-one__text">
                                                {t('ParkingPlaceholder')}
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="counter-one__single"
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                    >
                                        <div className="counter-one__icon">
                                            <span className="icon-apartments"></span>
                                        </div>
                                        <div className="counter-one__content-box count-box">
                                            <h3 className="count-text">
                                                <CountUp
                                                    start={0}
                                                    end={parseInt(
                                                        t('Apartment')
                                                    )}
                                                    duration={1.5}
                                                />
                                            </h3>
                                            <p className="counter-one__text">
                                                {t('ApartmentPlaceholder')}
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="counter-one__single"
                                        data-aos="fade-left"
                                        data-aos-delay="400"
                                    >
                                        <div className="counter-one__icon">
                                            <span className="icon-hotel-bed"></span>
                                        </div>
                                        <div className="counter-one__content-box count-box">
                                            <h3 className="count-text">
                                                <CountUp
                                                    start={0}
                                                    end={parseInt(t('Bedroom'))}
                                                    duration={1.5}
                                                />
                                            </h3>
                                            <p className="counter-one__text">
                                                {t('BedroomPlaceholder')}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview
