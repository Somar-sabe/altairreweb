'use client'

import React, { useEffect, useState } from 'react'
import ContactFormModal from '../shared/ContactFormModal'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import { useAppDispatch } from '@/store/store'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { toast } from 'react-toastify'
import { setLoading } from '@/store/slices/LoadingReducer'
import { postContact } from '@/utils/routes'
import { redirect, usePathname, useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
type Props = {
    name: string
}

const Hero = ({ name }: Props) => {
    const t = useTranslations(`LP.${name}.Hero`)
    const [isOpen, setOpen] = useState(false)
    const [phone, setPhone] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let phoneNumber
        try {
            phoneNumber = parsePhoneNumberFromString(`+${phone}`)
            if (phoneNumber) {
                console.log('phone', phoneNumber.isValid())
            }
            console.log('phone', phoneNumber?.isPossible())
        } catch (e) {
            console.log('wrong number')
        }
        if (!phoneNumber || !phoneNumber.isValid()) {
            toast.error('Invalid phone number!')
            return
        }
        dispatch(setLoading(true))
        const data = Array.from(e?.currentTarget?.elements)
        data?.splice(-1)
        let req = {}
        data?.forEach((item: any) => {
            req = {
                ...req,
                [item?.name]: item?.value,
            }
        })

        req = { ...req, ContactType: 'LP', Phone: phoneNumber.number }

        try {
            const res = await postContact(req)
            if (res) {
                toast.success('Form sent!')
                console.log('test', pathname)

                router.replace(`${pathname}?success=form-submitted`)
            } else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        document.body.className += ' [&_.b24-widget-button-wrapper]:!hidden'
    }, [])

    const t2 = useTranslations(`LP.${name}.Contact`)

    return (
        <>
            <ContactFormModal
                isOpen={isOpen}
                setOpen={setOpen}
                title={t('Download')}
                onSuccess={() => window.open(`/images/LP/${name}/brochure.pdf`)}
                ContactType="Brochure"
            />

            <div className="main-slider clearfix overflow-hidden relative">
                <div className="swiper-wrapper swiper-slide">
                    <Image
                        src={`/images/LP/${name}/qr-code.jpeg`}
                        width={100}
                        height={100}
                        alt="QR Code"
                        className="hidden lg:block absolute bottom-0 start-0 z-10"
                        unoptimized
                    />
                    <div
                        className="image-layer bg-[65%] lg:bg-right-top"
                        style={{
                            backgroundImage: `url(/images/LP/${name}/1920x790.webp)`,
                        }}
                    />

                    <div className="w-full !max-w-[1200px] !py-20 mx-auto px-4 test text-white">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                            <div className="">
                                <div className="main-slider__content">
                                    <h2
                                        className="text-white text-3xl lg:text-6xl font-poppins"
                                        data-aos="fade-right"
                                        data-aos-delay="300"
                                    >
                                        {t('Title')}
                                    </h2>
                                </div>
                            </div>

                            <div className="lg:min-w-[400px] lg:pt-40">
                                <h3 className="text-white pb-2">
                                    {t2('Register')}
                                </h3>
                                <form
                                    onSubmit={(e) => {
                                        e?.preventDefault()
                                        onSubmit(e)
                                    }}
                                    className="contact-one__form contact-one-validated"
                                >
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="text"
                                                    placeholder={t2(
                                                        'NamePlaceholder'
                                                    )}
                                                    name="Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="contact-one__input-box">
                                                <PhoneInput
                                                    country={'ae'}
                                                    value={phone}
                                                    onChange={(value) =>
                                                        setPhone(value)
                                                    }
                                                    containerClass="w-full"
                                                    buttonClass="[&_.arrow]:!start-[20px] [&>*:first-child]:!ps-[8px] [&>*:first-child]:!pe-[0px]"
                                                    inputClass="!w-full !ps-12 py-4 rtl:[direction:rtl] !rounded-none"
                                                    enableLongNumbers={false}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="email"
                                                    placeholder={t2(
                                                        'EmailPlaceholder'
                                                    )}
                                                    name="Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea
                                                    name="Message"
                                                    placeholder={t2(
                                                        'MessagePlaceholder'
                                                    )}
                                                    className="rounded-none"
                                                ></textarea>
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button
                                                    type="submit"
                                                    className="thm-btn contact-one__btn w-full"
                                                >
                                                    {t2('Button')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <Image
                                src={`/images/LP/${name}/qr-code.jpeg`}
                                width={100}
                                height={100}
                                alt="QR Code"
                                className="lg:hidden bottom-0 start-0 z-10"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
