import React from 'react'
import HeroContent from './HeroContent'
import AdvanceFilterModal from '../advance-filter'
import Image from 'next/image'
import VideoBox from './VideoBox'
import Head from 'next/head'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useLocale, useTranslations } from 'next-intl'

type Props = {}

const Hero = async (props: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Home.Hero')
    return (
        <>
            <Head>
                <link rel="preload" href="/images/home/4-min.webp" as="image" />
            </Head>
            <section className="home-banner-style4 !px-0 md:!px-10 p-0 bgc-white w-full ">
                <div className="home-style4 bdrs24 relative mx-auto mx20-lg overflow-hidden">
                    <Image
                        src={'/images/home/4-min.webp'}
                        fill
                        alt=""
                        unoptimized
                        priority
                        className="object-cover object-right"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#0000004D]" />
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="inner-banner-style4">
                                    <h1 className="hero-title animate-up-1 text-white whitespace-pre-line ">
                                        {t('Title')}
                                    </h1>
                                    {/* <p className="hero-text fz15 animate-up-2 text-white ">
                                    From as low as $10 per day with limited time
                                    offer discounts
                                </p> */}

                                    <div className="home4-floatin-img">
                                        <Image
                                            width={140}
                                            height={120}
                                            className="spin-left d-none d-xl-block contain end-[50px] absolute top-[-200px] "
                                            src="/images/about/element-10.png"
                                            alt="image"
                                            unoptimized
                                        />
                                        <div className="absolute end-[-160px] top-[-100px] rtl:[transform:rotateY(180deg)]">
                                            <Image
                                                width={160}
                                                height={103}
                                                style={{ objectFit: 'contain' }}
                                                className="bounce-y d-none d-xl-block "
                                                src="/images/about/element-9.png"
                                                alt="image"
                                                unoptimized
                                            />
                                        </div>

                                        <VideoBox />
                                    </div>
                                    <HeroContent />
                                </div>
                                {/* End Hero content */}

                                {/* <!-- Advance Feature Modal Start --> */}
                                <div className="advance-feature-modal">
                                    <div
                                        className="modal fade"
                                        id="advanceSeachModal"
                                        tabIndex={-1}
                                        aria-labelledby="advanceSeachModalLabel"
                                        aria-hidden="true"
                                    >
                                        <AdvanceFilterModal />
                                    </div>
                                </div>

                                {/* <!-- Advance Feature Modal End --> */}

                                {/* <Category /> */}
                            </div>
                        </div>
                    </div>
                    {/* End .container */}
                </div>
            </section>
        </>
    )
}

export default Hero
