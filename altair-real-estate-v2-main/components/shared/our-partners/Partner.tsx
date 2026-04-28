'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Partner = () => {
    const partnerImages = [
        '1.svg',
        '2.svg',
        '3.svg',
        '4.svg',
        '5.svg',
        '6.webp',
        '7.svg',
        '8.svg',
        '9.webp',
        '10.svg',
        '11.svg',
        '12.svg',
        '13.svg',
        '14.webp',
        '15.svg',
        '16.webp',
        '17.webp',
        '18.webp',
    ]
    const [showSlider, setShowSlider] = useState(false)
    useEffect(() => {
        setShowSlider(true)
    }, [])

    return (
        <>
            {showSlider && (
                <Swiper
                    spaceBetween={0} // Adjust the spacing between items as per your preference
                    slidesPerView={6} // Default number of slides per view
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
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                    loop
                    autoplay={{
                        delay: 3000, // Adjust the autoplay delay (in milliseconds) as per your preference
                        disableOnInteraction: false,
                    }}
                    className="swiper-container"
                    modules={[Autoplay]}
                >
                    {partnerImages.map((imageName, index) => (
                        <SwiperSlide
                            key={index}
                            className="h-auto select-none px-14"
                        >
                            <div className="item h-full">
                                <div className="partner_item h-full flex flex-col items-center justify-center">
                                    <Image
                                        width={50}
                                        height={50}
                                        style={{ objectFit: 'contain' }}
                                        className="h-auto w-full"
                                        src={`/images/partners/${imageName}`}
                                        alt={imageName}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default Partner
