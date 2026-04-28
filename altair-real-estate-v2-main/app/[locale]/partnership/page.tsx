import Image from 'next/image'
import React from 'react'
import BgImg from '@/public/images/partnership/dubai-marina.webp'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-full h-full !bg-black">
                <Image
                    src={BgImg}
                    fill
                    className="object-cover object-right"
                    alt=""
                    unoptimized
                />
            </div>
            <iframe
                width={'100%'}
                height={1100}
                src={'https://b24-u9udcs.bitrix24site.ru/crm_form_ryxgt/'}
                scrolling="no"
            />
        </div>
    )
}

export default Page
