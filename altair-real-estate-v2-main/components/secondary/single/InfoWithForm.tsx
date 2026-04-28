'use client'
import Select from 'react-select'
import SingleAgentInfo from './SingleAgentInfo'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { postContact } from '@/utils/routes'
import { useAppDispatch } from '@/store/store'
import { setLoading } from '@/store/slices/LoadingReducer'

const InfoWithForm = () => {
    const inqueryType = [
        { value: 'Engineer', label: 'Engineer' },
        { value: 'Doctor', label: 'Doctor' },
        { value: 'Employee', label: 'Employee' },
        { value: 'Businessman', label: 'Businessman' },
        { value: 'Other', label: 'Other' },
    ]

    const nameRef = useRef<HTMLInputElement>(null!)
    const emailRef = useRef<HTMLInputElement>(null!)
    const phoneRef = useRef<HTMLInputElement>(null!)
    const msgRef = useRef<HTMLTextAreaElement>(null!)
    const checkRef = useRef<HTMLInputElement>(null!)

    const dispatch = useAppDispatch()

    const onSubmit = async () => {
        const Name = nameRef?.current?.value
        const Email = emailRef?.current?.value
        const Phone = phoneRef?.current?.value
        const Message = msgRef?.current?.value
        const Check = checkRef?.current?.checked

        if (Name?.trim() == '') {
            toast.error("Name can't be empty")
            return
        }
        if (Email?.trim() == '' || !Email?.includes('@')) {
            toast.error('Invalid email provided')
            return
        }
        if (Phone?.trim() == '') {
            toast.error("Name can't be empty")
            return
        }
        if (Message?.trim() == '') {
            toast.error("Message can't be empty")
            return
        }
        if (!Check) {
            toast.error('You must agree to Terms of Use')
            return
        }
        try {
            dispatch(setLoading(true))
            const data = await postContact({ Name, Email, Phone, Message })
            if (data) toast.success('Contact Form Sent!')
            else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }

    return (
        <>
            {/* <SingleAgentInfo /> */}

            <div className="row">
                <div className="col-md-12">
                    <form className="form-style1 row">
                        <div className="col-md-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw600 mb10">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ali Tufan"
                                    ref={nameRef}
                                />
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-md-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw600 mb10">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your phone"
                                    ref={phoneRef}
                                />
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-md-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw600 mb10">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="creativelayers088"
                                    ref={emailRef}
                                />
                            </div>
                        </div>
                        {/* End .col */}

                        {/* End .col */}

                        <div className="col-md-12">
                            <div className="mb10">
                                <label className="heading-color ff-heading fw600 mb10">
                                    Message
                                </label>
                                <textarea
                                    cols={30}
                                    rows={4}
                                    placeholder="Hello, I am interested in [Renovated apartment at last floor]"
                                    defaultValue={''}
                                    ref={msgRef}
                                />
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
                            <label className="custom_checkbox fz14 ff-heading">
                                By submitting this form I agree to Terms of Use
                                <input type="checkbox" ref={checkRef} />
                                <span className="checkmark" />
                            </label>
                        </div>
                        {/* End .col */}

                        <div className="btn-area mt20">
                            <button
                                className="ud-btn btn-white2"
                                onClick={(e) => {
                                    e?.preventDefault()
                                    onSubmit()
                                }}
                                type="button"
                            >
                                Request Information{' '}
                                <i className="fal fa-arrow-right-long" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InfoWithForm
