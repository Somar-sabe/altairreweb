'use client'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'node_modules/react-modal-video/scss/modal-video.scss'

type Props = {
    videoId: string
}

const PropertyVideo = ({ videoId }: Props) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                videoId={videoId}
            />

            <div className="col-md-12">
                <div className="property_video bdrs12 w-100">
                    <button
                        className="video_popup_btn mx-auto popup-img"
                        onClick={() => setOpen(true)}
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        <span className="flaticon-play" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PropertyVideo
