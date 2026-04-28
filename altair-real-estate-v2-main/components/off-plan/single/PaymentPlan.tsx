import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

type Props = {
    data: any[]
}

const PaymentPlan = ({ data }: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('OffPlan.Single')
    return (
        <div className="flex flex-col gap-4">
            <h4 className="title fz17 whitespace-nowrap">{t('PaymentPlan')}</h4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map((item, index) => {
                    return (
                        <div
                            className="flex flex-col gap-1"
                            key={index + item?.Name}
                        >
                            <h5 className="text-brand-100">{item?.Amount}</h5>
                            <span className="font-medium">{item?.Name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PaymentPlan
