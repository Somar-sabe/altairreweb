'use client'
import { buyItems, mediaItems, moreItems } from '@/data/navItems'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/navigation'
import { useEffect, useState } from 'react'

const MainMenu = () => {
    const pathname = usePathname()
    const [topMenu, setTopMenu] = useState('')
    const t = useTranslations('Menu')

    useEffect(() => {
        if ('' == pathname.split('/')[1]) {
            setTopMenu('home')
        }

        buyItems.forEach((elm) => {
            if (elm.href.split('/')[1] == pathname.split('/')[1]) {
                setTopMenu('buy')
            }
        })

        if ('rent' == pathname.split('/')[1]) {
            setTopMenu('rent')
        }

        mediaItems.forEach((elm) => {
            if (elm.href.split('/')[1] == pathname.split('/')[1]) {
                setTopMenu('media')
            }
        })

        moreItems.forEach((elm) => {
            if (elm.href.split('/')[1] == pathname.split('/')[1]) {
                setTopMenu('more')
            }
        })

        if ('contact' == pathname.split('/')[1]) {
            setTopMenu('contact')
        }
    }, [pathname])

    const handleActive = (link: string) => {
        const linkHref = link.split('/')
        const pathHref = pathname.split('/')
        if (linkHref[linkHref.length - 1] == pathHref[pathHref.length - 1]) {
            return 'menuActive'
        }
    }
    return (
        <ul className="ace-responsive-menu select-none">
            <li className="visible_list dropitem">
                <Link
                    className={`${handleActive('/')}`}
                    href={'/'}
                    scroll={false}
                >
                    <span
                        className={
                            topMenu == 'home' ? 'title menuActive' : 'title'
                        }
                    >
                        {t('Home')}
                    </span>
                </Link>

                <span className="arrow"></span>
            </li>
            {/* End homeItems */}

            <li className="visible_list dropitem">
                <span className="list-item font-semibold">
                    <span
                        className={
                            topMenu == 'buy' ? 'title menuActive' : 'title'
                        }
                    >
                        {t('Buy')}
                    </span>
                    <span className="arrow rtl:before:mr-[8px] rtl:before:!ml-0"></span>
                </span>
                <ul className="sub-menu">
                    {buyItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`${handleActive(item.href)}`}
                                href={item.href}
                                scroll={false}
                            >
                                {t(item.label)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            {/* End listings */}

            <li className="visible_list dropitem">
                <Link
                    className={`${handleActive('/rent')}`}
                    href={'/rent'}
                    scroll={false}
                >
                    <span
                        className={
                            topMenu == 'rent' ? 'title menuActive' : 'title'
                        }
                    >
                        {t('Rent')}
                    </span>
                </Link>
            </li>

            <li className="visible_list dropitem">
                <span className="list-item font-semibold">
                    <span
                        className={
                            topMenu == 'media' ? 'title menuActive' : 'title'
                        }
                    >
                        {t('Media')}
                    </span>
                    <span className="arrow rtl:before:mr-[8px] rtl:before:!ml-0"></span>
                </span>
                <ul className="sub-menu">
                    {mediaItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`${handleActive(item.href)}`}
                                href={item.href}
                                scroll={false}
                            >
                                {t(item.label)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>

            <li className="visible_list dropitem">
                <span className="list-item font-semibold">
                    <span
                        className={
                            topMenu == 'more' ? 'title menuActive' : 'title'
                        }
                    >
                        {t('More')}
                    </span>
                    <span className="arrow rtl:before:mr-[8px] rtl:before:!ml-0"></span>
                </span>
                <ul className="sub-menu">
                    {moreItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`${handleActive(item.href)}`}
                                href={item.href}
                                scroll={false}
                            >
                                {t(item.label)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>

            <li className="visible_list dropitem ">
                <Link
                    className={` bg-brand-100 text-white border border-2  !border-brand-100 rounded-md h-fit py-2 hover:bg-transparent hover:!text-brand-100 `}
                    href={'/contact'}
                    scroll={false}
                >
                    <span>{t('Contact Us')}</span>
                </Link>
            </li>

            {/* End property Items */}

            {/* End blog Items */}

            {/* End pages Items */}
        </ul>
    )
}

export default MainMenu
