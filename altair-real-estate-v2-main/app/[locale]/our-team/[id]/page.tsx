import AgentSingle from '@/components/our-team/single/AgentSingle'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import React from 'react'

const Page = (props: any) => {
    return (
        <>
            <AgentSingle id={props?.params?.id} />
        </>
    )
}

export default Page
