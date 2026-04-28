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
    const { types } = useAppSelector((state) => state.MasterReducer)

    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    // ✅ FIX: safe clone of readonly searchParams
    const [currParams, setCurrParams] = useState<URLSearchParams>(
        () => new URLSearchParams(searchParams.toString())
    )

    // ✅ PRICE STATE
    const [priceRange, setPriceRange] = useState<[number, number]>(() => [
        Number(searchParams.get('MinPrice') || 0),
        Number(searchParams.get('MaxPrice') || 100000),
    ])

    useEffect(() => {
        setCurrParams(new URLSearchParams(searchParams.toString()))
    }, [searchParams])

    const selectedCategory = currParams.get('CategoryId') ?? '0'
    const selectedMinArea = currParams.get('MinArea') ?? '0'
    const selectedMaxArea = currParams.get('MaxArea') ?? '0'

    const filteredTypes = types?.map((item: any) => ({
        value: item?.Id,
        label: item?.Name,
    }))

    // ✅ FIX: safe param updater
    const updateSearchParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(currParams.toString())
        newParams.set(key, value)
        setCurrParams(newParams)
    }

    // ✅ FIX: rc-slider type issue
    const handlePriceChange = (value: number | number[]) => {
        if (!Array.isArray(value)) return

        const [min, max] = value

        setPriceRange([min, max])

        updateSearchParams('MinPrice', String(min))
        updateSearchParams('MaxPrice', String(max))
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
                    <button
                        type="button"
                        className="btn-close m-0"
                        data-bs-dismiss="modal"
                    />
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
                                        updateSearchParams(
                                            'CategoryId',
                                            e?.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* AREA */}
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('Sqft')}</h6>

                                <div className="d-flex align-items-center justify-content-between">
                                    <input
                                        type="number"
                                        className="form-control filterInput"
                                        value={selectedMinArea}
                                        onChange={(e) =>
                                            updateSearchParams(
                                                'MinArea',
                                                e.target.value
                                            )
                                        }
                                        placeholder="Min"
                                    />

                                    <span className="mx-2">-</span>

                                    <input
                                        type="number"
                                        className="form-control filterInput"
                                        value={selectedMaxArea}
                                        onChange={(e) =>
                                            updateSearchParams(
                                                'MaxArea',
                                                e.target.value
                                            )
                                        }
                                        placeholder="Max"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="modal-footer justify-content-between">
                    <button
                        className="reset-button"
                        onClick={resetFilters}
                    >
                        <u>{t('ResetFilter')}</u>
                    </button>

                    <button
                        className="ud-btn btn-thm"
                        onClick={onSearch}
                    >
                        <span className="flaticon-search align-text-top pe-[10px]" />
                        {t('Search')}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AdvanceFilterModal