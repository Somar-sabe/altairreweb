'use client'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '@/public/scss/main.scss'
import { store } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import InitialLoad from './InitialLoad'
import { DM_Sans, Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from '../shared/ScrollToTop'
import { usePathname } from '@/navigation'
import ContactFormModal from '../shared/ContactFormModal'

type Props = {
    children?: React.ReactNode
}

// DM_Sans font
export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--body-font-family',
})

// Poppins font
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--title-font-family',
})

const client = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 35 * (60 * 1000), // 30 minutes,
            staleTime: 30 * (60 * 1000),
            refetchOnWindowFocus: false,
        },
    },
})

if (typeof window !== 'undefined') {
    import('bootstrap')
}

const Providers = ({ children }: Props) => {
    const pathname = usePathname()
    useEffect(() => {
        Aos.init({
            duration: 1200,
            once: true,
        })
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return (
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <InitialLoad>
                    <div
                        className={`wrapper ovh ${poppins?.className} ${dmSans?.className}`}
                    >
                        {children}
                    </div>
                </InitialLoad>
                {/* <ScrollToTop /> */}
            </Provider>
        </QueryClientProvider>
    )
}

export default Providers
