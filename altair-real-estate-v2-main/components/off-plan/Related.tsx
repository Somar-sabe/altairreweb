import { getProjects } from '@/utils/routes'
import React from 'react'
import PropertyCard from '../shared/cards/PropertyCard'
import { useLocale, useTranslations } from 'next-intl'
import { getLocale, unstable_setRequestLocale } from 'next-intl/server'

type Props = {
    name: string
}

const Related = async ({ name }: Props) => {
    const locale = await getLocale()
    const data = await getProjects(
        { Random: true, Page: 0, PageSize: 4 },
        locale
    )

    return (
        <div className="flex flex-col gap-4 w-full">
            <h4 className="title whitespace-nowrap">{name}</h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.Data?.map((listing: any, index: number) => {
                    return (
                        <PropertyCard
                            key={listing?.Id}
                            img={listing?.ImagePath ?? ''}
                            href={`/off-plan/${listing?.Slug}`}
                            name={listing?.Name}
                            price={listing?.StartingPrice}
                            location={listing?.Area?.Name ?? ''}
                            stickers={listing?.Stickers}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Related
