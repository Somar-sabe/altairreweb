'use client'
import { mobileMenuItems } from '@/data/mobileMenuItems'
import { isParentActive } from '@/utils/utils'

import { Link, locales, usePathname, useRouter } from '@/navigation'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Select from 'react-select'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { setCurrentCurrency } from '@/store/slices/MasterReducer'
import { useLocale } from 'next-intl'
import { Fragment } from 'react'

const ProSidebarContent = () => {
    const path = usePathname()
    const { currencies, currentCurrency } = useAppSelector(
        (state) => state.MasterReducer
    )
    const dispatch = useAppDispatch()
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

    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const localesList = locales?.map((item) => ({
        label: item.toUpperCase(),
        value: 1,
    }))

    return (
        <Sidebar
            width="100%"
            backgroundColor="#fff"
            className="my-custom-class"
        >
            <Menu>
                {mobileMenuItems.map((item: any, index: number) => (
                    <Fragment key={item.label + index}>
                        {item?.subMenu?.length > 0 ? (
                            <SubMenu
                                key={item?.label}
                                className={
                                    isParentActive(item.subMenu, path)
                                        ? 'active'
                                        : ''
                                }
                                label={item.label}
                            >
                                {item.subMenu.map(
                                    (subItem: any, subIndex: number) => (
                                        <MenuItem
                                            key={subItem?.label + subIndex}
                                            component={
                                                <Link
                                                    className={
                                                        subItem.path == path
                                                            ? 'active'
                                                            : ''
                                                    }
                                                    href={subItem.path}
                                                    key={subItem?.label}
                                                />
                                            }
                                        >
                                            {subItem.label}
                                        </MenuItem>
                                    )
                                )}
                            </SubMenu>
                        ) : (
                            <MenuItem
                                key={item?.label + index}
                                component={
                                    <Link
                                        className={
                                            item?.link == path ? 'active' : ''
                                        }
                                        href={item?.link}
                                        key={item.label}
                                    />
                                }
                            >
                                {item.label}
                            </MenuItem>
                        )}
                    </Fragment>
                ))}
            </Menu>
            <div className="flex items-center gap-1 flex-wrap px-[30px]">
                <Select
                    value={
                        currencies?.find(
                            (item) => item?.label == currentCurrency?.label
                        ) ?? currencies?.[0]
                    }
                    name="colors"
                    onChange={(e) => {
                        dispatch(
                            setCurrentCurrency({
                                label: e!.label,
                                value: e!.value,
                            })
                        )
                    }}
                    options={currencies}
                    styles={customStyles}
                    className="text-xs"
                    classNamePrefix="select"
                    required
                    menuPlacement="top"
                />
                <Select
                    value={localesList?.find(
                        (item) => item?.label?.toLowerCase() == locale
                    )}
                    name="colors"
                    onChange={(e) => {
                        router.replace(pathname, {
                            locale: e?.label?.toLowerCase(),
                        })
                    }}
                    options={localesList}
                    styles={customStyles}
                    className="text-xs"
                    classNamePrefix="select"
                    required
                    placeholder="EN"
                    menuPlacement="top"
                />
            </div>
        </Sidebar>
    )
}

export default ProSidebarContent
