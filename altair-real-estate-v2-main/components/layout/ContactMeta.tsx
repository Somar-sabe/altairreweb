import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

const ContactMeta = () => {
    const contactInfoList = [
        {
            title: 'Customer',
            phone: '+971 50 625 1573',
            phoneLink: 'tel:+971506251573', // Changed phoneLink to tel: URI
        },
        {
            title: 'Support',
            mail: 'info@altairre.ae',
            mailLink: 'mailto:info@altairre.ae', // Changed mailLink to direct email address
        },
    ]
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Footer.Contact')

    return (
        <div className="row mb-4 mb-lg-5">
            {contactInfoList.map((contact, index) => (
                <div className="col-auto" key={index}>
                    <div className="contact-info">
                        <p className="info-title">{t(contact.title)}</p>
                        {contact.phone && (
                            <h6 className="info-phone">
                                <a href={contact.phoneLink}>{contact.phone}</a>
                            </h6>
                        )}
                        {contact.mail && (
                            <h6 className="info-mail">
                                <a href={contact.mailLink}>{contact.mail}</a>
                            </h6>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactMeta
