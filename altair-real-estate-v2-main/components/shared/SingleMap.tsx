'use client'
import React from 'react'

import {
    GoogleMap as GoogleMapReact,
    useLoadScript,
    MarkerF,
} from '@react-google-maps/api'

type Props = {
    lon: number
    lat: number
}

const SingleMap = ({ lon, lat }: Props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:
            process?.env?.NEXT_PUBLIC_GOOGLE_API ??
            'AIzaSyDGmR2mCXupDBzL9qv6teDKkNfA08_hmxQ',
    })

    const center = {
        lat: lat,
        lng: lon,
    }

    return (
        <>
            {lon && lat && isLoaded && (
                <GoogleMapReact
                    center={center}
                    zoom={14}
                    mapContainerClassName="w-full h-[500px] rounded-md"
                >
                    <MarkerF position={center} />
                </GoogleMapReact>
            )}
        </>
    )
}

export default SingleMap
