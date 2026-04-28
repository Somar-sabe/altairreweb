'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import dynamic from 'next/dynamic'

const CustomImage = dynamic(() => import('@/components/shared/CustomImage'))
const SingleMap = dynamic(() => import('@/components/shared/SingleMap'))
const MediaGallery = dynamic(() => import('@/components/shared/MediaGallery'))

type Props = {
    images: string[]
    lat: number
    lon: number
}

const PropertyGallery = ({ images, lat, lon }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (modalOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
    }, [modalOpen])

    return (
        <>
            <MediaGallery
                images={images}
                isOpen={modalOpen}
                setOpen={setModalOpen}
            />
            <div className="w-full">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="ps-v4-hero-tab position-relative">
                        <ul
                            className="nav nav-pills justify-content-end"
                            id="pills-tab2"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active mr10"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    <span className="flaticon-images text-white fz20" />
                                </button>
                            </li>
                            {lat && lon ? (
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link mr10"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        <span className="flaticon-map text-white fz20" />
                                    </button>
                                </li>
                            ) : (
                                <></>
                            )}
                            {/* {lat && lon && (
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        <span className="flaticon-maps-1 text-white fz20" />
                                    </button>
                                </li>
                            )} */}
                        </ul>
                    </div>
                    {/* End .ps-v4-hero-tab */}

                    <div className="ps-v4-hero-tab">
                        <div
                            className="tab-content overflow-visible"
                            id="pills-tabContent2"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                            >
                                <div className="container p-0">
                                    <div
                                        className="row"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="col-lg-12">
                                            <div className="ps-v6-slider nav_none slider-1-grid owl-theme owl-carousel">
                                                <Swiper
                                                    loop={true}
                                                    spaceBetween={10}
                                                    navigation={{
                                                        prevEl: '.prev-btn',
                                                        nextEl: '.next-btn',
                                                    }}
                                                    thumbs={{
                                                        swiper:
                                                            thumbsSwiper &&
                                                            !thumbsSwiper.destroyed
                                                                ? thumbsSwiper
                                                                : null,
                                                    }}
                                                    modules={[
                                                        FreeMode,
                                                        Navigation,
                                                        Thumbs,
                                                    ]}
                                                    className="mySwiper2 overflow-y-hidden"
                                                >
                                                    {images?.map(
                                                        (
                                                            item: string,
                                                            i: number
                                                        ) => (
                                                            <>
                                                                {item &&
                                                                    item !=
                                                                        '' && (
                                                                        <SwiperSlide
                                                                            key={
                                                                                item +
                                                                                i
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault()
                                                                                setModalOpen(
                                                                                    true
                                                                                )
                                                                            }}
                                                                            className="hover:cursor-pointer"
                                                                        >
                                                                            <CustomImage
                                                                                containerclassname="w-full h-[350px] sm:h-[550px] bdrs12 overflow-hidden"
                                                                                src={
                                                                                    item
                                                                                }
                                                                                alt="gallery"
                                                                                fill
                                                                                className=" object-cover object-center overflow-hidden"
                                                                                quality={
                                                                                    50
                                                                                }
                                                                                priority
                                                                            />
                                                                        </SwiperSlide>
                                                                    )}
                                                            </>
                                                        )
                                                    )}
                                                </Swiper>

                                                <div className="w-full">
                                                    <Swiper
                                                        onSwiper={
                                                            setThumbsSwiper
                                                        }
                                                        loop={true}
                                                        spaceBetween={10}
                                                        freeMode={true}
                                                        watchSlidesProgress={
                                                            true
                                                        }
                                                        breakpoints={{
                                                            0: {
                                                                slidesPerView: 4,
                                                            },
                                                            767: {
                                                                slidesPerView: 6,
                                                            },
                                                        }}
                                                        modules={[
                                                            FreeMode,
                                                            Navigation,
                                                            Thumbs,
                                                        ]}
                                                        className="mySwiper mt20"
                                                    >
                                                        {images?.map(
                                                            (
                                                                item: string,
                                                                i: number
                                                            ) => (
                                                                <>
                                                                    {item &&
                                                                        item !=
                                                                            '' && (
                                                                            <SwiperSlide
                                                                                key={
                                                                                    item +
                                                                                    i
                                                                                }
                                                                            >
                                                                                <CustomImage
                                                                                    containerclassname="h-[75px] w-full bdrs12 overflow-hidden"
                                                                                    fill
                                                                                    src={
                                                                                        item
                                                                                    }
                                                                                    alt="image"
                                                                                    className="overflow-hidden object-cover  cover pointer"
                                                                                    quality={
                                                                                        1
                                                                                    }
                                                                                />
                                                                            </SwiperSlide>
                                                                        )}
                                                                </>
                                                            )
                                                        )}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End tab-pane */}

                            {lat && lon ? (
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="h510">
                                        <SingleMap lat={lat} lon={lon} />
                                        {/* <ListingMap /> */}
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {/* End map type listing */}

                            {/* <div
                                className="tab-pane fade"
                                id="pills-contact"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                            >
                                <iframe
                                    className="h510 w-100"
                                    src="https://www.google.com/maps/embed?pb=!4v1553797194458!6m8!1m7!1sR4K_5Z2wRHTk9el8KLTh9Q!2m2!1d36.82551718071267!2d-76.34864590837246!3f305.15097!4f0!5f0.7820865974627469"
                                    allowFullScreen
                                />
                            </div> */}
                            {/* End map locatoin fnder */}
                        </div>
                    </div>
                    {/* End ps-v4-hero-tab content */}
                </div>
            </div>
            {/* End .row */}
        </>
    )
}

export default PropertyGallery
