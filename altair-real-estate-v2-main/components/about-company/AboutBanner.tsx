import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutBanner = (props: Props) => {
    return (
        <section className="our-about pt-0">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-lg-12">
                        <div className="about-page-img">
                            <Image   style={{ borderRadius: '25px' }}
                                width={1206}
                                height={515}
                                priority
                                className="w-100 h-100 cover"
                                src="https://altairre.ae/images/home/4-min.webp"
                                alt="about banner"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner
