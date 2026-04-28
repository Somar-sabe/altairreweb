import SingleMap from '@/components/shared/SingleMap'
import React from 'react'

type Props = {
    lat: number
    lon: number
}

const PropertyAddress = ({ lat, lon }: Props) => {
    return (
        <>
            {/* {addresses.map((address, index) => (
                <div
                    key={index}
                    className={`col-md-6 col-xl-4 ${
                        index === 1 ? 'offset-xl-2' : ''
                    }`}
                >
                    <div className="d-flex justify-content-between">
                        <div className="pd-list">
                            <p className="fw600 mb10 ff-heading dark-color">
                                Address
                            </p>
                            <p className="fw600 mb10 ff-heading dark-color">
                                City
                            </p>
                            <p className="fw600 mb-0 ff-heading dark-color">
                                State/county
                            </p>
                        </div>
                        <div className="pd-list">
                            <p className="text mb10">{address.address}</p>
                            <p className="text mb10">{address.city}</p>
                            <p className="text mb-0">{address.state}</p>
                        </div>
                    </div>
                </div>
            ))} */}
            {/* End col */}

            <div className="col-md-12">
                <SingleMap lat={lat} lon={lon} />
            </div>
            {/* End col */}
        </>
    )
}

export default PropertyAddress
