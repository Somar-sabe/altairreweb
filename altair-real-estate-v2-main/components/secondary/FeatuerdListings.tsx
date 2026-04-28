'use client'

import { getProperties } from '@/utils/routes'
import Image from 'next/image'
import { Link } from '@/navigation'
import { useEffect, useState } from 'react'
import PropertyCard from '../shared/cards/PropertyCard'
import SkeletonCard from '../shared/SkeletonLoader'
import { useAppSelector } from '@/store/store'

type Props = {
    data: any[]
    isLoading: boolean
}

const FeaturedListings = ({ data, isLoading }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
                <SkeletonCard numRows={3} />
            ) : (
                data.map((listing: any) => {
                    return (
                        <PropertyCard
                            img={listing?.ImagePath ?? ''}
                            href={`/secondary/${listing?.Slug}`}
                            name={listing?.Name}
                            price={listing?.Price}
                            location={listing?.Area?.Name}
                            key={listing?.Id}
                        />
                    )
                })
            )}
        </div>
    )
}

export default FeaturedListings
