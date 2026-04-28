import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

type Props = {}

const VisitOffice = (props: Props) => {
    const offices = [
        {
            id: 1,
            city: 'Almaty',
            icon: '/images/icon/astana.svg',
            address:
                'Kapparova 400, office 5, 2nd floor, Medeu district, Almaty.',
            phoneNumber: '+7 701 765 45 28',
            map: 'https://maps.app.goo.gl/Dr9QGZt7xdptGJbh6',
        },
        {
            id: 2,
            city: 'Dubai',
            icon: '/images/icon/dubai.svg',
            address:
                'Business Bay, The Bayswater Tower, Office 1401, Dubai, United Arab Emirates',
            phoneNumber: '+971 50 625 1573',
            map: 'https://maps.app.goo.gl/kqvdH1f8gK4WHaJ69',
        },

        // Add more office objects here...
    ]
    const locale = useLocale()
    unstable_setRequestLocale(locale)

    const t = useTranslations('ContactUs')
    const t2 = useTranslations('ContactUs.Items')

    return (
        <section className="pt0 pb90 pb10-md">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 m-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="main-title text-center">
                            <h2 className="title">{t('Visit')}</h2>
                            {/* <p className="paragraph">
                                Realton has more than 9,000 offices of all sizes
                                and all potential of session.
                            </p> */}
                        </div>
                    </div>
                </div>
                {/* End .row */}

                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {offices.map((office) => (
                        <div className="w-full" key={office.id}>
                            <div className="iconbox-style8 text-center">
                                <div className="icon">
                                    <Image
                                        width={120}
                                        height={120}
                                        src={office.icon}
                                        alt="icon"
                                        className="m-auto"
                                    />
                                </div>
                                <div className="iconbox-content">
                                    <h4 className="title">
                                        {' '}
                                        {t2(office.id + '.Title')}
                                    </h4>
                                    <p className="text mb-1">
                                        {t2(office.id + '.Location')}
                                    </p>
                                    <h6 className="mb10">
                                        {office.phoneNumber}
                                    </h6>
                                    <a
                                        className="text-decoration-underline"
                                        href={office.map}
                                        target="_blank"
                                    >
                                        {t2(office.id + '.Label')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End .row */}
            </div>
        </section>
    )
}

export default VisitOffice
