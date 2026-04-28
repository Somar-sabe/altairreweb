import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import PropertyFilteringMap from '@/components/secondary/map/PropertyFilteringMap'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <PropertyFilteringMap />
        </>
    )
}

export default Page
