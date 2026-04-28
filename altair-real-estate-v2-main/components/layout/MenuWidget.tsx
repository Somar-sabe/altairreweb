import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'
import React from 'react'

const MenuWidget = async () => {
    const menuSections = [
        // {
        //     title: 'Popular Search',
        //     links: [
        //         { label: 'Apartment for Rent', href: '#' },
        //         { label: 'Apartment Low to Hide', href: '#' },
        //         { label: 'Offices for Buy', href: '#' },
        //         { label: 'Offices for Rent', href: '#' },
        //     ],
        // },
        {
            title: 'QuickLink',
            links: [
                { label: 'Terms', href: '#' },
                { label: 'Policy', href: '/privacy-policy' },
                // { label: 'Pricing Plans', href: '#' },
                // { label: 'Our Services', href: '#' },
                { label: 'Contact', href: '/contact' },
                // { label: 'Careers', href: '#' },
                { label: 'FAQ', href: '/faq' },
            ],
        },
        // {
        //     title: 'Discover',
        //     links: [
        //         { label: 'Miami', href: '#' },
        //         { label: 'Los Angeles', href: '#' },
        //         { label: 'Chicago', href: '#' },
        //         { label: 'New York', href: '#' },
        //     ],
        // },
    ]
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Footer')

    return (
        <>
            {menuSections.map((section, index) => (
                <div className="col-auto" key={index}>
                    <div className="link-style1 mb-3">
                        <h6 className="text-white mb25">{t(section.title)}</h6>
                        <ul className="ps-0">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href}>
                                        {t('Items.' + link.label)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuWidget
