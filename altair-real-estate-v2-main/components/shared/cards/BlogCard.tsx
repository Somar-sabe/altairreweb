'use client'
import { Link, usePathname } from '@/navigation'
import React from 'react'
import CustomImage from '../CustomImage'

type Props = {
    img: string
    date: Date
    title: string
    slug: string
}

const BlogCard = ({ img, date, title, slug }: Props) => {
    const pathname = usePathname()
    return (
        <Link href={`${pathname}/${slug}`} className="w-full" key={slug}>
            <div className="blog-style1">
                <div className="blog-img">
                    <CustomImage
                        fill
                        containerclassname="w-full h-[300px] relative"
                        className="object-cover"
                        src={img ?? ''}
                        alt="blog"
                        quality={10}
                    />
                </div>
                <div className="blog-content">
                    <div className="date">
                        <span className="month">
                            {' '}
                            {date.toLocaleString('en-Us', {
                                month: 'short',
                            })}
                        </span>
                        <span className="day"> {date.getDate()}</span>
                    </div>
                    {/* <a className="tag" href="#">
              {blog.tag}
            </a> */}
                    <h6 className="title mt-1">{title}</h6>
                </div>
            </div>
        </Link>
        // <Link
        //     href={`${pathname}/${slug}`}
        //     className="blog-style1 list-style bgc-white d-block d-md-flex align-items-xl-center"
        // >
        //     <div className="blog-img flex-shrink-0 ">
        //         <CustomImage
        //             fill
        //             containerclassname="w-[300px] h-[180px] relative"
        //             priority
        //             className=""
        //             src={img ?? ''}
        //             alt="blog"
        //             quality={1}
        //         />
        //         <div className="date">
        //             <span className="month">
        //                 {date.toLocaleString('en-Us', {
        //                     month: 'short',
        //                 })}
        //             </span>
        //             <span className="day">{date.getDate()}</span>
        //         </div>
        //     </div>
        //     <div className="blog-content pl30 pb20 flex-grow-1">
        //         <h4 className="title mt-1 mb20">{title}</h4>
        //     </div>
        // </Link>
    )
}

export default BlogCard
