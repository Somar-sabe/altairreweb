'use client'
import React, { useState, useEffect, useRef } from 'react'

import FeaturedListings from './FeatuerdListings'
import TopFilterBar from './TopFilterBar'
import Hero from './hero'
import Breadcrumb from '../shared/Breadcrumb'
import { getProperties } from '@/utils/routes'
import { useQuery } from 'react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Pagination from '../shared/Pagination'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/navigation'

export default function PropertyFilteringBannerTwo() {
    const count = 9

    const router = useRouter()

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const selectedCategory = searchParams?.get('CategoryId') ?? '0'
    const selectedMinBeds = searchParams?.get('MinBeds') ?? '0'
    const selectedMaxBeds = searchParams?.get('MaxBeds') ?? '0'
    const selectedMinArea = searchParams?.get('MinArea') ?? '0'
    const selectedMaxArea = searchParams?.get('MaxArea') ?? '0'
    const selectedMinPrice = searchParams.get('MinPrice') ?? '0'
    const selectedMaxPrice = searchParams.get('MaxPrice') ?? '0'
    const selectedSearch = searchParams.get('Search') ?? ''
    const selectedOrderBy = searchParams.get('OrderBy') ?? 'CreatedDate'
    const selectedDesc = searchParams.get('Desc') ?? 'True'
    const selectedPage = parseInt(searchParams.get('Page') ?? '1')

    const updateSearchParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.set(key, value)
        router.replace(`${pathname}?${newParams?.toString()}`, {
            scroll: false,
        })
    }
    const locale = useLocale()
    const { data, isLoading } = useQuery(
        ['rentProperties', locale, selectedPage, searchParams?.toString()],
        () =>
            getProperties(
                {
                    PageSize: count,
                    Page: selectedPage - 1,
                    CategoryId: selectedCategory,
                    MinBeds: selectedMinBeds,
                    MaxBeds: selectedMaxBeds,
                    MinArea: selectedMinArea,
                    MaxArea: selectedMaxArea,
                    MinPrice: selectedMinPrice,
                    MaxPrice: selectedMaxPrice,
                    IsRental: true,
                    OrderBy: selectedOrderBy,
                    Desc: selectedDesc,
                    Search: selectedSearch,
                },
                locale
            )
    )

    // useEffect(() => {
    //     window.scrollTo({
    //         top: ref?.current?.getBoundingClientRect()?.top,
    //         behavior: 'smooth',
    //     })
    // }, [page])

    const [isFirstLoad, setFirstLoad] = useState(true)
    useEffect(() => {
        setFirstLoad(false)
    }, [])

    useEffect(() => {
        if (!isFirstLoad)
            window.scrollTo({
                top: ref?.current?.getBoundingClientRect()?.bottom,
                behavior: 'smooth',
            })
    }, [selectedPage])

    useEffect(() => {
        if (!isFirstLoad) updateSearchParams('Page', '1')
    }, [
        selectedMinArea,
        selectedMaxArea,
        selectedMinPrice,
        selectedMaxPrice,
        selectedSearch,
        selectedOrderBy,
        selectedDesc,
    ])

    const ref = useRef<HTMLDivElement>(null!)

    const t = useTranslations('Rent.Main')

    return (
        <>
            <section className="property-banner-style1 p-0 bg-black ">
                <Image
                    src={'/images/secondary/hero.webp'}
                    fill
                    alt=""
                    className="object-cover object-bottom"
                    unoptimized
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000004D]" />
                <div className="inner-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-11 mx-auto">
                                <Hero />
                            </div>
                        </div>
                    </div>
                    {/* End .container */}
                </div>
            </section>
            {/* End property-banner-style2 */}

            {/* Breadcumb Sections */}

            <Breadcrumb tab={t('Breadcrumb')} title={t('Title')} />
            {/* End Breadcumb Sections */}

            {/* Property Filtering */}
            <section className="pt0 pb90 bgc-f7 !overflow-x-hidden">
                <div className="container">
                    <div className="row gx-xl-5">
                        <div className="col-lg-12">
                            <div className="row align-items-center mb20">
                                <TopFilterBar
                                    count={count}
                                    page={selectedPage}
                                    totalItems={data?.Count ?? 0}
                                />
                            </div>
                            <div className="row mt15" ref={ref}>
                                <FeaturedListings
                                    isLoading={isLoading}
                                    data={data?.Data ?? []}
                                />
                            </div>
                            {/* End .row */}

                            <div className="row text-center pt-4">
                                <Pagination
                                    page={selectedPage}
                                    totalPages={data?.PageCount}
                                    offset={3}
                                    onChange={(newPage) =>
                                        updateSearchParams('Page', newPage + '')
                                    }
                                />
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End col-8 */}
                    </div>
                    {/* End TopFilterBar */}
                </div>
                {/* End .container */}
            </section>
        </>
    )
}
