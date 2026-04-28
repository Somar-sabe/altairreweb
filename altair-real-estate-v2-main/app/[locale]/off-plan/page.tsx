import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'

import ProperteyFiltering from '@/components/off-plan/PropertyFiltering'
import React, { Suspense } from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <Suspense>
                <ProperteyFiltering />
            </Suspense>
        </>
    )
}

export default Page
