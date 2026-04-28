'use client'
import React, { useEffect, useRef, useState } from 'react'
import TopFilterBar from './TopFilterBar'
import AllAgents from './AllAgents'
import Pagination from '@/components/shared/Pagination'
import SkeletonCard from '@/components/shared/SkeletonLoader'
import { useLocale } from 'next-intl'

export default function FilteringAgent() {
  const count = 9
  const [page, setPage] = useState(1)
  const locale = useLocale()

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    window.scrollTo({
      top: ref?.current?.getBoundingClientRect()?.top,
      behavior: 'smooth',
    })
  }, [page])

  return (
    <section className="our-agents pt-0">
      <div className="container">
        <div className="row align-items-center mb20">
          <TopFilterBar pageContentTrac={[1, 9, 9]} /> {/* 9 agents hardcoded */}
        </div>

        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4"
          data-aos="fade-up"
          data-aos-delay="100"
          ref={ref}
        >
          <AllAgents /> {/* ✅ Use without props since it's hardcoded now */}
        </div>

        {/* Optional pagination — works if you want page toggling UI, but not needed if static */}
        <Pagination
          page={page}
          totalPages={1} // Since it's hardcoded, only one page exists
          offset={3}
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </section>
  )
}
