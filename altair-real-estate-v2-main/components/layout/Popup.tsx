'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ArrowDown from '../shared/icons/ArrowDown'
import Select from 'react-select'
import { useAppDispatch } from '@/store/store'
import { setLoading } from '@/store/slices/LoadingReducer'
import { toast } from 'react-toastify'
import { postContact } from '@/utils/routes'
import Image from 'next/image'
import CustomImage from '../shared/CustomImage'
import CloseButton from '@/public/images/icon/close.svg'
import { useTranslations } from 'next-intl'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { usePathname, useRouter } from '@/navigation'

type Props = {}

const Popup = (props: Props) => {
    const [isOpen, setOpen] = useState(true)
    const [canChange, setCanChange] = useState(false)

    useLayoutEffect(() => {
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

    useEffect(() => {
        const resetTimer = setTimeout(() => {
            setOpen(true)
        }, 1000 * 60 * 30) // 30 minutes

        return () => {
            clearInterval(resetTimer)
        }
    }, [isOpen])

    const radios = [
        'Buy Property',
        'Rent Property',
        'Sell Property',
        'List Your Property',
        'Property Management',
        'Other',
    ]

    const budget = [
        'Below AED 1,000,000',
        'AED 1,000,000 - 2,000,000',
        'AED 2,000,000 - 5,000,000',
        'AED 5,000,000 - 10,000,000',
        'More than AED 10,000,000',
    ]

    const propertyReady = ['Off-Plan', 'Ready', 'Other']

    const checkboxes = [
        "I don't know yet",
        'Downtown Dubai',
        'Emaar Beachfront',
        'Dubai Hills Estate',
        'Dubai Creek Harbour',
        'Palm Jumeirah',
        'Bluewaters Island',
        'Business Bay',
        'Port De La Mer',
        'Dubai Marina',
        'Jumeirah Beach Residences (JBR)',
        'Jumeirah Golf Estates',
        'Tilal Al Ghaf',
        'Dubailand',
        'Damac Hills',
        'Other',
    ]

    const types = [
        {
            type: 'Apartment',
            img: '/images/pop-up/Apartments.webp',
        },
        {
            type: 'Penthouse',
            img: '/images/pop-up/Penthouse.webp',
        },
        {
            type: 'Villa / Townhouse',
            img: '/images/pop-up/Villa-Townhouse.webp',
        },
        {
            type: 'Commercial / Office',
            img: '/images/pop-up/Commercial-Office.webp',
        },
        {
            type: 'Plot',
            img: '/images/pop-up/Plot.webp',
        },
        {
            type: 'Other',
            img: '/images/pop-up/Other.webp',
        },
    ]

    const [formCounter, setFormCounter] = useState(0)

    const dispatch = useAppDispatch()

    const router = useRouter()

    const pathname = usePathname()

    const [randomNum1, setRandomNum1] = useState(0)
    const [randomNum2, setRandomNum2] = useState(0)

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
        let req: { [key: string]: any } = {}
        data?.forEach((item: any) => {
            if (item?.type == 'checkbox') {
                if (item?.checked)
                    req = {
                        ...req,
                        [item?.name]: [
                            ...(req?.[item?.name] ?? []),
                            item?.value,
                        ],
                    }
            } else if (item?.type == 'radio') {
                if (item?.checked)
                    req = {
                        ...req,
                        [item?.name]: item?.value,
                    }
            } else
                req = {
                    ...req,
                    [item?.name]: item?.value,
                }
        })

        // console.log(JSON.stringify(req))

        const captcha = req?.Captcha

        if (parseInt(captcha) != randomNum1 + randomNum2) {
            toast.error('Incorrect sum')
            dispatch(setLoading(false))
            return
        }

        delete req?.Captcha

        const Name = req?.Name
        const Email = req?.Email
        const Phone = phoneNumber.number

        delete req?.Name
        delete req?.Email
        delete req?.Phone

        try {
            const res = await postContact({
                Name,
                Phone,
                Email,
                Message: [
                    Object.keys(req)
                        .map((item) => (item ? `${item}: ${req?.[item]}` : ''))
                        .filter((temp) => temp != '')
                        ?.join('\n'),
                ].join('\n'),
                ContactType: 'Popup Form',
            })
            if (res) {
                toast.success('Form sent!')
                setOpen(false)
                router.replace(`${pathname}?sucess=form-subbmitted`)
            } else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    const t = useTranslations('Popup')

    const [phone, setPhone] = useState('')

    const t2 = useTranslations('Shared')

    const t3 = useTranslations('ContactUs')

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
        <>
            {isOpen && (
                <div
                    className={`flex w-full  h-screen fixed bg-[#00000099] !z-[100] top-0 left-0 flex-col items-center justify-center`}
                    // onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-[90dvw] h-[80dvh] max-w-[820px] max-h-[1600px] bg-white flex flex-col rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="btn"
                            onClick={(e) => {
                                e?.preventDefault()
                                setOpen(false)
                            }}
                        >
                            <Image
                                src={CloseButton}
                                alt=""
                                unoptimized
                                className="absolute top-6 right-6"
                                width={25}
                                height={25}
                            />
                        </button>
                        <div className="w-full h-full p-5 md:p-10 overflow-y-auto">
                            <form
                                className=""
                                onSubmit={(e) => {
                                    onSubmit(e)
                                    e?.preventDefault()
                                }}
                            >
                                <div
                                    className={`${
                                        formCounter == 0 ? '' : 'hidden'
                                    }`}
                                >
                                    <h2>{t('1.Title')}</h2>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 `}
                                    >
                                        {radios?.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full border px-4 flex items-center"
                                                    key={item + index}
                                                >
                                                    <input
                                                        type="radio"
                                                        value={item}
                                                        name="Type"
                                                        id={item}
                                                        onChange={() => {
                                                            setFormCounter(
                                                                (prev) =>
                                                                    prev + 1
                                                            )
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor={item}
                                                        className="px-2 py-3 text-base w-full"
                                                    >
                                                        {t('1.' + item)}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        formCounter == 1 ? '' : 'hidden'
                                    }`}
                                >
                                    <h2>{t('2.Title')}</h2>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 overflow-hidden `}
                                    >
                                        {types?.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full border px-4 flex py-3 gap-4"
                                                    key={item?.type + index}
                                                >
                                                    <CustomImage
                                                        src={item?.img}
                                                        alt={item?.type}
                                                        priority
                                                        className="w-full object-cover"
                                                        containerclassname="w-[100px] h-[100px] rounded-lg overflow-hidden"
                                                        unoptimized
                                                        fill
                                                        onClick={() => {
                                                            const elem: any =
                                                                document.getElementById(
                                                                    `property-type-${item?.type}`
                                                                )
                                                            if (elem) {
                                                                elem.checked =
                                                                    true
                                                                setFormCounter(
                                                                    (prev) =>
                                                                        prev + 1
                                                                )
                                                            }
                                                        }}
                                                    />
                                                    <div className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            value={`property-type-${item?.type}`}
                                                            name="PropertyType"
                                                            id={`property-type-${item?.type}`}
                                                            onChange={() => {
                                                                setFormCounter(
                                                                    (prev) =>
                                                                        prev + 1
                                                                )
                                                            }}
                                                        />
                                                        <label
                                                            htmlFor={`property-type-${item?.type}`}
                                                            className="px-2 py-3 text-base w-full"
                                                        >
                                                            {t(
                                                                '2.' +
                                                                    item?.type
                                                            )}
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        formCounter == 2 ? '' : 'hidden'
                                    }`}
                                >
                                    <h2>{t('3.Title')}</h2>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 `}
                                    >
                                        {propertyReady?.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full border px-4 flex items-center"
                                                    key={item + index}
                                                >
                                                    <input
                                                        type="radio"
                                                        value={`Ready-${item}`}
                                                        name="Ready"
                                                        id={`Ready-${item}`}
                                                        onChange={() => {
                                                            setFormCounter(
                                                                (prev) =>
                                                                    prev + 1
                                                            )
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor={`Ready-${item}`}
                                                        className="px-2 py-3 text-base w-full"
                                                    >
                                                        {t('3.' + item)}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        formCounter == 3 ? '' : 'hidden'
                                    }`}
                                >
                                    <h2>{t('4.Title')}</h2>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4`}
                                    >
                                        {checkboxes?.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full border px-4 flex items-center"
                                                    key={item + index}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        value={`area-${item}`}
                                                        name="Area"
                                                        id={`area-${item}`}
                                                    />
                                                    <label
                                                        htmlFor={`area-${item}`}
                                                        className="px-2 py-3 text-base w-full"
                                                    >
                                                        {t('4.' + item)}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        formCounter == 4 ? '' : 'hidden'
                                    }`}
                                >
                                    <h2>{t('5.Title')}</h2>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 `}
                                    >
                                        {budget?.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full border px-4 flex items-center"
                                                    key={item + index}
                                                >
                                                    <input
                                                        type="radio"
                                                        value={item}
                                                        name="Budget"
                                                        id={item}
                                                        onChange={() => {
                                                            setFormCounter(
                                                                (prev) =>
                                                                    prev + 1
                                                            )
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor={item}
                                                        className="px-2 py-3 text-base w-full"
                                                    >
                                                        {t('5.' + item)}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        formCounter == 5 ? '' : 'hidden'
                                    }`}
                                >
                                    <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                                        <h4 className="form-title mb25">
                                            {t('6.Title')}
                                        </h4>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb20">
                                                    <label className="heading-color ff-heading fw600 mb10">
                                                        {t3('Name')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={t3(
                                                            'NamePlaceholder'
                                                        )}
                                                        required
                                                        name="Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb20">
                                                    <label className="heading-color ff-heading fw600 mb10">
                                                        {t3('Email')}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder={t3(
                                                            'EmailPlaceholder'
                                                        )}
                                                        required
                                                        name="Email"
                                                    />
                                                </div>
                                            </div>
                                            {/* End .col-lg-12 */}

                                            <div className="col-lg-12">
                                                <div className="mb20">
                                                    <label className="heading-color ff-heading fw600 mb10">
                                                        {t3('Phone')}
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
                                                        enableLongNumbers={
                                                            false
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {/* End .col-lg-12 */}

                                            <div className="col-md-12">
                                                <div className="mb20">
                                                    <label className="heading-color ff-heading fw600 mb10">
                                                        {t2(
                                                            'FormCommunication'
                                                        )}
                                                    </label>
                                                    <Select
                                                        name="Communication"
                                                        options={options}
                                                        styles={customStyles}
                                                        className="select-custom"
                                                        classNamePrefix="select"
                                                        required
                                                        placeholder={t2(
                                                            'FormCommunication'
                                                        )}
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
                                                        {`${t2(
                                                            'Captcha'
                                                        )} ${randomNum1} + ${randomNum2}`}
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
                                                        {t3('Button')}
                                                        <i className="fal fa-arrow-right-long" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full border-t flex items-center px-6 py-4 gap-4 ">
                            <div className="flex flex-col  w-full">
                                <p className="m-0">
                                    {t('Done')}{' '}
                                    <span>{`${Math.round(
                                        (100 / 6) * (formCounter + 1)
                                    )}%`}</span>
                                </p>
                                <div className="w-full h-2 rounded-full bg-brand-200 overflow-hidden">
                                    <div
                                        className={`transition-all bg-brand-100 h-full`}
                                        style={{
                                            width: `${
                                                (100 / 6) * (formCounter + 1)
                                            }%`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    className="border h-12 px-4 flex flex-col items-center justify-center"
                                    onClick={(e) => {
                                        e?.preventDefault()
                                        if (formCounter - 1 >= 0)
                                            setFormCounter((prev) => prev - 1)
                                    }}
                                >
                                    <ArrowDown className="rotate-90 rtl:rotate-[-90deg]" />
                                </button>
                                {formCounter < 5 && (
                                    <button
                                        className="flex items-center gap-1 h-12 whitespace-nowrap px-4 border justify-center bg-brand-100 text-white"
                                        onClick={(e) => {
                                            e?.preventDefault()
                                            if (formCounter < 5)
                                                setFormCounter(
                                                    (prev) => prev + 1
                                                )
                                        }}
                                    >
                                        <span>{t('Next')}</span>
                                        <ArrowDown className="rotate-[-90deg] fill-white rtl:rotate-90" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup
