'use client'

import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const PriceRange = () => {
    // ✅ use number[] instead of tuple
    const [price, setPrice] = useState<number[]>([20, 70987])

    // handler
    const handleOnChange = (value: number | number[]) => {
        if (!Array.isArray(value)) return

        setPrice(value)
    }

    return (
        <div className="range-wrapper">

            {/* Slider */}
            <Slider
                range
                min={0}
                max={100000}
                value={price}
                onChange={handleOnChange}
            />

            {/* Labels */}
            <div className="d-flex align-items-center mt-3">
                <span>${price[0]}</span>

                <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />

                <span>${price[1]}</span>
            </div>

        </div>
    )
}

export default PriceRange