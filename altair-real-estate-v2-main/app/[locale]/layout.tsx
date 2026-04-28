import Providers from '@/components/providers/Providers'
import { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { locales } from '@/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Suspense } from 'react'

type Props = {
  children: React.ReactNode
  params: any
}

const Footer = dynamic(() => import('@/components/layout/Footer'))
const Header = dynamic(() => import('@/components/layout/Header'))
const MobileMenu = dynamic(() => import('@/components/layout/MobileMenu'))

export const metadata: Metadata = {
  title:
    'Discover Luxury Living in Dubai with Altair Real Estate - Your Gateway to Exceptional Properties',
  description:
    'Welcome to Altair Real Estate, where your dream of owning the perfect property in Dubai turns into reality.',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <html lang={locale} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
      <Suspense>
        {/* =========================
            Google Tag Manager
        ========================= */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>

        {/* =========================
            Google Analytics
        ========================= */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAM_ID ?? ''} />

        {/* =========================
            Meta Pixel (Facebook)
        ========================= */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1264641805521303');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Bitrix */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://cdn-ru.bitrix24.ru/b23127008/crm/site_button/loader_1_0phhw6.js');
            `,
          }}
        />
      </Suspense>

      <body className="body">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <MobileMenu />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>

        {/* =========================
            noscript fallbacks
        ========================= */}

        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1264641805521303&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  )
}
