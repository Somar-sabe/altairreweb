import React from 'react'
import Facebook from '../shared/icons/Facebook'
import Instagram from '../shared/icons/Instagram'
import Whatsapp from '../shared/icons/Whatsapp'
import Linkedin from '../shared/icons/Linkedin'
import Telegram from '../shared/icons/Telegram'
import Tiktok from '../shared/icons/Tiktok'

const Social = () => {
    return (
        <div className="social-style1 grid grid-cols-3 sm:grid-cols-6 items-center gap-2 ">
            <a target="_blank" href="https://www.facebook.com/altairre.ae/">
                <Facebook />
            </a>

            <a
                target="_blank"
                href="https://www.instagram.com/altair.realestate/"
            >
                <Instagram />
            </a>

            <a target="_blank" href="https://wa.me/971585208757">
                <Whatsapp />
            </a>

            <a target="_blank" href="https://ae.linkedin.com/company/altair-re">
                <Linkedin />
            </a>

            <a target="_blank" href="https://t.me/altairre">
                <Telegram />
            </a>

            <a
                target="_blank"
                href="https://www.tiktok.com/@altair.realestate?_t=8iVDTnouo9F&_r=1"
            >
                <Tiktok />
            </a>
        </div>
    )
}

export default Social
