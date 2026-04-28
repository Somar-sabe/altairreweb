import { allblogs } from '@/data/blogs'
import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
    img: string
    date: Date
}

export default function Details({ title, img, date }: Props) {
    return (
        <>
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12">
                        <h2 className="blog-title">{title}</h2>
                        <div className="blog-single-meta">
                            <div className="post-author d-sm-flex align-items-center">
                                {/* <Image
                                    width={40}
                                    height={40}
                                    className="mr10"
                                    src={img}
                                    alt="blog"
                                    unoptimized
                                />
                                <a className="pr15 bdrr1" href="#">
                                    Leslie Alexander
                                </a> */}
                                {/* <a className="ml15 pr15 bdrr1" href="#">
                                    Home Improvement
                                </a> */}
                                <a className="ml15" href="#">
                                    {date?.toLocaleString('en-Us', {
                                        month: 'short',
                                        year: 'numeric',
                                        day: 'numeric',
                                    })}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End .container */}

            <div
                className="mx-auto maxw1600 mt60"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="large-thumb">
                            <Image
                                width={1200}
                                height={600}
                                priority
                                className="w-100 h-100 object-cover"
                                // style={{maxHeight:'600px',objectFit:'cover'}}
                                src={img}
                                alt="blog"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
