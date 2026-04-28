'use client'
import React, { useState } from 'react'

type Props = {
    desc: string
}

const ProperytyDescriptions = ({ desc }: Props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <p
                className={`text mb10 whitespace-pre-line ${
                    show ? '' : 'line-clamp-4'
                } `}
            >
                {desc}
            </p>
            <div className="agent-single-accordion">
                <div className="accordion accordion-flush">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button p-0 `}
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? 'Show Less' : 'Show More'}
                        </button>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default ProperytyDescriptions
