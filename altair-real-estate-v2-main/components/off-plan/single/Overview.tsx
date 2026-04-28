import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

type Props = {
    area: string
    type: string
    beds: string
    handover: string
    paymentPlan: string
}

const OverView = async ({ area, type, beds, handover, paymentPlan }: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Shared')
    return (
        <>
            {beds && (
                <div className="overview-element d-flex align-items-center">
                    <span
                        className={`!min-w-[50px] !min-h-[50px] icon flaticon-bed`}
                    />
                    <div className="ms-[15px]">
                        <h6 className="mb-0">{t('Bedroom')}</h6>
                        <p className="text mb-0 fz15 line-clamp-2">{beds}</p>
                    </div>
                </div>
            )}

            {handover && (
                <div className="overview-element d-flex align-items-center">
                    <span className={`icon flaticon-event`} />
                    <div className="ms-[15px]">
                        <h6 className="mb-0">{t('Handover')}</h6>
                        <p className="text mb-0 fz15">{`${handover}`}</p>
                    </div>
                </div>
            )}

            {area && (
                <div className="overview-element d-flex align-items-center">
                    <span className={`icon flaticon-expand`} />
                    <div className="ms-[15px]">
                        <h6 className="mb-0">{t('Area')}</h6>
                        <p className="text mb-0 fz15">{area}</p>
                    </div>
                </div>
            )}

            {type && (
                <div className="overview-element d-flex align-items-center">
                    <span className={`icon flaticon-home-1`} />
                    <div className="ms-[15px]">
                        <h6 className="mb-0">{t('Type')}</h6>
                        <p className="text mb-0 fz15">{type}</p>
                    </div>
                </div>
            )}

            {paymentPlan && (
                <div className="overview-element d-flex align-items-center">
                    <span className={`icon flaticon-secure-payment`} />
                    <div className="ms-[15px]">
                        <h6 className="mb-0">{t('PaymentPlan')}</h6>
                        <p className="text mb-0 fz15">{paymentPlan}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default OverView
