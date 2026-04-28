'use client'
import ContactFormModal from '@/components/shared/ContactFormModal'
import { useTranslations } from 'next-intl'
import 'node_modules/react-modal-video/scss/modal-video.scss'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

const VideoBox = () => {
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const t = useTranslations('Home.Hero')

    return (
        <>
            <ContactFormModal
                isOpen={isOpen2}
                setOpen={setOpen2}
                title={t('Download')}
                onSuccess={() => window.open('/brochure.pdf')}
                ContactType="Brochure"
            />
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="5S5xRduI20I"
                onClose={() => setOpen(false)}
            />

            <span
                style={{ border: 'none', background: 'transparent' }}
                className="popup-youtube bounce-y d-flex align-items-center flex-wrap custom-lg:flex-col gap-4 justify-content-start justify-content-xl-center fz14 fw600 ff-heading py-2 custom-lg:absolute top-[-50px] end-[-280px] !mt-10 custom-lg:mt-0"
            >
                <button className="flex items-center text-white">
                    {t('Watch')}
                    <span
                        className="video-icon flaticon-play fz12 ms-[20px]"
                        role="button"
                        onClick={() => setOpen(true)}
                    />
                </button>
                <button
                    className="ud-btn btn-dark "
                    onClick={(e) => {
                        e?.preventDefault()
                        setOpen2(true)
                    }}
                >
                    {t('Download')}
                </button>
            </span>
        </>
    )
}

export default VideoBox
