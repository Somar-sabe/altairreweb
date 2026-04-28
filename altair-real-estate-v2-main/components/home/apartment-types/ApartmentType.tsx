'use client'
import { apartmentTypes } from '@/data/apartmentType'
import { Link } from '@/navigation'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useAppSelector } from '@/store/store'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const ApartmentType = () => {
    const { types } = useAppSelector((state) => state.MasterReducer)
    const t = useTranslations('Home.Apartments')
    return (
        <>
            <Swiper
                className=""
                spaceBetween={30}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.next__active',
                    prevEl: '.prev__active',
                }}
                pagination={{
                    el: '.pagination__active',
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5.8,
                    },
                }}
            >
                {types?.map((type: any, index: number) => (
                    <SwiperSlide key={type?.Name + index}>
                        <div className="item group">
                            <Link href={`/off-plan?CategoryId=${type?.Id}`}>
                                <div className="iconbox-style1 flex flex-col h-[250px] justify-between">
                                    <span
                                        className={`icon !mb-0 ${type?.IconPath}`}
                                    />

                                    <div className="iconbox-content">
                                        <h6 className="title">{type?.Name}</h6>
                                        <p className="text mb-0">{`${
                                            type?.PropertyCount
                                        } ${t('Properties')}`}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ApartmentType
