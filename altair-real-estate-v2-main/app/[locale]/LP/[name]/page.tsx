import React from 'react'
import '@/components/LP/css/aports-responsive.css'
import '@/components/LP/css/aports.css'
import '@/components/LP/css/animate/animate.min.css'
import '@/components/LP/css/animate/custom-animate.css'
import '@/components/LP/aports-icons/style.css'
import '@/components/LP/aeternitas-icons/style.css'
import { redirect } from '@/navigation'
import dynamic from 'next/dynamic'
import Hero from '@/components/LP/Hero'
import RegisterButton from '@/components/LP/RegisterButton'

type Props = {}

const Overview = dynamic(() => import('@/components/LP/Overview'), {
    ssr: false,
})
const Features = dynamic(() => import('@/components/LP/Features'), {
    ssr: false,
})
const FloorPlan = dynamic(() => import('@/components/LP/FloorPlan'), {
    ssr: false,
})
const Contact = dynamic(() => import('@/components/LP/Contact'), { ssr: false })

const page = async ({ params }: any) => {
    const { name } = params
    let data
    try {
        data = (await import(`@/components/LP/data/${name}.json`))?.default
    } catch (e) {
        redirect('/')
    }

    return (
        <>
            <Hero name={name} />
            <Overview name={name} />
            <Features name={name} />
            {data?.length > 0 && <FloorPlan data={data} name={name} />}
            <Contact name={name} />
            <RegisterButton />
        </>
    )
}

export default page
