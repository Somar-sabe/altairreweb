import React from 'react'
import Blog from './Blog'

type Props = {
    title?: string
    IsBlog?: boolean
}

const Related = ({ title, IsBlog }: Props) => {
    return (
        <section className="pb90 pb20-md">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 m-auto"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <div className="main-title text-start text-md-center">
                            <h2 className="title">
                                {title ? title : 'Related Posts'}
                            </h2>
                            {/* <p className="paragraph">
                                Aliquam lacinia diam quis lacus euismod
                            </p> */}
                        </div>
                    </div>
                </div>
                {/* End .row */}

                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <Blog IsBlog={IsBlog} />
                </div>
            </div>
        </section>
    )
}

export default Related
