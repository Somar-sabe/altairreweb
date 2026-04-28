import PropertyCard from '../shared/cards/PropertyCard'
import SkeletonCard from '../shared/SkeletonLoader'

type Props = {
    data: any[]
    isLoading: boolean
}

const FeaturedListings = ({ data, isLoading }: Props) => {
    console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
                <SkeletonCard numRows={3} />
            ) : (
                data.map((listing: any) => {
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
                })
            )}
        </div>
    )
}

export default FeaturedListings
