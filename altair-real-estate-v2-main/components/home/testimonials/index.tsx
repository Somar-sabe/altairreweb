import React from 'react'
import Testimonial from './Testimonial'

type Props = {}

const index = (props: Props) => {
    return (
        <section className="pt0 pb40-md">
            <div className="container">
                <div className="row  justify-content-between align-items-center">
                    <div className="col-auto">
                        <div
                            className="main-title"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h2 className="title">
                                People Love Living with Realton
                            </h2>
                            <p className="paragraph">
                                Aliquam lacinia diam quis lacus euismod
                            </p>
                        </div>
                    </div>
                    {/* End header */}

                    <div className="col-auto mb30">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <button className="testimonila_prev__active swiper_button">
                                    <i className="far fa-arrow-left-long" />
                                </button>
                            </div>
                            {/* End prev */}

                            <div className="col-auto">
                                <div className="pagination swiper--pagination testimonila_pagination__active" />
                            </div>
                            {/* End pagination */}

                            <div className="col-auto">
                                <button className="testimonila_next__active swiper_button">
                                    <i className="far fa-arrow-right-long" />
                                </button>
                            </div>
                            {/* End Next */}
                        </div>
                    </div>
                    {/* End .col for navigation and pagination */}
                </div>
                {/* End .row */}

                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="testimonial-slider"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Testimonial />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
