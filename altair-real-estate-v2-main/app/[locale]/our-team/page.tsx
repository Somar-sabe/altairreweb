import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FilteringAgents from '@/components/our-team/FilteringAgents'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <Breadcrumb tab="our-team" title="Our Team" isTransparent />
            <FilteringAgents />
        </>
    )
}

export default Page
