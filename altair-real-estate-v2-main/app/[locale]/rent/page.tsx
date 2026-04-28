import ProperteyFiltering from '@/components/rent/PropertyFiltering'
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
