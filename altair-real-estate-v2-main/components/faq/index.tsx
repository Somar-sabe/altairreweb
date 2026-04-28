import { unstable_setRequestLocale } from 'next-intl/server'
import Items from './Items'
import { useLocale, useTranslations } from 'next-intl'

const Faq = async () => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('FAQ')

    return (
        <section className="our-faq pb90 pt-0">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-12">
                        <div className="ui-content">
                            <h4 className="title">{t('Subtitle')}</h4>
                            <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                                <Items />
                            </div>
                        </div>
                        {/* End ui-content */}

                        {/* <div className="ui-content">
                            <h4 className="title">Question About Renting</h4>
                            <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                                <Items items={faqItems} />
                            </div>
                        </div> */}
                        {/* End ui-content */}
                    </div>
                    {/* End .col-lg-12 */}
                </div>
            </div>
        </section>
    )
}

export default Faq
