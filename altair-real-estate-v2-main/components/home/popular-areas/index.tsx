import React from 'react'
import ApartmentTypes from './ApartmentTypes'

type Props = {}

const index = (props: Props) => {
    return (
        <section className="pb90 pb30-md">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="0">
                    <div className="col-lg-6 mx-auto">
                        <div className="main-title2 text-center">
                            <h2 className="title">Explore Apartment Types</h2>
                            <p className="paragraph">
                                Get some Inspirations from 1800+ skills
                            </p>
                        </div>
                    </div>
                </div>
                {/* End .row */}

                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <ApartmentTypes />
                </div>
                {/* End .row */}
            </div>
        </section>
    )
}

export default index
