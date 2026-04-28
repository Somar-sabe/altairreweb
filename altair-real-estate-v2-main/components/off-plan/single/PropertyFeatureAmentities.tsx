import React from 'react'

type Props = {
    data: string[]
}

const PropertyFeaturesAminites = ({ data }: Props) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => (
                <div key={index} className="">
                    <div className="pd-list">
                        <p key={index} className="text mb10">
                            <i className="fas fa-circle fz6 align-middle pe-2" />
                            {item}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PropertyFeaturesAminites
