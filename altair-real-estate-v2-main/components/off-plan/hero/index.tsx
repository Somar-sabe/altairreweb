'use client'

import Image from 'next/image'
import AdvanceFilterModal from '../advance-filter/AdvanceFilterModal'
import HeroContent from './HeroContent'
import { useTranslations } from 'next-intl'

const Hero = () => {
    const t = useTranslations('OffPlan.Hero')
    return (
        <>
            <div className="inner-banner-style1 text-center">
                <h2 className="hero-title animate-up-1 ">{t('Title')}</h2>
                {/* <p className="hero-text fz15 animate-up-2">
                    We've more than 745,000 apartments, place & plot.
                </p> */}

                <HeroContent />
            </div>
            {/* End Hero content */}

            {/* <!-- Advance Feature Modal Start --> */}
            <div className="advance-feature-modal">
                <div
                    className="modal fade h-screen overflow-hidden"
                    id="advanceSeachModal"
                    tabIndex={-1}
                    aria-labelledby="advanceSeachModalLabel"
                    aria-hidden="true"
                >
                    <AdvanceFilterModal />
                </div>
            </div>
            {/* <!-- Advance Feature Modal End --> */}
        </>
    )
}

export default Hero
