'use client'
import Select from 'react-select'
import { useAppSelector } from '@/store/store'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/navigation'

const AdvanceFilterModal = () => {
    const { types } = useAppSelector((state) => state.MasterReducer)
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const [currParams, setCurrParams] = useState<URLSearchParams>(searchParams)

    useEffect(() => {
        setCurrParams(searchParams)
    }, [searchParams])

    const selectedCategory = currParams?.get('CategoryId') ?? '0'
    // const selectedMinBeds = currParams?.get('MinBeds') ?? '0'
    // const selectedMaxBeds = currParams?.get('MaxBeds') ?? '0'
    const selectedMinArea = currParams?.get('MinArea') ?? '0'
    const selectedMaxArea = currParams?.get('MaxArea') ?? '0'
    const selectedMinPrice = currParams?.get('MinPrice') ?? '0'
    const selectedMaxPrice = currParams?.get('MaxPrice') ?? '0'

    const filteredTypes = types?.map((item: any) => ({
        value: item?.Id,
        label: item?.Name,
    }))

    const updateSearchParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(currParams)
        newParams.set(key, value)
        setCurrParams(newParams)
    }

    const onSearch = () => {
        router.replace(`${path}?${currParams?.toString()}`)
    }

    const resetFilters = () => {
        router.replace(`${path}`)
    }

    const customStyles = {
        option: (styles: any, { isFocused, isSelected, isHovered }: any) => {
            return {
                ...styles,
                color: 'black',
                backgroundColor: isSelected
                    ? 'var(--theme-default2)'
                    : isHovered
                    ? 'var(--theme-default2)'
                    : isFocused
                    ? 'var(--theme-default2)'
                    : undefined,
            }
        },
    }

    const t = useTranslations('Shared')

    return (
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content overflow-y-auto h-full max-h-screen">
                <div className="modal-header pl30 pr30">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {t('Filter')}
                    </h5>
                    <button
                        type="button"
                        className="btn-close m-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                {/* End modal-header */}

                <div className="modal-body pb-0 ">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('MinPrice')}</h6>
                                <div className="form-style2 input-group">
                                    <input
                                        type="number"
                                        className="form-control filterInput"
                                        value={selectedMinPrice}
                                        onChange={(e: any) =>
                                            // filterFunctions?.handlesquirefeet(
                                            //     [
                                            //         e.target.value,
                                            //         (
                                            //             document.getElementById(
                                            //                 'maxFeet3'
                                            //             ) as any
                                            //         ).value / 1,
                                            //     ]
                                            // )
                                            updateSearchParams(
                                                'MinPrice',
                                                e?.currentTarget?.value
                                            )
                                        }
                                        placeholder="Min."
                                        id="minFeet3"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('MaxPrice')}</h6>
                                <div className="form-style2 input-group">
                                    <input
                                        type="number"
                                        className="form-control filterInput"
                                        value={selectedMaxPrice}
                                        onChange={(e: any) =>
                                            // filterFunctions?.handlesquirefeet(
                                            //     [
                                            //         e.target.value,
                                            //         (
                                            //             document.getElementById(
                                            //                 'maxFeet3'
                                            //             ) as any
                                            //         ).value / 1,
                                            //     ]
                                            // )
                                            updateSearchParams(
                                                'MaxPrice',
                                                e?.currentTarget?.value
                                            )
                                        }
                                        placeholder="Max."
                                        id="minFeet3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    {/* End .col-6 */}

                    {/* <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">Property ID</h6>
                                <div className="form-style2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="RT04949213"
                                    />
                                </div>
                            </div>
                        </div> */}
                    {/* End .col-6 */}

                    {/* End .row */}

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('Type')}</h6>
                                <div className="form-style2 input-group">
                                    <Select
                                        name="colors"
                                        options={filteredTypes}
                                        value={filteredTypes?.find(
                                            (item) =>
                                                item?.value == selectedCategory
                                        )}
                                        styles={customStyles}
                                        onChange={(e: any) =>
                                            // filterFunctions?.setPropertyTypes([
                                            //     e.value,
                                            // ])
                                            updateSearchParams(
                                                'CategoryId',
                                                e?.value
                                            )
                                        }
                                        className="select-custom"
                                        classNamePrefix="select"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">Min Beds</h6>
                                <div className="form-style2 input-group">
                                    <Select
                                        value={beds?.find(
                                            (item) =>
                                                item?.value == selectedMinBeds
                                        )}
                                        name="colors"
                                        options={beds}
                                        styles={customStyles}
                                        onChange={(e: any) =>
                                            // filterFunctions?.setPropertyTypes([
                                            //     e.value,
                                            // ])
                                            updateSearchParams(
                                                'MinBeds',
                                                e?.value
                                            )
                                        }
                                        className="select-custom"
                                        classNamePrefix="select"
                                        required
                                    />
                                </div>
                            </div>
                        </div> */}
                        {/* End .col-md-6 */}

                        {/* <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">Max Beds</h6>
                                <div className="form-style2 input-group">
                                    <Select
                                        value={beds?.find(
                                            (item) =>
                                                item?.value == selectedMaxBeds
                                        )}
                                        name="colors"
                                        options={beds}
                                        styles={customStyles}
                                        onChange={(e: any) =>
                                            // filterFunctions?.setPropertyTypes([
                                            //     e.value,
                                            // ])
                                            updateSearchParams(
                                                'MaxBeds',
                                                e?.value
                                            )
                                        }
                                        className="select-custom"
                                        classNamePrefix="select"
                                        required
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className="col-sm-6">
                            <div className="widget-wrapper">
                                <h6 className="list-title">{t('Sqft')}</h6>
                                <div className="space-area">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="form-style1">
                                            <input
                                                type="number"
                                                className="form-control filterInput"
                                                value={selectedMinArea}
                                                onChange={(e: any) =>
                                                    // filterFunctions?.handlesquirefeet(
                                                    //     [
                                                    //         e.target.value,
                                                    //         (
                                                    //             document.getElementById(
                                                    //                 'maxFeet3'
                                                    //             ) as any
                                                    //         ).value / 1,
                                                    //     ]
                                                    // )
                                                    updateSearchParams(
                                                        'MinArea',
                                                        e?.currentTarget?.value
                                                    )
                                                }
                                                placeholder="Min."
                                                id="minFeet3"
                                            />
                                        </div>
                                        <span className="dark-color">-</span>
                                        <div className="form-style1">
                                            <input
                                                type="number"
                                                className="form-control filterInput"
                                                placeholder="Max"
                                                id="maxFeet3"
                                                value={selectedMaxArea}
                                                onChange={(e) =>
                                                    updateSearchParams(
                                                        'MaxArea',
                                                        e?.currentTarget?.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End .col-md-6 */}
                    </div>
                    {/* End .row */}

                    <div className="row">
                        {/* End .col-md-6 */}

                        {/* End .col-md-6 */}
                    </div>
                    {/* End .row */}

                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="widget-wrapper mb0">
                                <h6 className="list-title mb10">Amenities</h6>
                            </div>
                        </div>
                        <Amenities />
                    </div> */}
                </div>
                {/* End modal body */}

                <div className="modal-footer justify-content-between">
                    <button className="reset-button" onClick={resetFilters}>
                        <span className="flaticon-turn-back" />
                        <u>{t('ResetFilter')}</u>
                    </button>
                    <div className="btn-area">
                        <button
                            type="submit"
                            className="ud-btn btn-thm"
                            onClick={onSearch}
                        >
                            <span className="flaticon-search align-text-top pe-[10px]" />
                            <span>{t('Search')}</span>
                        </button>
                    </div>
                </div>
                {/* End modal-footer */}
            </div>
        </div>
    )
}

export default AdvanceFilterModal
