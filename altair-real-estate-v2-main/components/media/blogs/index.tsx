import PaginationTwo from '@/components/shared/Pagination'
import React from 'react'
import BlogFilter from './BlogFilter'
import Pagination from '@/components/shared/Pagination'

type Props = {}

const index = (props: Props) => {
    return (
        <section className="our-blog pt-0">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-xl-12 navpill-style1">
                        <BlogFilter />
                    </div>
                </div>
                {/* End .row */}

                <div className="row">
                    <div className="mbp_pagination text-center">
                        {/* <Pagination
                                    page={page}
                                    totalPages={data?.PageCount}
                                    offset={3}
                                    onChange={(newPage) => setPage(newPage)}
                                /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
