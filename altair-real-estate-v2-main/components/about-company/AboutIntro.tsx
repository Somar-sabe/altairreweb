import { Link } from '@/navigation'
import React from 'react'

type Props = {}

const AboutIntro = (props: Props) => {
    const features = [
        {
            icon: 'flaticon-security',
            title: 'Property Management',
            description:
                'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
        },
        {
            icon: 'flaticon-keywording',
            title: 'Mortgage Services',
            description:
                'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
        },
        {
            icon: 'flaticon-investment',
            title: 'Currency Services',
            description:
                'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
        },
    ]
    return (
        <section className="pt30 pb-0">
            <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-5 pl30-md pl15-xs"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="mb30">
                                <h2 className="title text-capitalize">
                                    Let’s find the right{' '}
                                    <br className="d-none d-md-block" /> selling
                                    option for you
                                </h2>
                            </div>
                            <div className="why-chose-list style2">
                                {features.map((feature, index) => (
                                    <div
                                        className="list-one d-flex align-items-start mb30"
                                        key={index}
                                    >
                                        <span
                                            className={`list-icon flex-shrink-0 ${feature.icon}`}
                                        />
                                        <div className="list-content flex-grow-1 ml20">
                                            <h6 className="mb-1">
                                                {feature.title}
                                            </h6>
                                            <p className="text mb-0 fz15">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="#" className="ud-btn btn-dark">
                                Learn More
                                <i className="fal fa-arrow-right-long" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro
