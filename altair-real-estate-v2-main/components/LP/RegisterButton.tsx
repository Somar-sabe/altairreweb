'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const RegisterButton = (props: Props) => {
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const scrollTop = window.scrollY
            const progress = (scrollTop / scrollableHeight) * 100
            setScrolled(progress > 5)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Link
                href={'#contact'}
                className={`fixed bottom-12 text-white px-10 py-2 right-28 z-10 bg-brand-100 ${
                    isScrolled
                        ? 'max-h-screen opacity-100'
                        : 'max-h-0 opacity-0'
                } `}
            >
                {'Register Now'}
            </Link>
        </>
    )
}

export default RegisterButton
