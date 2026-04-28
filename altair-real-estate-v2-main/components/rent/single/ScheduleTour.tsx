'use client'
import { setLoading } from '@/store/slices/LoadingReducer'
import { useAppDispatch } from '@/store/store'
import { postContact } from '@/utils/routes'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { toast } from 'react-toastify'

type Props = {
    ContactType: string
    PropertyId: number
}

const ScheduleTour = ({ ContactType, PropertyId }: Props) => {
    const tabs = [
        {
            id: 'inperson',
            label: 'InPerson',
        },
        {
            id: 'videochat',
            label: 'VideoChat',
        },
    ]

    const dispatch = useAppDispatch()
    const [phone, setPhone] = useState<any>('')
    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
        tab: string
    ) => {
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

        req = { ...req, MeetingType: tab }

        const Name = req?.Name
        const Email = req?.Email
        const Message = req?.Message

        delete req?.Name
        delete req?.Email
        delete req?.Phone
        delete req?.Message

        // console.log(JSON.stringify(req))

        try {
            const res = await postContact({
                Name,
                Phone: phoneNumber.number,
                Email,
                Message: [
                    Message,
                    Object.keys(req)
                        .map((item) => `${item}: ${req?.[item]}`)
                        ?.join('\n'),
                ]?.join('\n'),
                ContactType,
                PropertyId,
            })
            if (res) {
                toast.success('Form sent!')
            } else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    const t = useTranslations('Shared')

    return (
        <div className="ps-navtab">
            <ul
                className="nav nav-pills mb-3 grid grid-cols-1 md:grid-cols-2 w-full gap-2"
                id="pills-tab"
                role="tablist"
            >
                {tabs.map((tab) => (
                    <li
                        className="nav-item w-full"
                        key={tab.id}
                        role="presentation"
                    >
                        <button
                            className={`nav-link w-full text-center flex flex-col items-center justify-center whitespace-nowrap ${
                                tab.id === 'inperson' ? ' active  mb5-lg' : ''
                            }`}
                            id={`pills-${tab.id}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#pills-${tab.id}`}
                            type="button"
                            role="tab"
                            aria-controls={`pills-${tab.id}`}
                            aria-selected={
                                tab.id === 'inperson' ? 'true' : 'false'
                            }
                        >
                            {t(tab.label)}
                        </button>
                    </li>
                ))}
            </ul>
            {/* End nav-pills */}

            <div className="tab-content" id="pills-tabContent">
                {tabs.map((tab) => (
                    <div
                        className={`tab-pane fade${
                            tab.id === 'inperson' ? ' show active' : ''
                        }`}
                        id={`pills-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${tab.id}-tab`}
                        key={tab.id}
                    >
                        <form
                            className="form-style1"
                            onSubmit={(e) => {
                                e?.preventDefault()
                                onSubmit(e, tab?.label)
                            }}
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb20">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={t('Time')}
                                            required
                                            name="Time"
                                        />
                                    </div>
                                </div>
                                {/* End .col-12 */}

                                <div className="col-lg-12">
                                    <div className="mb20">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={t('Name')}
                                            required
                                            name="Name"
                                        />
                                    </div>
                                </div>
                                {/* End .col-12 */}

                                <div className="col-lg-12">
                                    <div className="mb20">
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
                                {/* End .col-12 */}

                                <div className="col-md-12">
                                    <div className="mb20">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder={t('Email')}
                                            required
                                            name="Email"
                                        />
                                    </div>
                                </div>
                                {/* End .col-12 */}

                                <div className="col-md-12">
                                    <div className="mb10">
                                        <textarea
                                            cols={30}
                                            rows={4}
                                            placeholder={t('EnterMessage')}
                                            defaultValue={''}
                                            name="Message"
                                        />
                                    </div>
                                </div>
                                {/* End .col-12 */}

                                <div className="col-md-12">
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="ud-btn btn-thm"
                                        >
                                            {t('SubmitTour')}
                                            <i className="fal fa-arrow-right-long" />
                                        </button>
                                    </div>
                                </div>
                                {/* End .col-12 */}
                            </div>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScheduleTour
