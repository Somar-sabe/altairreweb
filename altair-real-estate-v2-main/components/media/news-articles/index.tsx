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

    const { data, isLoading, refetch } = useQuery<any>(
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
                    </div>
                    <div className="row">
                        <div className="mbp_pagination text-center">
                            <Pagination
                                page={page}
                                offset={3}
                                onChange={(newPage) => setPage(newPage)}
                                totalPages={data?.PageCount ?? 0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index