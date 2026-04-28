import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'

const ListingItems = ({ data }: any) => {
    return (
        <>
            {data?.map((listing: any) => (
                <div className="col-md-6 py-2" key={listing.id}>
                    <div className="h-[320px]" key={listing.id}>
                        <div className="listing-style6 h-full">
                            <div className="list-thumb h-full">
                                <Image
                                    width={386}
                                    height={334}
                                    className="w-full object-cover h-full "
                                    src={listing.image}
                                    alt="listings"
                                />

                                {/* <div className="sale-sticker-wrap">
                                {!listing.forRent && (
                                    <div className="list-tag fz12">
                                        <span className="flaticon-electricity me-2" />
                                        FEATURED
                                    </div>
                                )}
                            </div> */}

                                <div className="list-meta">
                                    <div className="icons">
                                        <a href="#">
                                            <span className="flaticon-like" />
                                        </a>
                                        <a href="#">
                                            <span className="flaticon-new-tab" />
                                        </a>
                                        <a href="#">
                                            <span className="flaticon-fullscreen" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-content">
                                <div className="list-price mb-2">
                                    {listing.price}
                                </div>
                                <h6 className="list-title">
                                    <Link href={`/rent/${listing.id}`}>
                                        {listing.title}
                                    </Link>
                                </h6>
                                <p className="list-text">{listing.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListingItems
