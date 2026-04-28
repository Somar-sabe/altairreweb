'use client'
import { usePathname, useRouter } from '@/navigation'
import { setLoading } from '@/store/slices/LoadingReducer'
import { useAppDispatch } from '@/store/store'
import { postContact } from '@/utils/routes'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { toast } from 'react-toastify'

type Props = {
    name: string
}

const Contact = ({ name }: Props) => {
    const dispatch = useAppDispatch()
    const [phone, setPhone] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let phoneNumber
        try {
            phoneNumber = parsePhoneNumberFromString(`+${phone}`)
            if (phoneNumber) {
                console.log('phone', phoneNumber.isValid())
            }
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

        req = { ...req, Phone: phoneNumber.number, ContactType: 'LP' }

        try {
            const res = await postContact(req)
            if (res) {
                toast.success('Form sent!')
                router.push(`${pathname}?success=form-subbmitted`)
            } else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    const t = useTranslations(`LP.${name}.Contact`)

    return (
        <section
            className="floor-plan contact-one overflow-hidden"
            id="contact"
        >
            <div className="w-full !max-w-[1200px] mx-auto px-4">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-one__left">
                            <div className="section-title text-left rtl:text-right">
                                <span className="section-title__tagline">
                                    {t('Label')}
                                </span>
                                <h2 className="section-title__title mb-0">
                                    {t('Title')}
                                </h2>
                            </div>

                            {/* <p className="contact-one__text-1 pt-0">
                                {t('Desc')}
                            </p> */}
                            <ul className="list-unstyled contact-one__list">
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone-alt rotate-90"></i>
                                    </div>
                                    <div className="content ms-[20px]">
                                        <p className="text-left rtl:text-right">
                                            {t('Question1')}
                                        </p>
                                        <h4>
                                            {' '}
                                            <span>{t('Answer1')}</span>{' '}
                                            <a href="tel:+971506251573">
                                                +971 50 625 1573
                                            </a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="content ms-[20px]">
                                        <p className="text-left rtl:text-right">
                                            {t('Question2')}
                                        </p>
                                        <h4 className="text-left rtl:text-rtl">
                                            <a href="mailto:info@altairre.ae">
                                                info@altairre.ae
                                            </a>
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-one__right">
                            <div className="row">
                                <div className="contact-one__form-box">
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
                                                        placeholder={t(
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
                                                        inputClass="!w-full !ps-12 py-4 rtl:[direction:rtl]"
                                                        enableLongNumbers={
                                                            false
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="contact-one__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder={t(
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
                                                        placeholder={t(
                                                            'MessagePlaceholder'
                                                        )}
                                                    ></textarea>
                                                </div>
                                                <div className="contact-one__btn-box">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn contact-one__btn"
                                                    >
                                                        {t('Button')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
