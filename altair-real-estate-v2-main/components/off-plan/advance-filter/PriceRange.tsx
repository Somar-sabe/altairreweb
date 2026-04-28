'use client'

import { usePathname } from '@/navigation'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const PriceRange = () => {
    const searchParams = useSearchParams()

    const router = useRouter()
    const path = usePathname()
    const selectedMinPrice = parseInt(searchParams.get('MinPrice') ?? '0')
    const selectedMaxPrice = parseInt(searchParams.get('MaxPrice') ?? '100000')

    const [price, setPrice] = useState({
        value: { min: selectedMinPrice, max: selectedMaxPrice },
    })

    // price range handler

    const updateSearchParams = (value: any) => {
        const currParams = new URLSearchParams(searchParams)
        currParams.set('MinPrice', value?.min)
        currParams.set('MaxPrice', value?.max)
        router.replace(`${path}?${currParams?.toString()}`)
    }

    useEffect(() => {
        updateSearchParams(price?.value)
    }, [price])

    return (
        <>
            <div className="range-wrapper">
                <InputRange
                    formatLabel={() => ``}
                    maxValue={100000}
                    minValue={0}
                    value={{
                        min: price?.value?.min,
                        max: price?.value?.max,
                    }}
                    onChange={(value) => {
                        const val = value as Range

                        setPrice({ value: { ...val } })
                    }}
                />
                <div className="d-flex align-items-center">
                    <span id="slider-range-value1">${selectedMinPrice}</span>
                    <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                    <span id="slider-range-value2">${selectedMaxPrice}</span>
                </div>
            </div>
        </>
    )
}

export default PriceRange
