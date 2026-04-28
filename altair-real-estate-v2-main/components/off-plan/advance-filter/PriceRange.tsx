'use client'

import { usePathname } from '@/navigation'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const PriceRange = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const selectedMinPrice = Number(searchParams.get('MinPrice') ?? 0)
    const selectedMaxPrice = Number(searchParams.get('MaxPrice') ?? 100000)

    const [price, setPrice] = useState<[number, number]>([
        selectedMinPrice,
        selectedMaxPrice,
    ])

    // 🔥 Update URL params
    const updateSearchParams = (value: [number, number]) => {
        const currParams = new URLSearchParams(searchParams.toString())

        currParams.set('MinPrice', String(value[0]))
        currParams.set('MaxPrice', String(value[1]))

        router.replace(`${path}?${currParams.toString()}`)
    }

    // sync URL when slider changes
    useEffect(() => {
        updateSearchParams(price)
    }, [price])

    return (
        <div className="range-wrapper">

            {/* 🔥 RC SLIDER */}
            <Slider
                range
                min={0}
                max={100000}
                value={price}
                onChange={(value) => setPrice(value as [number, number])}
            />

            {/* Labels */}
            <div className="d-flex align-items-center mt-2">
                <span id="slider-range-value1">${price[0]}</span>

                <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />

                <span id="slider-range-value2">${price[1]}</span>
            </div>

        </div>
    )
}

export default PriceRange