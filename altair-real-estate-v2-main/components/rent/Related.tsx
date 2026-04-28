import { getProperties } from '@/utils/routes'
import React from 'react'
import PropertyCard from '../shared/cards/PropertyCard'
import { getLocale } from 'next-intl/server'

type Props = {
    name: string
}

const Related = async ({ name }: Props) => {
    const locale = await getLocale()
    const data = await getProperties(
        {
            Random: true,
            Page: 0,
            PageSize: 4,
            IsRental: true,
        },
        locale
    )

    return (
        <div className="flex flex-col gap-4 w-full">
            <h4 className="title whitespace-nowrap">{name}</h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.Data?.map((listing: any) => {
                    return (
                        <PropertyCard
                            img={listing?.ImagePath ?? ''}
                            href={`/rent/${listing?.Slug}`}
                            name={listing?.Name}
                            price={listing?.Price}
                            location={listing?.Area?.Name}
                            key={listing?.Id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Related
