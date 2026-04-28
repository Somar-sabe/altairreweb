'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

type Props = {}

const funFacts = [
    {
        number: '32',
        unit: '',
        text: 'Awward Winning',
    },
    {
        number: '12',
        unit: 'K',
        text: 'Property Ready',
    },
    {
        number: '756',
        unit: 'K',
        text: 'Happy Customer',
    },
]

const FunFact = (props: Props) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div
                    className="row justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {funFacts.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="funfact_one text-center">
                                <div className="details">
                                    <ul className="ps-0 mb-0 d-flex justify-content-center">
                                        <li>
                                            <div className="timer">
                                                <CounterWithAnimation end={item.number} />
                                            </div>
                                        </li>
                                        <li>
                                            <span>{item.unit}</span>
                                        </li>
                                    </ul>
                                    <p className="text mb-0">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FunFact

const CounterWithAnimation = ({ end }: any) => {
    const countRef = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        }, options)

        const currentRef = countRef.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    return (
        <span ref={countRef}>
            {inView ? <CountUp end={parseFloat(end)} duration={6} separator="," /> : '0'}
        </span>
    )
}
