import { Link, usePathname } from '@/navigation'
import React from 'react'
import Map from '../shared/icons/Map'
import { useSearchParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

type Props = {
    count: number
    page: number
    totalItems: number
}

const TopFilterBar = ({ count, page, totalItems }: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const path = usePathname()
    const updateSearchParams = (data: { key: string; value: string }[]) => {
        const currParams = new URLSearchParams(searchParams)
        data?.forEach(({ key, value }) => {
            currParams.set(key, value)
        })
        router.replace(`${path}?${currParams?.toString()}`)
    }
    const t = useTranslations('Shared')
    return (
        <>
            <div className="col-sm-6">
                <div className="text-center sm:!text-left rtl:sm:!text-right">
                    <p className="pagination_page_count mb-0">
                        {count * page - (count - 1)}-
                        {count * page > totalItems ? totalItems : count * page}{' '}
                        {t('Of')} {totalItems} {t('Results')}
                    </p>
                </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6 flex items-center justify-end gap-2">
                {/* <Link
                    href={'/off-plan/map'}
                    className="flex items-center gap-2 bg-brand-100 px-2 py-1 text-white"
                >
                    <span>Go To Map</span>
                    <Map className="animate-rotate" />
                </Link> */}
                <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
                    <div className="pcs_dropdown pr10 d-flex align-items-center">
                        <span className="whitespace-nowrap">{t('Sort')}</span>
                        <select
                            className="form-select"
                            onChange={(e) => {
                                e?.preventDefault()
                                const words =
                                    e?.currentTarget?.value?.split('|')
                                updateSearchParams([
                                    { key: 'OrderBy', value: words?.[0] },
                                    { key: 'Desc', value: words?.[1] },
                                ])
                            }}
                        >
                            <option value={'CreatedDate|True'}>
                                {t('Newest')}
                            </option>

                            <option value="StartingPrice|False">
                                {t('PriceLow')}
                            </option>
                            <option value="StartingPrice|True">
                                {t('PriceHigh')}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            {/* End .col-sm-6 */}
        </>
    )
}

export default TopFilterBar
