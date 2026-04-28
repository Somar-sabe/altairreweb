import React from 'react'

type Props = {}

const ContactMap = (props: Props) => {
    return (
        <section className="p-0">
            <iframe
                className="home8-map contact-page"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.82151045846!2d55.263182574383436!3d25.184354699373568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d1f120e711%3A0xf19c0504f3cb24ec!2sThe%20Bayswater%20Tower!5e0!3m2!1sen!2sae!4v1741267273364!5m2!1sen!2sae" 
                title="BayseWater tower, Dubai, United Arab Emirates"
                aria-label="BaysWater Tower, Dubai, United Arab Emirates"
            />
        </section>
    )
}

export default ContactMap
