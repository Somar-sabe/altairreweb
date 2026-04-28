'use client'
import { usePathname } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useRef } from 'react'

const HeroContent = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const onSearch = (Search: string) => {
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.set('Search', Search)
        router.replace(`${pathname}?${newParams.toString()}`)
    }

    const searchRef = useRef<HTMLInputElement>(null!)
    const t = useTranslations('Rent.Hero')

    return (
        <div className="advance-search-tab mt30  mx-auto animate-up-3">
            {/* <ul className="nav nav-tabs p-0 m-0">
                <li
                    className="nav-item"
                    key={tabs?.find((item) => item.id == tab)!.id}
                >
                    <button
                        className={`nav-link ${
                            activeTab ===
                            tabs?.find((item) => item.id == tab)!.id
                                ? 'active'
                                : ''
                        }`}
                        onClick={() =>
                            handleTabClick(
                                tabs?.find((item) => item.id == tab)!.id
                            )
                        }
                    >
                        {tabs?.find((item) => item.id == tab)!.label}
                    </button>
                </li>
            </ul> */}

            <div className="tab-content !rounded-[12px]">
                <div
                    className={`
                        active tab-pane`}
                >
                    <div className="advance-content-style1">
                        <div className="row">
                            <div className="col-md-8 col-lg-9">
                                <div className="advance-search-field position-relative text-start">
                                    <form className="form-search position-relative">
                                        <div className="box-search">
                                            <span className="icon flaticon-home-1" />
                                            <input
                                                className="form-control bgc-f7 bdrs12"
                                                type="text"
                                                name="search"
                                                placeholder={t('Placeholder')}
                                                onKeyDown={(e) => {
                                                    if (e?.key == 'Enter') {
                                                        e?.preventDefault()
                                                        onSearch(
                                                            e?.currentTarget
                                                                ?.value
                                                        )
                                                    }
                                                }}
                                                ref={searchRef}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* End .col-md-8 */}

                            <div className="col-md-4 col-lg-3">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                                    <button
                                        className="advance-search-btn"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#advanceSeachModal"
                                    >
                                        <span className="flaticon-settings" />{' '}
                                        {t('Filter')}
                                    </button>
                                    <button
                                        className="advance-search-icon ud-btn !bg-brand-100 text-white ms-4"
                                        type="button"
                                        onClick={(e) => {
                                            e?.preventDefault()
                                            onSearch(searchRef?.current?.value)
                                        }}
                                    >
                                        <span className="flaticon-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent
