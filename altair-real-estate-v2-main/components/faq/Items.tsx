'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

type Props = {}

const Items = (props: Props) => {
    const items = Array.from({ length: 4 })
    const [shownItem, setShownItem] = useState(-1)
    const t = useTranslations('FAQ.Items')
    return (
        <div className="accordion" id="accordionExample">
            {items.map((item, index) => (
                <div className="accordion-item " key={index}>
                    <h2 className="accordion-header" id={index + ''}>
                        <button
                            className={`accordion-button `}
                            onClick={() =>
                                setShownItem((prev) =>
                                    prev == index ? -1 : index
                                )
                            }
                        >
                            {`${t(index + 1 + '.Title')}`}
                        </button>
                    </h2>
                    <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                            shownItem == index ? 'max-h-screen' : 'max-h-0'
                        } `}
                    >
                        <div
                            className="accordion-body"
                            style={{ maxHeight: '300px', overflowY: 'auto' }}
                        >
                            <p>{`${t(index + 1 + '.Desc')}`}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items
