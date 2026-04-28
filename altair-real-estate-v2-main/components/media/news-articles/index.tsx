'use client'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import BlogCard from '@/components/shared/cards/BlogCard'
import { useQuery } from 'react-query'
import { getArticles } from '@/utils/routes'
import Pagination from '@/components/shared/Pagination'
import { useLocale } from 'next-intl'
import SkeletonCard from '@/components/shared/SkeletonLoader'

type Props = {
    IsBlog?: boolean
}

const index = ({ IsBlog }: Props) => {
    const count = 9
    const [page, setPage] = useState(1)
    const locale = useLocale()

    const { data, isLoading, refetch } = useQuery(
        ['articles', page, locale, IsBlog],
        () =>
            getArticles(
                {
                    Page: page - 1,
                    PageSize: count,
                    OrderBy: 'CreatedDate',
                    Desc: 'True',
                    IsBlog: IsBlog ?? false,
                },
                locale
            )
    )

    const ref = useRef<HTMLDivElement>(null!)

    const [isFirstLoad, setFirstLoad] = useState(true)
    useEffect(() => {
        setFirstLoad(false)
    }, [])

    useEffect(() => {
        if (!isFirstLoad)
            window.scrollTo({
                top: ref?.current?.getBoundingClientRect()?.top,
                behavior: 'smooth',
            })
        console.log(page)
    }, [page])

    return (
        <section className="our-blog pt-0" ref={ref}>
            <div className="container ">
                {/* <ul className="nav nav-pills pb-10 dark-light-navtab style2 justify-content-start justify-content-lg-end gap-[10px]">
                    <li className="nav-item">
                        <button
                            className={`nav-link mb10-sm !mr-0 ${
                                isBlog ? 'active' : ''
                            }`}
                            onClick={(e) => {
                                e.preventDefault()
                                setBlog(true)
                            }}
                        >
                            {'Posts'}
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link mb10-sm !mr-0 ${
                                !isBlog ? 'active' : ''
                            }`}
                            onClick={(e) => {
                                e.preventDefault()
                                setBlog(false)
                            }}
                        >
                            {'News'}
                        </button>
                    </li>
                </ul> */}

                <div className="w-full" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-full grid md:grid-cols-2 custom-lg:grid-cols-3 gap-10">
                        {data?.Data?.map((item: any, index: number) => {
                            return (
                                <BlogCard
                                    key={item?.Id}
                                    title={item?.Title}
                                    slug={item?.Slug}
                                    img={item?.ImagePathFull}
                                    date={
                                        new Date(item?.CreatedDate) ??
                                        new Date()
                                    }
                                />
                            )
                        })}

                        {isLoading && <SkeletonCard numRows={3} />}

                        {/* End .row */}
                    </div>
                    <div className="row">
                        <div className="mbp_pagination text-center">
                            <Pagination
                                page={page}
                                offset={3}
                                onChange={(newPage) => setPage(newPage)}
                                totalPages={data?.PageCount ?? 0}
                            />
                            {/* <p className="mt10 pagination_page_count text-center">
                                    1 - 20 of 300+ property available
                                </p> */}
                        </div>
                    </div>
                    {/* End .col-lg-8 */}

                    {/* <div className="col-lg-4">
                        <Sidebar />
                    </div> */}
                    {/* End .col-lg-4 */}
                </div>
                {/* End .row */}
            </div>
            {/* End .container */}
        </section>
    )
}

export default index
