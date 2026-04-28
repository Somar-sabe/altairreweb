'use client'

import Select from 'react-select'
import { useAppSelector } from '@/store/store'
import { useRouter, useSearchParams } from 'next/navigation'
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

    // helper: always get fresh mutable params
    const getParams = () => new URLSearchParams(searchParams.toString())

    const selectedCategory = searchParams.get('CategoryId') ?? '0'
    const selectedMinBeds = searchParams.get('MinBeds') ?? '0'
    const selectedMaxBeds = searchParams.get('MaxBeds') ?? '0'
    const selectedMinArea = searchParams.get('MinArea') ?? '0'
    const selectedMaxArea = searchParams.get('MaxArea') ?? '0'
    const selectedMinPrice = searchParams.get('MinPrice') ?? '0'
    const selectedMaxPrice = searchParams.get('MaxPrice') ?? '0'

    const filteredTypes = types?.map((item: any) => ({
        value: item?.Id,
        label: item?.Name,
    }))

    const updateSearchParams = (key: string, value: string) => {
        const newParams = getParams()
        newParams.set(key, value)

        router.replace(`${path}?${newParams.toString()}`)
    }

    const onSearch = () => {
        router.replace(`${path}?${getParams().toString()}`)
    }

    const resetFilters = () => {
        router.replace(path)
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

                    {/* PRICE */}
                    <div className="row">
                        <div className="col-sm-6">
                            <h6>{t('MinPrice')}</h6>
                            <input
                                type="number"
                                className="form-control filterInput"
                                value={selectedMinPrice}
                                onChange={(e) =>
                                    updateSearchParams(
                                        'MinPrice',
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-sm-6">
                            <h6>{t('MaxPrice')}</h6>
                            <input
                                type="number"
                                className="form-control filterInput"
                                value={selectedMaxPrice}
                                onChange={(e) =>
                                    updateSearchParams(
                                        'MaxPrice',
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    </div>

                    {/* TYPE + BEDS */}
                    <div className="row mt-3">

                        <div className="col-sm-6">
                            <h6>{t('Type')}</h6>
                            <Select
                                options={filteredTypes}
                                value={filteredTypes?.find(
                                    (item) =>
                                        item.value == selectedCategory
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

                        <div className="col-sm-6">
                            <h6>{t('MinBeds')}</h6>
                            <Select
                                options={beds}
                                value={beds.find(
                                    (item) =>
                                        item.value == selectedMinBeds
                                )}
                                styles={customStyles}
                                onChange={(e: any) =>
                                    updateSearchParams(
                                        'MinBeds',
                                        e?.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-sm-6 mt-3">
                            <h6>{t('MaxBeds')}</h6>
                            <Select
                                options={beds}
                                value={beds.find(
                                    (item) =>
                                        item.value == selectedMaxBeds
                                )}
                                styles={customStyles}
                                onChange={(e: any) =>
                                    updateSearchParams(
                                        'MaxBeds',
                                        e?.value
                                    )
                                }
                            />
                        </div>

                        {/* AREA */}
                        <div className="col-sm-6 mt-3">
                            <h6>{t('Sqft')}</h6>

                            <div className="d-flex align-items-center gap-2">
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
                                />

                                <span>-</span>

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
                                />
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

                    <button className="ud-btn btn-thm" onClick={onSearch}>
                        {t('Search')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdvanceFilterModal