import Image from 'next/image'
import React from 'react'
import Details from './Details'

type Props = {
    data: any
}

const SingleMain = ({ data }: Props) => {
    return (
        <section className="our-blog pt50 !pb-20">
            <Details
                title={data?.Title}
                img={data?.ImagePathFull}
                date={new Date(data?.CreatedDate)}
            />

            <div className="container">
                <div className="roww" data-aos="fade-up" data-aos-delay="500">
                    <div className="col-xl-8 ms-[16.66666667%]">
                        {data?.Sections?.map((item: any, index: number) => {
                            return (
                                <div className="ui-content mt40 mb60">
                                    {item?.Title && (
                                        <h4 className="mb10">{`${item?.Title}`}</h4>
                                    )}
                                    <p className="mb25 ff-heading">
                                        {item?.Description}
                                    </p>

                                    {item?.ImagePathFull && (
                                        <Image
                                            width={804}
                                            height={470}
                                            priority
                                            src={item?.ImagePathFull ?? ''}
                                            alt="blog"
                                            unoptimized
                                            className="bdrs12 post-img-2 w-100 h-100 cover"
                                        />
                                    )}
                                </div>
                            )
                        })}

                        {/* End  blockquote*/}

                        {/* <div className="col-12 ui-content">
                            <h4 className="title">2. Choose toys wisely</h4>
                        </div> */}

                        {/* <div className="row">
                            <Features />
                        </div> */}
                        {/* End .row */}

                        {/* End .col-12 */}

                        {/* <div className="ui-content mt40 mb30">
                            <h4 className="mb10">
                                3.Leave some toys out of reach
                            </h4>
                            <div className="custom_bsp_grid">
                                <ul className="list-style-type-bullet p-0 ml20">
                                    <li>
                                        We do not require any previous
                                        experience or pre-defined skills to take
                                        this course. A great orientation would
                                        be enough to master UI/UX design.
                                    </li>
                                    <li>
                                        A computer with a good internet
                                        connection.
                                    </li>
                                    <li>Adobe Photoshop (OPTIONAL)</li>
                                </ul>
                            </div>
                        </div> */}
                        {/* End .i-content */}

                        {/* <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                            <div className="blog_post_share d-flex align-items-center mb10-sm">
                                <span className="mr30">Share this post</span>
                                <Social />
                            </div>
                            <div className="bsp_tags d-flex">
                                <Tags />
                            </div>
                        </div> */}
                        {/* End share social and tags */}

                        {/* <TopComments /> */}
                        {/* End TopComments */}

                        {/* <PaginationTwo
                            pageNumber={1}
                            data={[]}
                            pageCapacity={9}
                        /> */}
                        {/* End Blog Single pagination */}

                        {/* <AllReviews /> */}
                        {/* End  AllReviews */}

                        {/* <div className="bsp_reveiw_wrt">
                            <h6 className="fz17">Leave A Review</h6>
                            <ReviewBoxForm />
                        </div> */}
                        {/* End ReviewBoxForm */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleMain
