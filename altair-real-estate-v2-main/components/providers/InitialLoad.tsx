'use client'
import { setAreas, setCurrencies, setTypes } from '@/store/slices/MasterReducer'
import { useAppDispatch } from '@/store/store'
import { getCurrencies, getMasterData } from '@/utils/routes'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useLocale } from 'next-intl'

type Props = {
    children?: React.ReactNode
}

const InitialLoad = ({ children }: Props) => {
    const locale = useLocale()
    const dispatch = useAppDispatch()
    const { data } = useQuery(['masterData', locale], () =>
        getMasterData(locale)
    )
    const { data: data2 } = useQuery(['currenciesData'], () => getCurrencies())

    const currencies = ['aed', 'usd', 'eur', 'rub', 'sar', 'cny', 'kzt']

    useEffect(() => {
        if (data) {
            if (data?.Categories) dispatch(setTypes(data?.Categories))
            if (data?.Areas) dispatch(setAreas(data?.Areas))
        }
    }, [data])

    useEffect(() => {
        if (data2) {
            if (data2?.aed) {
                const currencyData = Object.keys(data2?.aed).reduce(
                    (result: any[], key) => {
                        if (currencies.includes(key))
                            result.push({
                                label: key?.toUpperCase(),
                                value: data2?.aed[key],
                            })
                        return result
                    },
                    []
                )

                dispatch(setCurrencies(currencyData))
            }
        }
    }, [data2])

    return <>{children}</>
}

export default InitialLoad
