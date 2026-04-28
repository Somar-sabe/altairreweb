import React from 'react'
import Blog from './Blog'

type Props = {}

const index = (props: Props) => {
    return (
        <section className="mb35 mb0-md pb30-md">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 m-auto"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <div className="main-title text-start text-md-center">
                            <h2 className="title">From Our Blog</h2>
                            <p className="paragraph">
                                Aliquam lacinia diam quis lacus euismod
                            </p>
                        </div>
                    </div>
                </div>
                {/* End .row */}

                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <Blog />
                </div>
                {/* End .row */}
            </div>
            {/* End .container */}
        </section>
    )
}

export default index
