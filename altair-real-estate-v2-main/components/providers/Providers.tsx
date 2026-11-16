'use client'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '@/public/scss/main.scss'
import { store } from '@/store/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import InitialLoad from './InitialLoad'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from '@/navigation'

// Self-hosted fonts (no Google fetch at build time)
import '@fontsource-variable/dm-sans'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

type Props = {
    children?: React.ReactNode
}

const client = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 35 * (60 * 1000), // 35 minutes
            staleTime: 30 * (60 * 1000), // 30 minutes
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
                    <div className="wrapper ovh">{children}</div>
                </InitialLoad>
            </Provider>
        </QueryClientProvider>
    )
}

export default Providers