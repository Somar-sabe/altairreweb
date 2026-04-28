'use client'
import React from 'react'
import FloorPlans from './FloorPlans'
import { useTranslations } from 'next-intl'

type Props = {
    data: any[]
    name: string
}

const FloorPlan = ({ data, name }: Props) => {
    const t = useTranslations(`LP.${name}.FloorPlan`)
    return (
        <section className="floor-plan">
            <div className="w-full !max-w-[1200px] mx-auto px-4">
                <div className="section-title text-center">
                    <span className="section-title__tagline">{t('Label')}</span>
                    <h2 className="section-title__title">{t('Title')}</h2>
                    <p className="floor-plan__text whitespace-pre-line">
                        {t('Desc')}
                    </p>
                </div>
                <FloorPlans data={data} name={name} />
            </div>
        </section>
    )
}

export default FloorPlan
