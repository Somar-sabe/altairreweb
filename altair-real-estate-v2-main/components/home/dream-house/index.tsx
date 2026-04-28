'use client'
import React, { useState } from 'react'
import ContactFormModal from '@/components/shared/ContactFormModal'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    const t = useTranslations('Home.DreamHouse')
    return (
        <>
            <section className="our-cta p-0 pb90 container">
                <div
                    className="cta-banner xl:!px-40 !bg-brand-300 bgc-thm-light mx-auto maxw1600 pt90 pt60-md pb90 pb60-md bdrs12 position-relative mx20-lg"
                    data-aos="fade"
                    data-aos-delay="300"
                    key={'here'}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-6">
                                <div className="cta-style3">
                                    <h2 className="cta-title">{t('Title')}</h2>
                                    <p className="cta-text mb25 whitespace-pre-line">
                                        {t('Desc')}
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setOpen(true)
                                        }}
                                        className="ud-btn !bg-brand-100 text-white"
                                    >
                                        {t('Button')}
                                        <i className="fal fa-arrow-right-long" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4 offset-xl-2 d-none d-lg-block">
                                <div className="cta-img">
                                    <Image
                                        width={500}
                                        height={600}
                                        className=""
                                        src="/images/home/dream.png"
                                        alt="shape"
                                        unoptimized
                                    />
                                </div>
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
