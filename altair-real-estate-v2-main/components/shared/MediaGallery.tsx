'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import CustomImage from './CustomImage'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

type Props = {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    images: string[]
    currIndex?: number
}

const MediaGallery = ({ isOpen, setOpen, images, currIndex }: Props) => {
    const [mainSwiper, setMainSwiper] = useState<SwiperType>(null!)
    const [smallSwiper, setSmallSwiper] = useState<SwiperType>(null!)

    useEffect(() => {
        const sub = (e: any) => {
            if (e?.key == 'ArrowLeft') {
                mainSwiper?.slidePrev(500)
            }
            if (e?.key == 'ArrowRight') mainSwiper?.slideNext(500)
        }
        window.addEventListener('keydown', sub)

        return () => {
            window.removeEventListener('keydown', sub)
        }
    }, [mainSwiper])

    useEffect(() => {
        if (currIndex != null) mainSwiper?.slideTo(currIndex)
    }, [currIndex])

    return (
        <div
            className={`w-full overflow-hidden h-screen fixed bg-[#00000099] z-50 top-0 left-0 flex-col items-center justify-center ${
                isOpen ? 'flex' : 'hidden'
            }`}
            onMouseDown={() => setOpen(false)}
        >
            <div
                className="w-[90%] lg:w-[80%] h-full flex flex-col gap-4 justify-center items-center overflow-hidden my-20 swiper-hero relative z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <Swiper
                    onSwiper={(swiper: SwiperType) => setMainSwiper(swiper)}
                    slidesPerView={1}
                    className="w-full "
                    onRealIndexChange={(swiper: SwiperType) =>
                        smallSwiper?.slideTo(swiper?.realIndex)
                    }
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    modules={[EffectFade, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    loop
                    breakpoints={{
                        0: {
                            pagination: {
                                enabled: true,
                            },
                        },
                        640: {
                            pagination: {
                                enabled: false,
                            },
                        },
                    }}
                >
                    {images?.map((img: string, index: number) => {
                        return (
                            <SwiperSlide
                                className="w-full !h-auto pb-10 "
                                key={img + index}
                            >
                                <CustomImage
                                    src={img}
                                    width={800}
                                    height={414}
                                    className="w-full h-full object-contain sm:object-bottom "
                                    containerclassname="h-full"
                                    priority
                                    quality={1}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="hidden sm:block w-full h-[20%]">
                    <Swiper
                        slidesPerView={4}
                        className=" w-full h-full "
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            550: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                        }}
                        onSwiper={(swiper: SwiperType) =>
                            setSmallSwiper(swiper)
                        }
                    >
                        {images?.map((img: string, index: number) => {
                            return (
                                <SwiperSlide
                                    className="w-full !h-auto  "
                                    key={img + index}
                                    onClick={() => mainSwiper?.slideTo(index)}
                                >
                                    <CustomImage
                                        src={img}
                                        width={800}
                                        height={414}
                                        className="w-full h-full object-cover object-center "
                                        containerclassname="w-full h-full px-1"
                                        quality={1}
                                        // priority
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default MediaGallery
