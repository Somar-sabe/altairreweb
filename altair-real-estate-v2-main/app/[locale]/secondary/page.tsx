import ProperteyFiltering from '@/components/secondary/PropertyFiltering'
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
