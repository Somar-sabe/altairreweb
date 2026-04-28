import AboutArea from '@/components/about-company/AboutArea'
import AboutBanner from '@/components/about-company/AboutBanner'
import AboutIntro from '@/components/about-company/AboutIntro'
import FunFact from '@/components/about-company/FunFact'
import OurPartners from '@/components/shared/our-partners'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'
import CallToActions from '@/components/about-company/CallToActions'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Breadcrumb tab="About Company" title="About Company" />
            <AboutArea />
            <AboutBanner />
            <FunFact />
            <AboutIntro />
            <OurPartners />
            <CallToActions />
        </>
    )
}

export default page
