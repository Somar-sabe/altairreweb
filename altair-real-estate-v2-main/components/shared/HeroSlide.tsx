'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { Link } from '@/navigation'
import { Scrollbar } from 'swiper/modules'
import { getProjects } from '@/utils/routes'
import { useQuery } from 'react-query'
import { useLocale } from 'next-intl'

type Props = {}

const HeroSlide = (props: Props) => {
    const locale = useLocale()
    const { data } = useQuery(
        ['heroData', locale],
        () =>
            getProjects(
                {
                    PageSize: 3,
                    OrderBy: 'CreatedDate',
                    Desc: 'True',
                    Page: 0,
                },
                locale
            ),
        { refetchOnWindowFocus: false }
    )
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000, // 3 seconds between slides
                    disableOnInteraction: false, // Autoplay will not be disabled on user interaction
                }}
                scrollbar={{
                    el: '.js-scrollbar',
                    draggable: true,
                    dragSize: 124,
                }}
                modules={[Scrollbar]}
            >
                {data?.Data?.map((listing: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="listing-style13">
                            <div className="list-thumb relative w-full h-[400px]">
                                <Image
                                    fill
                                    className=" object-cover max-h-[400px]"
                                    src={listing?.ImagePath ?? ''}
                                    alt="thumb"
                                    priority
                                    quality={5}
                                />
                            </div>
                            <div className="list-content">
                                <div className="h4 list-price animate-up-1 mb-0">
                                    AED{' '}
                                    {listing?.StartingPrice?.toLocaleString()}
                                </div>
                                <h2 className="list-title animate-up-2">
                                    <span>{listing?.Name}</span>
                                </h2>
                                <div className="list-meta d-flex align-items-center animate-up-3">
                                    {/* <a className="mr10" href="#">
                                        {listing?.Bedroom} - Beds
                                    </a>
                                    <a className="mr10" href="#">
                                        {listing?.Bathroom} - Baths
                                    </a> */}
                                    <a href="#">{listing?.Size} Sqft.</a>
                                </div>
                                <Link
                                    href={`/off-plan/${listing?.Id}`}
                                    className="ud-btn btn-dark"
                                >
                                    View Details
                                    <i className="fal fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="swpr_paginations">
                    <div className="slideactive">01</div>
                    <div>
                        <div className="posr mt-4 js-scrollbar">
                            <div className="custom-scroll"></div>
                        </div>
                    </div>
                    <div className="slidetotal">03</div>
                </div>
            </Swiper>
        </>
    )
}

export default HeroSlide
