import ContactForm from '@/components/contact/ContactForm'
import ContactMap from '@/components/contact/ContactMap'
import VisitOffice from '@/components/contact/VisitOffice'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <div className="hidden d-lg-block">
                <ContactMap />
            </div>

            <ContactForm />
            <div className="d-lg-none">
                <ContactMap />
            </div>
            <VisitOffice />
        </>
    )
}

export default Page
