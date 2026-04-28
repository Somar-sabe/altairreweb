'use client'
import { Route } from 'next'
import { Link } from '@/navigation'
import React, { Fragment } from 'react'
import CustomImage from '../CustomImage'
import { poppins } from '@/components/providers/Providers'
import { useAppSelector } from '@/store/store'

type Props = {
    img: string
    price: number
    name: string
    location: string
    href: Route
    stickers?: string[]
}

const PropertyCard = ({
    img,

    price,
    name,
    location,
    href,
    stickers,
}: Props) => {
    const { currentCurrency } = useAppSelector((state) => state.MasterReducer)
    return (
        <Link
            href={href}
            className="w-full h-[300px] rounded-lg overflow-hidden relative group flex flex-col items-center"
        >
            <div className="flex flex-col gap-1 absolute top-4 start-4 z-10">
                {stickers?.map((item: any) => {
                    return (
                        <Fragment key={item?.Name}>
                            {item?.Name && (
                                <span
                                    className="bg-[#0000004d] px-3 rounded-md py-2 font-bold w-fit text-white text-xs"
                                    style={{
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                    }}
                                >
                                    {item?.Name}
                                </span>
                            )}
                        </Fragment>
                    )
                })}
            </div>
            <CustomImage
                src={img}
                alt={name}
                fill
                containerclassname="w-full h-full flex flex-col items-center justify-center select-none"
                className="object-cover bg-black group-hover:scale-110 transition-all duration-300 "
                quality={1}
                // priority
            />

            <div
                className="absolute bottom-4 px-4 py-3 rounded-xl w-[95%] bg-[#0000004d] flex gap-10 justify-between overflow-hidden text-white"
                style={{
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                }}
            >
                <span
                    className={`font-bold text-base ${poppins?.className} line-clamp-2 `}
                >
                    {name}
                </span>
                <div className="flex flex-col items-end">
                    <span className=" truncate text-sm">{location}</span>
                    <span className=" min-w-fit my-auto font-bold text-lg whitespace-nowrap">
                        {price > 0
                            ? `${currentCurrency?.label ?? 'AED'} ${Math.round(
                                  price * currentCurrency?.value
                              )?.toLocaleString()}`
                            : 'Ask for Price'}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard
