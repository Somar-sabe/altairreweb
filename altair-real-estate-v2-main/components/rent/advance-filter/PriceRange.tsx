'use client'

import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { useSearchParams, useRouter } from 'next/navigation'
import { usePathname } from '@/navigation'

const PriceRange = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const selectedMinPrice = parseInt(searchParams.get('MinPrice') ?? '0')
    const selectedMaxPrice = parseInt(searchParams.get('MaxPrice') ?? '100000')

    const [range, setRange] = useState<[number, number]>([
        selectedMinPrice,
        selectedMaxPrice,
    ])

    useEffect(() => {
        setRange([selectedMinPrice, selectedMaxPrice])
    }, [selectedMinPrice, selectedMaxPrice])

    const updateSearchParams = (value: [number, number]) => {
        const currParams = new URLSearchParams(searchParams.toString())

        currParams.set('MinPrice', String(value[0]))
        currParams.set('MaxPrice', String(value[1]))

        router.replace(`${path}?${currParams.toString()}`)
    }

    const handleChange = (value: number | number[]) => {
        const val = value as [number, number]
        setRange(val)
        updateSearchParams(val)
    }

    return (
        <div className="range-wrapper">
            <Slider
                range
                min={0}
                max={100000}
                value={range}
                onChange={handleChange}
            />

            <div className="d-flex align-items-center">
                <span>${range[0]}</span>
                <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                <span>${range[1]}</span>
            </div>
        </div>
    )
}

export default PriceRange