import { agents } from '@/data/agentsData'
import Image from 'next/image'
import React from 'react'

const SingleAgentCta = ({ id }: any) => {
    const data = agents.filter((elm) => elm.id == id)[0] || agents[0]

    const agentData = {
        name: data.name,
        company: 'Modern House Real Estate',
        reviews: '5.0 • 49 Reviews',
        phone1: '+848 032 03 01',
        phone2: '+848 032 03 01',
        social: [
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-twitter', link: '#' },
            { icon: 'fab fa-instagram', link: '#' },
            { icon: 'fab fa-linkedin-in', link: '#' },
        ],
    }
    return (
        <>
            <div className="agent-single d-sm-flex align-items-center">
                <div className="w-[172px] h-[172px] relative rounded-full overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        src={data.image}
                        alt="agents"
                    />
                </div>
                {/* End single image */}
                <div className="single-contant ml30 ml0-xs">
                    <h2 className="title mb-0">{agentData.name}</h2>
                    <p className="fz15">
                        Company Agent at <b>{agentData.company}</b>
                    </p>
                    <div className="agent-meta mb15 d-md-flex align-items-center">
                        <a className="text fz15 pe-2 bdrr1" href="#">
                            <i className="fas fa-star fz10 review-color2 pr10" />
                            {agentData.reviews}
                        </a>
                        <a className="text fz15 pe-2 ps-2 bdrr1" href="#">
                            <i className="flaticon-call pe-1" />
                            {agentData.phone1}
                        </a>
                        <a className="text fz15 ps-2" href="#">
                            <i className="flaticon-smartphone pe-1" />
                            {agentData.phone2}
                        </a>
                    </div>
                    <div className="agent-social">
                        {agentData.social.map((socialItem, index) => (
                            <a
                                key={index}
                                className="mr20"
                                href={socialItem.link}
                            >
                                <i className={socialItem.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleAgentCta
