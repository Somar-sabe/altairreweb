'use client'
import Image from 'next/image'
import { Link } from '@/navigation'
import React, { useState } from 'react'
import FindHomeBlock from './FindHomeBlock'
import { useTranslations } from 'next-intl'
import ContactFormModal from '@/components/shared/ContactFormModal'

type Props = {}

const index = (props: Props) => {
    const [isOpen, setOpen] = useState(false)

    const t = useTranslations('Home.HowItWorks')
    return (
        <>
            <section className="pb90 pb30-md">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="about-box2">
                                <h4 className="title !z-10 whitespace-pre-line">
                                    {t('Title')}
                                </h4>
                                <p className="text fz15 !z-10 whitespace-pre-line">
                                    {t('Subtitle')}
                                </p>

                                <button
                                    onClick={(e) => setOpen(true)}
                                    className="ud-btn btn-thm !z-10"
                                >
                                    {t('Button')}
                                    <i className="fal fa-arrow-right-long" />
                                </button>
                                <Image
                                    width={450}
                                    height={400}
                                    className="img-1 cover"
                                    src="/images/home/home-work.webp"
                                    alt="about"
                                    unoptimized
                                />
                            </div>
                        </div>
                        {/* End .col-6 */}

                        <div
                            className="col-xl-6"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="row">
                                <FindHomeBlock />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFormModal
                isOpen={isOpen}
                setOpen={setOpen}
                title={t('Button')}
                onSuccess={() => {}}
                ContactType="ContactForm"
            />
        </>
    )
}

export default index
