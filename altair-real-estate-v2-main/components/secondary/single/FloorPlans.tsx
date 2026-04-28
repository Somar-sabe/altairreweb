'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomImage from '@/components/shared/CustomImage'
import { useAppSelector } from '@/store/store'

type Props = {
    data: any[]
}

const FloorPlans = ({ data }: Props) => {
    const getSuffix = (num: number) => {
        if (num == 1) return 'st'
        if (num == 2) return 'nd'
        if (num == 3) return 'rd'
        return 'th'
    }

    const { types } = useAppSelector((state) => state.MasterReducer)

    const [open, setOpen] = useState('')
    return (
        <div className="accordion" id="accordionExample">
            {data?.map((floorPlan, index) => (
                <div
                    className={`accordion-item ${
                        open == floorPlan?.Id ? 'active' : ''
                    }`}
                    key={floorPlan.Id}
                >
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-button ${
                                open == floorPlan?.Id ? '' : 'collapsed'
                            }`}
                            onClick={() =>
                                setOpen((prev) =>
                                    prev == floorPlan?.Id ? '' : floorPlan?.Id
                                )
                            }
                        >
                            <span className="w-100 d-md-flex align-items-center">
                                <span className="mr10-sm">
                                    {`${index + 1}${getSuffix(
                                        index + 1
                                    )} Floor Plan`}
                                </span>
                                <span className="ms-auto d-md-flex align-items-center justify-end gap-4">
                                    <span className="me-2 me-md-4 flex flex-col items-center">
                                        <span className="fw600">Type</span>
                                        <span className="text">
                                            {floorPlan.Type}
                                        </span>
                                    </span>

                                    <span className="me-2 me-md-4 flex flex-col items-center">
                                        <span className="fw600">Unit Type</span>
                                        <span className="text">
                                            {floorPlan.UnitType}
                                        </span>
                                    </span>

                                    <span className="me-2 me-md-4 flex flex-col items-center">
                                        <span className="fw600">Category</span>
                                        <span className="text">
                                            {
                                                types?.find(
                                                    (item: any) =>
                                                        item?.Id ==
                                                        floorPlan?.CategoryId
                                                )?.Name
                                            }
                                        </span>
                                    </span>

                                    <span className="me-2 me-md-4 flex flex-col items-center">
                                        <span className="fw600">Size</span>
                                        <span className="text">
                                            {floorPlan.Size} sqft
                                        </span>
                                    </span>

                                    <span className="flex flex-col items-center">
                                        <span className="fw600">Price</span>
                                        <span className="text">
                                            AED {floorPlan.Price}
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse transition-all duration-300 ${
                            open == floorPlan?.Id ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                        <div className="accordion-body text-center">
                            <CustomImage
                                width={610}
                                height={500}
                                containerclassname="overflow-hidden cover"
                                className="w-full h-auto"
                                src={floorPlan?.ImagePath}
                                alt="listing figureout"
                                quality={1}
                                priority
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FloorPlans
