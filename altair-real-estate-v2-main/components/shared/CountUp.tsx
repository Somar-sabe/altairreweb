'use client'
import React, { useRef } from 'react'
import CountUp2, { CountUpProps, useCountUp } from 'react-countup'

type Props = {
    start: number
    end: number
    duration: number
}

const CountUp = ({ start, end, duration }: Props) => {
    const ref = useRef<HTMLSpanElement>(null!)
    useCountUp({
        start,
        end,
        ref,
        duration,
        separator: '',
    })
    return <span ref={ref} />
}

export default CountUp
