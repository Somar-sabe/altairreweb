'use client'
import SkeletonLoader from '@/components/shared/SkeletonLoader'
import PropertyCard from '@/components/shared/cards/PropertyCard'
import { useAppSelector } from '@/store/store'
import { getProjects, getProperties } from '@/utils/routes'
import { useLocale, useTranslations } from 'next-intl'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import Select from 'react-select'

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

    const tagParams = selectedTag != '' ? { categoryId: selectedTag } : {}
    const { data, isLoading } = useQuery(
        ['popularProperties', tagParams, locale],
        () =>
            getProperties(
                {
                    ...{
                        PageSize: 6,
                        OrderBy: 'CreatedDate',
                        Desc: 'True',
                        Page: 0,
                    },
                    ...tagParams,
                },
                locale
            )
    )
    const { types } = useAppSelector((state) => state.MasterReducer)

    useEffect(() => {
        if (types?.length != 0) setSelectedTag(types?.[0]?.Id)
    }, [types])

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag)
    }

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

                <div className="dark-light-navtab style2 text-lg-end">
                    <ul className="nav nav-pills justify-content-start justify-content-lg-end gap-[10px]">
                        {types?.slice(0, 4)?.map((item: any, index: number) => {
                            return (
                                <li
                                    className="nav-item"
                                    key={item?.Name + index}
                                >
                                    <button
                                        className={`nav-link mb10-sm !mr-0 ${
                                            selectedTag === item?.Id
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() => handleTagClick(item?.Id)}
                                    >
                                        {item?.Name}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
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
