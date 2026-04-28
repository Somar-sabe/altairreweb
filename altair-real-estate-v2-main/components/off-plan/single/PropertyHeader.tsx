'use client'

import ContactFormModal from '@/components/shared/ContactFormModal'
import { useAppSelector } from '@/store/store'
import React, { useState } from 'react'

type Props = {
    title: string
    location: string
    beds: string
    baths?: string
    area: number
    price: number
    projectId: number
}

const PropertyHeader = ({
    title,
    location,
    beds,
    baths,
    area,
    price,
    projectId,
}: Props) => {
    const [isOpen, setOpen] = useState(false)

    const { currentCurrency } = useAppSelector((state) => state.MasterReducer)

    return (
        <>
            <ContactFormModal
                isOpen={isOpen}
                setOpen={setOpen}
                ProjectId={projectId}
                ContactType={`Ask for Price`}
            />
            <div className="">
                <div className="single-property-content mb30-md">
                    <h2 className="sp-lg-title">{title}</h2>
                    <div className="pd-meta mb15 d-md-flex align-items-center">
                        {location && (
                            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
                                {location}
                            </p>
                        )}
                        {/* <a
                            className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
                            href="#"
                        >
                            <i className="fas fa-circle fz10 pe-2" />
                            For {isRent ? 'rent' : 'sale'}
                        </a> */}
                        {/* <a
                            className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
                            href="#"
                        >
                            <i className="far fa-clock pe-2" />
                            {Number(new Date().getFullYear()) -
                                Number(data.yearBuilding)}{' '}
                            years ago
                        </a> */}
                        {/* <a className="ff-heading ml10 ml0-sm fz15" href="#">
                            <i className="flaticon-fullscreen pe-2 align-text-top" />
                            8721
                        </a> */}
                    </div>
                    <div className="property-meta d-flex align-items-center gap-2">
                        {beds && (
                            <span className="text fz15">
                                <i className="flaticon-bed pe-2 align-text-top" />
                                {beds} bed
                            </span>
                        )}
                        {baths && (
                            <span className="text ml20 fz15">
                                <i className="flaticon-shower pe-2 align-text-top" />
                                {baths} bath
                            </span>
                        )}
                        {area && (
                            <span className="text ml20 fz15">
                                <i className="flaticon-expand pe-2 align-text-top" />
                                {area} sqft
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {/* End .col-lg--8 */}

            <div className="">
                <div className="single-property-content">
                    <div className="property-action text-lg-end">
                        {/* <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
                            <a className="icon mr10" href="#">
                                <span className="flaticon-like" />
                            </a>
                            <a className="icon mr10" href="#">
                                <span className="flaticon-new-tab" />
                            </a>
                            <a className="icon mr10" href="#">
                                <span className="flaticon-share-1" />
                            </a>
                            <a className="icon" href="#">
                                <span className="flaticon-printer" />
                            </a>
                        </div> */}
                        {price && price != 0 ? (
                            <>
                                <h3 className="price mb-0">
                                    {`${currentCurrency?.label} ${Math.round(
                                        price * currentCurrency?.value
                                    )?.toLocaleString()}`}
                                </h3>

                                {area && (
                                    <p className="text space fz15">
                                        {`${currentCurrency?.label}  ${(
                                            (price * currentCurrency?.value) /
                                            area
                                        ).toFixed(2)} /sq ft`}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <button
                                    className="ud-btn btn-dark !py-2 !px-6"
                                    onClick={() => setOpen(true)}
                                >
                                    Ask for Price
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* End .col-lg--4 */}
        </>
    )
}

export default PropertyHeader
