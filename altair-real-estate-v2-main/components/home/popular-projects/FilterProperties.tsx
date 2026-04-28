'use client'
import SkeletonLoader from '@/components/shared/SkeletonLoader'
import PropertyCard from '@/components/shared/cards/PropertyCard'
import { getProjects } from '@/utils/routes'
import { useLocale, useTranslations } from 'next-intl'
import { Fragment, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from '@/navigation'

type Props = {}

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

const FilterProperties = ({}: Props) => {
    const [selectedTag, setSelectedTag] = useState('')
    const locale = useLocale()

    const { data, isLoading } = useQuery(['popularProjects', locale], () =>
        getProjects(
            {
                PageSize: 6,
                OrderBy: 'CreatedDate',
                Desc: 'True',
                Page: 0,
            },
            locale
        )
    )

    const t = useTranslations('Home.Projects')

    return (
        <>
            <div
                className="flex items-center flex-wrap gap-2 justify-between wow fadeInUp mb-4"
                data-wow-delay="100ms"
            >
                <h2 className="title">{t('Title')}</h2>
                {/* <p className="paragraph">
                            Aliquam lacinia diam quis lacus euismod
                        </p> */}
                <Link
                    className={` bg-brand-100 text-white px-4 font-bold border border-2  !border-brand-100 rounded-md h-fit py-2 hover:bg-transparent hover:!text-brand-100 `}
                    href={'/off-plan'}
                    scroll={false}
                >
                    <span>{t('View All')}</span>
                </Link>
            </div>
            {/* End .row */}

            <div className="row">
                <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="tab-content">
                        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4">
                            {isLoading ? (
                                <SkeletonLoader numRows={2} />
                            ) : (
                                data?.Data?.map(
                                    (listing: any, index: number) => {
                                        return (
                                            <Fragment key={index + ''}>
                                                <PropertyCard
                                                    img={
                                                        listing?.ImagePath ?? ''
                                                    }
                                                    href={`/off-plan/${listing?.Slug}`}
                                                    name={listing?.Name}
                                                    price={
                                                        listing?.StartingPrice
                                                    }
                                                    location={
                                                        listing?.Area?.Name ??
                                                        ''
                                                    }
                                                    stickers={listing?.Stickers}
                                                />
                                            </Fragment>
                                        )
                                    }
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterProperties
