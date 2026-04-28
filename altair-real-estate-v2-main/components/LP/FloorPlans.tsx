'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import CustomImage from '../shared/CustomImage'

type Props = {
    data: any[]
    name: string
}

const FloorPlans = ({ data, name }: Props) => {
    const [currIndex, setCurrIndex] = useState(0)
    const t = useTranslations(`LP.${name}.FloorPlan`)

    return (
        <div className="floor-plan__main-tab-box tabs-box overflow-hidden">
            <ul className="tab-buttons clearfix list-unstyled">
                {data?.map((item, index) => {
                    return (
                        <li
                            key={index}
                            data-tab="#penthouse"
                            className={`tab-btn ${
                                index == currIndex ? 'active-btn' : ''
                            }`}
                        >
                            <button
                                onClick={(e) => {
                                    e?.preventDefault()
                                    setCurrIndex(index)
                                }}
                            >
                                <span>{item?.Type}</span>
                            </button>
                        </li>
                    )
                })}
                {/* <li data-tab="#stuido" className="tab-btn">
                    <button>
                        <span>Studio</span>
                    </button>
                </li>
                <li data-tab="#duplex" className="tab-btn">
                    <button>
                        <span>Duplex</span>
                    </button>
                </li> */}
            </ul>

            <div className="tabs-content">
                {data?.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {index == currIndex && (
                                <div
                                    className="tab active-tab"
                                    id="penthouse"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                >
                                    <div className="floor-plan__tab-content-inner w-full">
                                        <div className="floor-plan__tab-content-left !w-full !max-w-none custom-lg:!max-w-[395px]">
                                            <ul className="list-unstyled floor-plan__tab-content-details">
                                                <li className="!max-w-none custom-lg:!max-w-[395px]">
                                                    <p>Total area</p>
                                                    <span>
                                                        {item?.Area} {t('Sqft')}
                                                    </span>
                                                </li>
                                                <li className="!max-w-none custom-lg:!max-w-[395px]">
                                                    <p>Current status</p>
                                                    <span>
                                                        {t(item?.Status)}
                                                    </span>
                                                </li>
                                                <li className="!max-w-none custom-lg:!max-w-[395px]">
                                                    <p>No. of rooms</p>
                                                    <span>
                                                        {item?.NumRooms}
                                                    </span>
                                                </li>
                                                <li className="!max-w-none custom-lg:!max-w-[395px]">
                                                    <p>Parking available</p>
                                                    <span>
                                                        {t(`${item?.Parking}`)}
                                                    </span>
                                                </li>
                                                <li className="!max-w-none custom-lg:!max-w-[395px]">
                                                    <p>Price from</p>
                                                    <span>{`${item?.Price}`}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="floor-plan__tab-content-righ !ml-0 custom-lg:!ml-[55px]  w-full !max-w-none custom-lg:!max-w-[680px]">
                                            <CustomImage
                                                src={item?.Image}
                                                alt=""
                                                className="min-w-full !max-w-none custom-lg:!max-w-[680px] object-contain"
                                                containerclassname="bg-white select-none"
                                                width={500}
                                                height={500}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default FloorPlans
