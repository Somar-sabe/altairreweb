'use client'

import MainMenu from '@/components/shared/MainMenu'
import Image from 'next/image'

import React, { useEffect } from 'react'
import Facebook from '../shared/icons/Facebook'
import Instagram from '../shared/icons/Instagram'
import Whatsapp from '../shared/icons/Whatsapp'
import Linkedin from '../shared/icons/Linkedin'
import Telegram from '../shared/icons/Telegram'
import Tiktok from '../shared/icons/Tiktok'
import Spinner from '../shared/Spinner'
import { useAppDispatch, useAppSelector } from '@/store/store'
import WhatsappWidget from './WhatsappWidget'
import Popup from './Popup'
import Select from 'react-select'

import { setCurrentCurrency } from '@/store/slices/MasterReducer'
import { Link, locales, usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'

const Header = () => {
    const dispatch = useAppDispatch()

    const { isLoading } = useAppSelector((state) => state.LoadingReducer)

    const { currencies, currentCurrency } = useAppSelector(
        (state) => state.MasterReducer
    )

    const router = useRouter()
    const pathname = usePathname()

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

    const locale = useLocale()
    const localesList = locales?.map((item) => ({
        label: item.toUpperCase(),
        value: 1,
    }))

    useEffect(() => {
        var element = document.querySelector('[data-b24-crm-button-cont]')
        console.log('element', element)
    }, [])

    return (
        <>
            {!pathname?.includes('LP') && <WhatsappWidget />}
            {pathname == '/' && <Popup />}
            <div
                className={`fixed h-screen w-screen ${
                    isLoading ? 'flex' : 'hidden'
                } flex-col top-0 left-0 bg-[#00000098] items-center justify-center z-[110]`}
            >
                <Spinner className="w-20 h-20" />
            </div>

            <header
                className={`header-nav nav-homepage-style light-header menu-home4 main-menu !sticky !top-0 !z-40`}
            >
                <nav className="posr">
                    <div className="container maxw1600 posr menu_bdrt1">
                        <div className="row flex items-center justify-between relative">
                            <div className="col-auto custom-nav:absolute left-[45%]">
                                <Link className="header-logo" href="/">
                                    <Image
                                        width={148}
                                        height={45}
                                        src="/images/logo.png"
                                        alt="Header Logo"
                                        unoptimized
                                    />
                                </Link>
                            </div>

                            <div className="col-auto">
                                <MainMenu />
                                {/* End Main Menu */}
                            </div>

                            {/* End .col-auto */}

                            {/* End .col-auto */}

                            <div className="col-auto flex items-center gap-4 ml-auto rtl:ml-0 rtl:mr-auto">
                                <div className="flex items-center gap-3">
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/altairre.ae/"
                                    >
                                        <Facebook />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/altair.realestate/"
                                    >
                                        <Instagram />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://wa.me/971585208757"
                                    >
                                        <Whatsapp />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://ae.linkedin.com/company/altair-re"
                                    >
                                        <Linkedin />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://t.me/altairre"
                                    >
                                        <Telegram />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.tiktok.com/@altair.realestate?_t=8iVDTnouo9F&_r=1"
                                    >
                                        <Tiktok />
                                    </a>
                                </div>

                                <Select
                                    value={currencies?.find(
                                        (item) =>
                                            item?.label ==
                                            currentCurrency?.label
                                    )}
                                    name="colors"
                                    onChange={(e) => {
                                        dispatch(
                                            setCurrentCurrency({
                                                label: e!.label,
                                                value: e!.value,
                                            })
                                        )
                                    }}
                                    options={currencies}
                                    styles={customStyles}
                                    className=""
                                    classNamePrefix="select"
                                    required
                                    placeholder="AED"
                                />

                                <Select
                                    value={localesList?.find(
                                        (item) =>
                                            item?.label?.toLowerCase() == locale
                                    )}
                                    name="colors"
                                    onChange={(e) => {
                                        router.replace(pathname, {
                                            locale: e?.label?.toLowerCase(),
                                        })
                                    }}
                                    options={localesList}
                                    styles={customStyles}
                                    className=""
                                    classNamePrefix="select"
                                    required
                                    placeholder="EN"
                                />
                            </div>
                            {/* End .col-auto */}
                        </div>
                        {/* End .row */}
                    </div>
                </nav>
            </header>
            {/* End Header */}

            {/* Signup Modal */}

            {/* End Signup Modal */}

            {/* DesktopSidebarMenu */}

            {/* Sidebar Panel End */}
        </>
    )
}

export default Header
