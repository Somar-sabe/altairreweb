'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Swiper as SwiperType } from 'swiper/types'
import CustomImage from '../../shared/CustomImage'
import { EffectFade } from 'swiper/modules'
import { useAppSelector } from '@/store/store'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const MediaGallery = dynamic(() => import('@/components/shared/MediaGallery'))

type Props = {
    data: any[]
}

const FloorPlanCarousel = ({ data }: Props) => {
    const [swiper, setSwiper] = useState<SwiperType>()
    const [currIndex, setCurrIndex] = useState(0)
    const { types, currentCurrency } = useAppSelector(
        (state) => state.MasterReducer
    )
    const [isOpen, setOpen] = useState(false)
    const t = useTranslations('OffPlan.Single')

    return (
        <div className="flex flex-col gap-2">
            <MediaGallery
                images={data?.map((item) => item?.ImagePathFull)}
                isOpen={isOpen}
                setOpen={setOpen}
                currIndex={currIndex}
            />
            <div className="flex items-center justify-between flex-wrap w-full gap-2  dark-light-navtab style2">
                <h4 className="title fz17 whitespace-nowrap">
                    {t('FloorPlan')}
                </h4>
                {swiper && (
                    <ul className="flex flex-row items-center gap-2 flex-wrap ">
                        {data?.map((item, index) => {
                            return (
                                <li
                                    className="nav-item whitespace-nowrap"
                                    key={item?.Type + index}
                                >
                                    <button
                                        className={`nav-link m-0 ${
                                            currIndex === index ? 'active' : ''
                                        }`}
                                        onClick={() => swiper?.slideTo(index)}
                                    >
                                        {item?.Type}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>

            <Swiper
                className="w-full"
                onSwiper={(swiper) => setSwiper(swiper)}
                onRealIndexChange={(swiper) => setCurrIndex(swiper?.realIndex)}
                modules={[EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
            >
                {data?.map((item, index) => {
                    return (
                        <SwiperSlide className="!h-auto" key={index}>
                            <div className="flex flex-row flex-wrap-reverse items-center gap-4 justify-between text-black h-full">
                                <div className="flex flex-col gap-2 me-auto">
                                    <span className="text-base font-bold">
                                        {
                                            types.find(
                                                (item2) =>
                                                    item2?.Id ==
                                                    item?.CategoryId
                                            )?.Name
                                        }
                                    </span>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="pb-2">
                                                    <span>
                                                        <i className="fas fa-bed pe-2" />
                                                        {t('Type')}:
                                                    </span>
                                                </td>
                                                <td className="text-sm">
                                                    {item?.Type}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="pb-2">
                                                    <span>
                                                        <i className="fas fa-area-chart pe-2" />
                                                        {t('Area')}:
                                                    </span>
                                                </td>
                                                <td>{`${item?.Size} sq.ft`}</td>
                                            </tr>

                                            <tr>
                                                <td className="pb-2 pr-4 rtl:pl-4 rtl:pr-0">
                                                    <span>
                                                        <i className="fas fa-money-bill pe-2" />
                                                        {t('Price')}:
                                                    </span>
                                                </td>
                                                <td>{`${
                                                    item?.Price
                                                        ? `${Math.round(
                                                              item?.Price *
                                                                  currentCurrency?.value
                                                          )?.toLocaleString()} ${' '}
                                                    ${currentCurrency?.label}`
                                                        : 'Ask for Price'
                                                }`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <CustomImage
                                    src={item?.ImagePathFull}
                                    alt=""
                                    width={300}
                                    height={380}
                                    className="h-full w-auto me-auto min-h-[350px] object-contain"
                                    onClick={() => setOpen(true)}
                                    containerclassname="cursor-pointer bg-white "
                                    // priority
                                    quality={1}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default FloorPlanCarousel
