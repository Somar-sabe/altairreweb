'use client'
import Select from 'react-select'
import { setLoading } from '@/store/slices/LoadingReducer'
import { useAppDispatch } from '@/store/store'
import { postContact } from '@/utils/routes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CloseButton from '@/public/images/icon/close.svg'
import { useTranslations } from 'next-intl'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import parsePhoneNumberFromString from 'libphonenumber-js'

type Props = {
    isOpen?: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    PropertyId?: number
    ProjectId?: number
    title?: string
    onSuccess?: () => void
    ContactType: string
}

const ContactFormModal = ({
    isOpen,
    setOpen,
    title,
    ContactType,
    PropertyId,
    ProjectId,
    onSuccess,
}: Props) => {
    const [canChange, setCanChange] = useState(false)

    useEffect(() => {
        console.log(isOpen)

        if (isOpen) {
            setCanChange(true)
            document.body.classList.remove('!overflow-y-auto')
            document.body.classList.add('!overflow-y-hidden')
        } else if (canChange) {
            document.body.classList.add('!overflow-y-auto')
            document.body.classList.remove('!overflow-y-hidden')
            setCanChange(false)
        }

        setRandomNum1(Math.floor(Math.random() * 10) + 1)
        setRandomNum2(Math.floor(Math.random() * 10) + 1)
    }, [isOpen])

    const [randomNum1, setRandomNum1] = useState(0)
    const [randomNum2, setRandomNum2] = useState(0)

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
        try {
            const data = Array.from(e?.currentTarget?.elements)
            data?.splice(-1)
            let req: { [key: string]: any } = {}
            data?.forEach((item: any) => {
                req = {
                    ...req,
                    [item?.name]: item?.value,
                }
            })

            const captcha = req?.Captcha

            if (parseInt(captcha) != randomNum1 + randomNum2) {
                toast.error('Incorrect sum')
                dispatch(setLoading(false))
                return
            }

            delete req?.Captcha

            req = {
                ...req,
                ContactType,
                ProjectId,
                PropertyId,
                Phone: phoneNumber?.number,
                Message: [
                    Object.keys(req)
                        .map((item) => (item ? `${item}: ${req?.[item]}` : ''))
                        .filter((temp) => temp != '')
                        ?.join('\n'),
                ].join('\n'),
            }

            const res = await postContact(req)
            if (res) {
                console.log(res)

                toast.success('Form sent!')
                if (onSuccess) {
                    onSuccess()
                    setOpen(false)
                }
            } else toast.error('An error has occured!')
        } catch (e) {
            toast.error('An error has occured!')
        }
        dispatch(setLoading(false))
    }

    const t = useTranslations('ContactUs')

    const t2 = useTranslations('Shared')

    const [phone, setPhone] = useState<any>('')

    const options = [
        { value: 'Email', label: 'Email' },
        { value: 'Phone call', label: 'Phone call' },
        { value: 'WhatsApp', label: 'WhatsApp' },
        { value: 'Telegram', label: 'Telegram' },
        { value: 'WeChat', label: 'WeChat' },
    ]

    const customStyles = {
        option: (styles: any, { isFocused, isSelected, isHovered }: any) => {
            return {
                ...styles,
                color: 'black',
                backgroundColor: isSelected
                    ? 'var(--theme-default2)'
                    : isHovered
                    ? 'var(--theme-default2)'
                    : isFocused
                    ? 'var(--theme-default2)'
                    : undefined,
            }
        },
    }

    return (
        <div
            className={`w-full h-screen fixed bg-[#00000099] z-[55] top-0 left-0 flex-col items-center justify-center ${
                isOpen ? 'flex' : 'hidden'
            }`}
            // onClick={() => setOpen(false)}
        >
            <div
                className=" position-relative max-h-[100dvh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white max-w-[500px] flex flex-col overflow-hidden">
                    <button
                        className="btn absolute top-4 ltr:right-2 rtl:left-2"
                        onClick={(e) => {
                            e?.preventDefault()
                            setOpen(false)
                        }}
                    >
                        <Image
                            src={CloseButton}
                            alt=""
                            unoptimized
                            className=""
                            width={25}
                            height={25}
                        />
                    </button>
                    <h4 className="form-title mb25">
                        {title ?? ' Have questions? Get in touch!'}
                    </h4>
                    <div className="flex flex-col overflow-hidden overflow-y-auto ">
                        <form
                            className="form-style1  "
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
                                            placeholder={t('NamePlaceholder')}
                                            required
                                            name="Name"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb20">
                                        <label className="heading-color ff-heading fw600 mb10">
                                            {t('Email')}
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder={t('EmailPlaceholder')}
                                            required
                                            name="Email"
                                        />
                                    </div>
                                </div>
                                {/* End .col-lg-12 */}

                                <div className="col-lg-12">
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
                                        {/* <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t('PhonePlaceholder')}
                                        required
                                        name="Phone"
                                    /> */}
                                    </div>
                                </div>
                                {/* End .col-lg-12 */}

                                <div className="col-md-12">
                                    <div className="mb20">
                                        <label className="heading-color ff-heading fw600 mb10">
                                            {t2('FormCommunication')}
                                        </label>
                                        <Select
                                            defaultValue={[options[0]]}
                                            name="Communication"
                                            options={options}
                                            styles={customStyles}
                                            className="select-custom"
                                            classNamePrefix="select"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb20">
                                        <label className="heading-color ff-heading fw600 mb10">
                                            {t2('FormTime')}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={t2('Time')}
                                            required
                                            name="Time"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb20">
                                        <label className="heading-color ff-heading fw600 mb10">
                                            {`${randomNum1} + ${randomNum2}`}
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder={'0'}
                                            required
                                            name="Captcha"
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
            </div>
        </div>
    )
}

export default ContactFormModal
