import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'

type Props = {}

const categories = ['Houses', 'Apartments', 'Office', 'Villa', 'Townhome']

const tags = ['For Sale', 'House', 'Realton', 'Apartments', 'Villa']

const posts = [
    {
        id: 23,
        image: '/images/blog/blog-s-3.jpg',
        content: '8 Tips for Achieving Maximum Coziness',
        date: {
            month: 'July',
            day: '28',
            year: 2023,
        },
    },
    {
        id: 24,
        image: '/images/blog/blog-s-4.jpg',
        content: 'A 3-Step Downsizing Plan',
        date: {
            month: 'July',
            day: '28',
            year: 2023,
        },
    },
    {
        id: 25,
        image: '/images/blog/blog-s-5.jpg',
        content: 'How to Plan an Outdoor Movie Night',
        date: {
            month: 'July',
            day: '28',
            year: 2023,
        },
    },
]

const Sidebar = (props: Props) => {
    return (
        <div className="blog-sidebar">
            <div className="sidebar-widget mb30">
                <div className="search_area">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for?"
                    />
                    <label>
                        <span className="flaticon-search" />
                    </label>
                </div>
            </div>
            <div className="sidebar-widget mb30">
                <h6 className="widget-title">Categories</h6>
                <div className="category-list d-flex flex-column mt20">
                    {categories.map((category, index) => (
                        <a href="#" key={index}>
                            {category}
                        </a>
                    ))}
                </div>
            </div>

            {/* {Latest Posts} */}

            <div className="sidebar-widget mb30">
                <h6 className="widget-title">Latest Posts</h6>
                {posts.map((post, index) => (
                    <div
                        className="list-news-style d-flex align-items-center mt20 mb20"
                        key={index}
                    >
                        <div className="news-img flex-shrink-0">
                            <Image
                                width={90}
                                height={80}
                                src={post.image}
                                alt="blog"
                            />
                        </div>
                        <div className="news-content flex-shrink-1 ms-3">
                            <p className="new-text mb0 fz14">
                                <Link href={`/blogs/${post.id}`}>
                                    {post.content}
                                </Link>
                            </p>
                            <a className="body-light-color" href="#">
                                {post.date.day} {post.date.month},{' '}
                                {post.date.year}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sidebar-widget mb30 pb20">
                <h6 className="widget-title">Popular Tags</h6>
                <div className="tag-list mt20">
                    {tags.map((tag, index) => (
                        <a href="#" key={index}>
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
