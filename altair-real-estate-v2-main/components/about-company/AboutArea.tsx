import React from 'react'

type Props = {}

const AboutArea = (props: Props) => {
    const missionData = [
        {
            icon: 'flaticon-garden',
            title: 'Modern Villa',
            description: 'Nullam sollicitudin blandit Nullam maximus.',
        },
        {
            icon: 'flaticon-secure-payment',
            title: 'Secure Payment',
            description: 'Nullam sollicitudin blandit Nullam maximus.',
        },
    ]
    return (
        <section className="our-about pb90">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-lg-6">
                        <h2>
                            We&apos;re on a Mission to Change{' '}
                            <br className="d-none d-lg-block" /> View of Real
                            Estate Field.
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <p className="text mb25">
                            It doesn't matter how organized you are — a surplus
                            of toys will always ensure your house is a mess
                            waiting to happen. Fortunately, getting kids on
                            board with the idea of ditching their stuff is a lot
                            easier than it sounds.
                        </p>
                        <p className="text mb55">
                            Maecenas quis viverra metus, et efficitur ligula.
                            Nam congue augue et ex congue, sed luctus lectus
                            congue. Integer convallis condimentum sem. Duis
                            elementum tortor eget condimentum tempor. Praesent
                            sollicitudin lectus ut pharetra pulvinar.
                        </p>
                        <div className="row">
                            {missionData.map((item, index) => (
                                <div className="col-sm-6" key={index}>
                                    <div className="why-chose-list style3">
                                        <div className="list-one mb30">
                                            <span
                                                className={`list-icon flex-shrink-0 ${item.icon} mb20`}
                                            />
                                            <div className="list-content flex-grow-1">
                                                <h6 className="mb-1">
                                                    {item.title}
                                                </h6>
                                                <p className="text mb-0 fz14">
                                                    Nullam sollicitudin blandit{' '}
                                                    <br className="d-none d-sm-block" />{' '}
                                                    Nullam maximus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutArea
