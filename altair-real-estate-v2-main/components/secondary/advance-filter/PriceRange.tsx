'use client'

import { usePathname } from '@/navigation'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const PriceRange = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const selectedMinPrice = parseInt(searchParams.get('MinPrice') ?? '0')
    const selectedMaxPrice = parseInt(searchParams.get('MaxPrice') ?? '100000')

    const [price, setPrice] = useState<[number, number]>([
        selectedMinPrice,
        selectedMaxPrice,
    ])

    const updateSearchParams = (values: [number, number]) => {
        const currParams = new URLSearchParams(searchParams.toString())

        currParams.set('MinPrice', String(values[0]))
        currParams.set('MaxPrice', String(values[1]))

        router.replace(`${path}?${currParams.toString()}`)
    }

    useEffect(() => {
        updateSearchParams(price)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price])

    return (
        <div className="range-wrapper">
            <Slider
                range
                min={0}
                max={100000}
                value={price}
                onChange={(value) => {
                    setPrice(value as [number, number])
                }}
            />

            <div className="d-flex align-items-center mt-2">
                <span id="slider-range-value1">${price[0]}</span>
                <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                <span id="slider-range-value2">${price[1]}</span>
            </div>
        </div>
    )
}

export default PriceRange