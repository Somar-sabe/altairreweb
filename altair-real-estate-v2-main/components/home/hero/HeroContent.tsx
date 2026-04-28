'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

const HeroContent = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('secondary')

    const handleTabClick = (tab: any) => {
        setActiveTab(tab)
    }

    const tabs = [
        { id: 'off-plan', label: 'Off-Plan' },
        { id: 'secondary', label: 'Secondary' },
        
    ]

    const onSubmit = () => {
        router.push(`/${activeTab}?Search=${search}`)
    }

    const [search, setSearch] = useState('')
    const t = useTranslations('Home.Hero')

    return (
        <div className="advance-search-tab mt60 mt30-lg animate-up-3 w-full ">
            <ul className="nav nav-tabs p-0 m-0 !px-6 ">
                {tabs.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${
                                activeTab === tab.id ? 'active' : ''
                            }`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {t(tab.label)}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex items-center w-full justify-between gap-4">
                <div className="tab-content w-full max-w-3xl rounded-[12px] ltr:rounded-tl-none rtl:rounded-tr-none">
                    {tabs.map((tab) => (
                        <div
                            className={`${
                                activeTab === tab.id ? 'active' : ''
                            } tab-pane`}
                            key={tab.id}
                        >
                            <div className="advance-content-style1">
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <div className="w-full">
                                        <div className="advance-search-field position-relative text-start">
                                            <form className="form-search position-relative">
                                                <div className="box-search">
                                                    <span className="icon flaticon-home-1" />
                                                    <input
                                                        className="form-control bgc-f7 bdrs12"
                                                        type="text"
                                                        name="search"
                                                        placeholder={t(
                                                            'SearchProducts',
                                                            {
                                                                label: t(
                                                                    tab.label
                                                                ),
                                                            }
                                                        )}
                                                        value={search}
                                                        onKeyDown={(e) => {
                                                            if (
                                                                e?.key ==
                                                                'Enter'
                                                            ) {
                                                                e?.preventDefault()
                                                                onSubmit()
                                                            }
                                                        }}
                                                        onChange={(e) =>
                                                            setSearch(
                                                                e?.currentTarget
                                                                    ?.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End .col-md-8 */}

                                    {/* <div className="col-md-4 col-lg-3">
                                    <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                                        <button
                                            className="advance-search-btn"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#advanceSeachModal"
                                        >
                                            <span className="flaticon-settings" />{' '}
                                            Advanced
                                        </button>
                                       
                                    </div>
                                </div> */}
                                    <button
                                        className="advance-search-icon btn !bg-brand-100 text-white  min-w-[55px]"
                                        type="button"
                                        onClick={(e) => {
                                            e?.preventDefault()
                                            onSubmit()
                                        }}
                                    >
                                        <span className="flaticon-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroContent
