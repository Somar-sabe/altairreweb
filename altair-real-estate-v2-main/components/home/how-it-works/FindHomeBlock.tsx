import { useTranslations } from 'next-intl'
import React from 'react'

const FindHomeBlock = () => {
    const blocks = [
        {
            icon: 'flaticon-search-1',
            number: '01',
            subtitle: 'Search Your Dream Home',
            text: 'Get ready to launch your real estate website without...',
        },
        {
            icon: 'flaticon-chat',
            number: '02',
            subtitle: 'Choose The House You Like',
            text: 'Get ready to launch your real estate website without...',
        },
        {
            icon: 'flaticon-bird-house',
            number: '03',
            subtitle: 'Enquire About This Property',
            text: 'Get ready to launch your real estate website without...',
        },
        {
            icon: 'flaticon-house-1',
            number: '04',
            subtitle: 'Own Your Home',
            text: 'Get ready to launch your real estate website without...',
        },
    ]

    const t = useTranslations('Home.HowItWorks.Items')

    return (
        <>
            {blocks.map((block, index) => (
                <div className="col-sm-6" key={index}>
                    <div className="iconbox-style6 relative">
                        <div className="rtl:absolute rtl:!end-[90px] top-0">
                            <span className={`icon ${block.icon}`} />
                        </div>
                        <h3 className="title mb-1">{block.number}</h3>
                        <h6 className="subtitle">{t(`${index + 1}.Title`)}</h6>
                        <p className="iconbox-text">{t(`${index + 1}.Desc`)}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FindHomeBlock
