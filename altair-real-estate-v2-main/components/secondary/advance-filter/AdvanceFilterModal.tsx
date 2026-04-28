'use client'

import Select from 'react-select'
import { useAppSelector } from '@/store/store'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/navigation'

const AdvanceFilterModal = () => {
    const beds = [
        { value: '0', label: 'Any' },
        { value: '1', label: '1 Beds' },
        { value: '2', label: '2 Beds' },
        { value: '3', label: '3 Beds' },
        { value: '4', label: '4 Beds' },
        { value: '5', label: '5 Beds' },
    ]

    const { types } = useAppSelector((state) => state.MasterReducer)

    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    // ✅ FIX: always clone ReadonlyURLSearchParams
    const [currParams, setCurrParams] = useState<URLSearchParams>(
        () => new URLSearchParams(searchParams.toString())
    )

    useEffect(() => {
        setCurrParams(new URLSearchParams(searchParams.toString()))
    }, [searchParams])

    const selectedCategory = currParams.get('CategoryId') ?? '0'
    const selectedMinBeds = currParams.get('MinBeds') ?? '0'
    const selectedMaxBeds = currParams.get('MaxBeds') ?? '0'
    const selectedMinArea = currParams.get('MinArea') ?? '0'
    const selectedMaxArea = currParams.get('MaxArea') ?? '0'

    const selectedMinPrice = parseInt(currParams.get('MinPrice') ?? '0')
    const selectedMaxPrice = parseInt(currParams.get('MaxPrice') ?? '100000')

    const [priceRange, setPriceRange] = useState<[number, number]>([
        selectedMinPrice,
        selectedMaxPrice,
    ])

    const filteredTypes = types?.map((item: any) => ({
        value: item?.Id,
        label: item?.Name,
    }))

    // ✅ FIX: safe param update
    const updateSearchParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(currParams.toString())
        newParams.set(key, value)
        setCurrParams(newParams)
    }

    // ✅ FIX: slider update
    const handlePriceChange = (val: number | number[]) => {
        if (!Array.isArray(val)) return

        const [min, max] = val

        setPriceRange([min, max])

        const newParams = new URLSearchParams(currParams.toString())
        newParams.set('MinPrice', String(min))
        newParams.set('MaxPrice', String(max))
        setCurrParams(newParams)
    }

    const onSearch = () => {
        router.replace(`${path}?${currParams.toString()}`)
    }

    const resetFilters = () => {
        router.replace(`${path}`)
    }

    const customStyles = {
        option: (styles: any, { isFocused, isSelected }: any) => ({
            ...styles,
            color: 'black',
            backgroundColor:
                isSelected || isFocused
                    ? 'var(--theme-default2)'
                    : undefined,
        }),
    }

    const t = useTranslations('Shared')

    return (
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content overflow-y-auto h-full max-h-screen">

                {/* HEADER */}
                <div className="modal-header pl30 pr30">
                    <h5 className="modal-title">{t('Filter')}</h5>
                    <button type="button" className="btn-close m-0" data-bs-dismiss="modal" />
                </div>

                {/* BODY */}
                <div className="modal-body pb-0">

                    {/* PRICE SLIDER */}
                    <div className="widget-wrapper mb-4">
                        <h6 className="list-title">{t('Price')}</h6>

                        <Slider
                            range
                            min={0}
                            max={100000}
                            value={priceRange}
                            onChange={handlePriceChange}
                        />

                        <div className="d-flex align-items-center mt-2">
                            <span>${priceRange[0]}</span>
                            <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>

                    {/* TYPE */}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('Type')}</h6>

                                <Select
                                    options={filteredTypes}
                                    value={filteredTypes?.find(
                                        (item) => item.value == selectedCategory
                                    )}
                                    styles={customStyles}
                                    onChange={(e: any) =>
                                        updateSearchParams('CategoryId', e?.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* BEDS */}
                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('MinBeds')}</h6>

                                <Select
                                    options={beds}
                                    value={beds.find(
                                        (item) => item.value == selectedMinBeds
                                    )}
                                    onChange={(e: any) =>
                                        updateSearchParams('MinBeds', e?.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 mt-3">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('MaxBeds')}</h6>

                                <Select
                                    options={beds}
                                    value={beds.find(
                                        (item) => item.value == selectedMaxBeds
                                    )}
                                    onChange={(e: any) =>
                                        updateSearchParams('MaxBeds', e?.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* AREA */}
                        <div className="col-sm-6 mt-3">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('Sqft')}</h6>

                                <div className="d-flex align-items-center gap-2">
                                    <input
                                        type="number"
                                        value={selectedMinArea}
                                        onChange={(e) =>
                                            updateSearchParams(
                                                'MinArea',
                                                e.target.value
                                            )
                                        }
                                        className="form-control"
                                    />

                                    <span>-</span>

                                    <input
                                        type="number"
                                        value={selectedMaxArea}
                                        onChange={(e) =>
                                            updateSearchParams(
                                                'MaxArea',
                                                e.target.value
                                            )
                                        }
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="modal-footer justify-content-between">
                    <button className="reset-button" onClick={resetFilters}>
                        <u>{t('ResetFilter')}</u>
                    </button>

                    <button className="ud-btn btn-thm" onClick={onSearch}>
                        <span className="flaticon-search align-text-top pe-[10px]" />
                        {t('Search')}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AdvanceFilterModal