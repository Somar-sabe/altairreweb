'use client'

import { setLoading } from '@/store/slices/LoadingReducer'
import { useAppDispatch } from '@/store/store'
import { postContact } from '@/utils/routes'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { toast } from 'react-toastify'

type Props = {}

const ContactForm = (props: Props) => {
    const [phone, setPhone] = useState('')
    const dispatch = useAppDispatch()
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

        req = { ...req, ContactType: 'ContactForm', Phone: phoneNumber.number }

        try {
            const res = await postContact(req)
            if (res) toast.success('Form sent!')
            else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    const t = useTranslations('ContactUs')

    return (
        <section>
            <div className="container">
                <div className="flex-column-reverse flex-lg-row row d-flex align-items-end">
                    <div className="col-lg-5 position-relative">
                        <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                            <h4 className="form-title mb25">
                                {t('FormTitle')}
                            </h4>
                            <form
                                className="form-style1"
                                onSubmit={(e) => {
                                    onSubmit(e)
                                    e?.preventDefault()
                                }}
                            >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw600 mb10">
                                                {t('Name')}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={t(
                                                    'NamePlaceholder'
                                                )}
                                                required
                                                name="Name"
                                            />
                                        </div>
                                    </div>
                                    {/* End .col-lg-12 */}

                                    {/* <div className="col-lg-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw600 mb10">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                                
                                            />
                                        </div>
                                    </div> */}
                                    {/* End .col-lg-12 */}

                                    <div className="col-md-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw600 mb10">
                                                {t('Email')}
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder={t(
                                                    'EmailPlaceholder'
                                                )}
                                                required
                                                name="Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw600 mb10">
                                                {t('Phone')}
                                            </label>
                                            <PhoneInput
                                                country={'ae'}
                                                value={phone}
                                                onChange={(value) =>
                                                    setPhone(value)
                                                }
                                                containerClass="w-full"
                                                buttonClass="[&_.arrow]:!start-[20px] [&>*:first-child]:!ps-[8px] [&>*:first-child]:!pe-[0px]"
                                                inputClass="!w-full !ps-12 py-4 rtl:[direction:rtl]"
                                                enableLongNumbers={false}
                                            />
                                        </div>
                                    </div>
                                    {/* End .col-lg-12 */}

                                    <div className="col-md-12">
                                        <div className="mb10">
                                            <label className="heading-color ff-heading fw600 mb10">
                                                {t('Message')}
                                            </label>
                                            <textarea
                                                cols={30}
                                                rows={4}
                                                placeholder={t(
                                                    'TextAreaPlaceholder'
                                                )}
                                                defaultValue={''}
                                                required
                                                name="Message"
                                            />
                                        </div>
                                    </div>
                                    {/* End .col-lg-12 */}

                                    <div className="col-md-12">
                                        <div className="d-grid">
                                            <button
                                                type="submit"
                                                className="ud-btn btn-thm"
                                            >
                                                {t('Button')}
                                                <i className="fal fa-arrow-right-long" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-lg-5 offset-lg-2">
                        <h2 className="mb30 text-capitalize whitespace-pre-line">
                            {t('Title')}
                        </h2>
                        <p className="text">{t('Desc')}</p>
                    </div>
                    {/* End .col */}
                </div>
            </div>
        </section>
    )
}

export default ContactForm
