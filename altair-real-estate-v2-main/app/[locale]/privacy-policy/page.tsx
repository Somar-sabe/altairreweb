import React from 'react'

type Props = {}

const Page = (props: Props) => {
    const data = [
        {
            title: 'Privacy Policy',
            desc: (
                <p>
                    Altair Real Estate is committed to protecting your privacy.
                    This Privacy Policy describes how we collect, use, and
                    disclose your personal information.
                </p>
            ),
        },
        {
            title: 'Information Collection',
            desc: (
                <p>
                    We collect personal information from you when you
                    voluntarily provide it to us, such as when you fill out a
                    form or sign up for our newsletter. The personal information
                    we collect may include your name, email address, phone
                    number, and other contact information. We may also collect
                    information about your use of our website, such as your IP
                    address and browsing history.
                </p>
            ),
        },
        {
            title: 'Use of Information',
            desc: (
                <p>
                    We use your personal information to provide you with the
                    services and products you request, to communicate with you
                    about our products and services, and to improve our website
                    and services. We may also use your personal information for
                    marketing purposes, such as sending you newsletters or
                    promotional emails.
                </p>
            ),
        },
        {
            title: 'Disclosure of Information',
            desc: (
                <p>
                    We may share your personal information with third-party
                    service providers who assist us in providing our services or
                    operating our website. We may also disclose your personal
                    information if required by law or in connection with a legal
                    proceeding.
                </p>
            ),
        },
        {
            title: 'Cookies',
            desc: (
                <p>
                    We use cookies and other tracking technologies to collect
                    information about your use of our website. This information
                    may include your IP address, browser type, operating system,
                    and browsing history. You can disable cookies in your
                    browser settings, but this may affect your ability to use
                    our website.
                </p>
            ),
        },
        {
            title: 'Security',
            desc: (
                <p>
                    We take reasonable measures to protect your personal
                    information from unauthorized access and disclosure.
                    However, no security measures can guarantee 100% security.
                </p>
            ),
        },
        {
            title: 'Children',
            desc: (
                <p>
                    Our website is not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children under the age of 13.
                </p>
            ),
        },
        {
            title: 'Changes to this Privacy Policy',
            desc: (
                <p>
                    We may update this Privacy Policy from time to time. The
                    updated Privacy Policy will be posted on our website, and
                    the date of the last update will be indicated at the top of
                    the Privacy Policy.
                </p>
            ),
        },
        {
            title: 'Contact Us',
            desc: (
                <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at{' '}
                    <a href="privacy@altairre.ae">privacy@altairre.ae</a>
                </p>
            ),
        },
    ]
    return (
        <section className="container flex flex-col gap-2 !py-10">
            {data?.map((item, index) => {
                return (
                    <div key={item?.title + index}>
                        <h3>{item?.title}</h3>
                        {item?.desc}
                    </div>
                )
            })}
        </section>
    )
}

export default Page
