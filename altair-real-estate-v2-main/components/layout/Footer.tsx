import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'
import ContactMeta from './ContactMeta'
import AppWidget from './AppWidget'
import Social from './Social'
import Subscribe from './Subscribe'
import MenuWidget from './MenuWidget'
import Copyright from './Copyright'
import Facebook from '../shared/icons/Facebook'
import Instagram from '../shared/icons/Instagram'
import Whatsapp from '../shared/icons/Whatsapp'
import Linkedin from '../shared/icons/Linkedin'
import Telegram from '../shared/icons/Telegram'
import Tiktok from '../shared/icons/Tiktok'
import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {}

const Footer = (props: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Footer')
    return (
        <section className="footer-style1 at-home2 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <Link className="footer-logo" href="/">
                                <Image
                                    width={148}
                                    height={45}
                                    className="mb40"
                                    src="/images/logo.png"
                                    alt=""
                                    unoptimized
                                />
                            </Link>
                            <ContactMeta />
                            {/* <AppWidget /> */}
                            <div className="social-widget text-white">
                                <h6 className="text-white mb20">
                                    {t('Follow')}
                                </h6>
                                <div className="flex items-center flex-wrap gap-4 ">
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/altairre.ae/"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Facebook />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/altair.realestate/"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Instagram />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://wa.me/971585208757"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Whatsapp />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://ae.linkedin.com/company/altair-re"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Linkedin />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://t.me/altairre"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Telegram />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.tiktok.com/@altair.realestate?_t=8iVDTnouo9F&_r=1"
                                        className="text-white hover:!text-brand-100"
                                    >
                                        <Tiktok />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End .col-lg-5 */}

                    <div className="col-md-7">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <Subscribe />
                            <div className="row gap-20 lg:gap-40">
                                <MenuWidget />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .row */}
            </div>
            {/* End .container */}

            <Copyright />
            {/* End copyright */}
        </section>
    )
}

export default Footer
