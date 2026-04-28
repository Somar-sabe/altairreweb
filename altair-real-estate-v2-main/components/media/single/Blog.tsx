import CustomImage from '@/components/shared/CustomImage'
import { blogs } from '@/data/blogs'
import { getArticles } from '@/utils/routes'
import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/navigation'

type Props = {
    IsBlog?: boolean
}

const Blog = async ({ IsBlog }: Props) => {
    const locale = await getLocale()
    const data = await getArticles(
        {
            Page: 0,
            PageSize: 3,
            Random: true,
            IsBlog: IsBlog ?? false,
        },
        locale
    )

    return (
        <>
            {data?.Data?.map((blog: any) => (
                <Link
                    href={`/${IsBlog ? 'blog' : 'news'}/${blog?.Id}`}
                    className="col-sm-6 col-lg-4"
                    key={blog.id}
                >
                    <div className="blog-style1">
                        <div className="blog-img">
                            <CustomImage
                                containerclassname="w-full h-[250px]"
                                fill
                                className="object-cover"
                                src={blog?.ImagePathFull ?? ''}
                                alt="blog"
                            />
                        </div>
                        <div className="blog-content">
                            <div className="date">
                                <span className="month">
                                    {new Date(
                                        blog?.CreatedDate
                                    )?.toLocaleString('en-Us', {
                                        month: 'short',
                                    })}
                                </span>
                                <span className="day">
                                    {new Date(blog?.CreatedDate)?.getDate()}
                                </span>
                            </div>
                            {/* <a className="tag" href="#">
                                {blog.tag}
                            </a> */}
                            <h6 className="title mt-1">{blog?.Title}</h6>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Blog
