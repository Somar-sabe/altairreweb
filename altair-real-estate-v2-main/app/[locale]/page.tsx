// import Hero from '@/components/home/hero'
// import ApartmentTypes from '@/components/home/apartment-types'
// import PopularProperties from '@/components/home/popular-properties'
// import HowItWorks from '@/components/home/how-it-works'
// import DreamHouse from '@/components/home/dream-house'
// import OurPartners from '@/components/shared/our-partners'
// import Related from '@/components/media/single/Related'
import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'

export const revalidate = 30 * 60

const Hero = dynamic(() => import('@/components/home/hero'))
const ApartmentTypes = dynamic(
    () => import('@/components/home/apartment-types')
)
const PopularProjects = dynamic(
    () => import('@/components/home/popular-projects')
)
const PopularProperties = dynamic(
    () => import('@/components/home/popular-properties')
)
const HowItWorks = dynamic(() => import('@/components/home/how-it-works'))
const DreamHouse = dynamic(() => import('@/components/home/dream-house'))
const OurPartners = dynamic(() => import('@/components/shared/our-partners'))
const Related = dynamic(() => import('@/components/media/single/Related'))

export default function Home({ params }: any) {
    const locale = useLocale()

    unstable_setRequestLocale(locale)
    const t = useTranslations('Menu')
    return (
        <>
            <Hero />

            <ApartmentTypes />
            {/* <PopularProperties /> */}
            <PopularProjects />

            <HowItWorks />

            <DreamHouse />
            <Related title={t('News')} />
            <OurPartners />
        </>
    )
}
