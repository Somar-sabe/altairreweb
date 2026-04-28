'use client'

import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const PriceRange = ({ filterFunctions }: any) => {
    const initialMin = filterFunctions?.priceRange?.[0] ?? 20
    const initialMax = filterFunctions?.priceRange?.[1] ?? 70987

    const [price, setPrice] = useState<[number, number]>([
        initialMin,
        initialMax,
    ])

    // Sync external filter state → slider (important fix)
    useEffect(() => {
        if (filterFunctions?.priceRange) {
            setPrice([
                filterFunctions.priceRange[0] ?? 0,
                filterFunctions.priceRange[1] ?? 100000,
            ])
        }
    }, [filterFunctions?.priceRange])

    const handleOnChange = (value: [number, number]) => {
        setPrice(value)

        filterFunctions?.handlepriceRange([
            value[0] || 0,
            value[1] || 0,
        ])
    }

    return (
        <div className="range-wrapper">
            <Slider
                range
                min={0}
                max={100000}
                value={price}
                onChange={(value) => handleOnChange(value as [number, number])}
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