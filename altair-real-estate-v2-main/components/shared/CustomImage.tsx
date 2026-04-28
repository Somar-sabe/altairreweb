'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Spinner from './Spinner'

type Props = {
    src: string
    fill?: boolean
    className?: string
    containerclassname?: string
    width?: number
    height?: number
    priority?: boolean
    alt?: string
    quality?: number
    unoptimized?: boolean
    onClick?: () => void
}

const CustomImage = (props: Props) => {
    const [isLoading, setLoading] = useState(true)
    return (
        <div
            className={`relative bg-black flex flex-col items-center justify-center ${props?.containerclassname}`}
            onClick={props?.onClick}
        >
            <Image
                {...props}
                onClick={() => {}}
                alt={props?.alt ?? ''}
                sizes="100%"
                onLoad={() => setLoading(false)}
                className={props?.className}
                priority={props?.priority ?? false}
                quality={props?.quality ?? 100}
            />

            <Spinner
                className={`${
                    isLoading ? 'flex' : 'hidden'
                } absolute w-10 h-10 z-10`}
            />
        </div>
    )
}

export default CustomImage
