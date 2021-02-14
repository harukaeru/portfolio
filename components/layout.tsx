import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { NavSidebar } from './NavSidebar'
import BodyWrapper from './BodyWrapper'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useResizeDetector } from 'react-resize-detector'
import { GlobalContext } from '../lib/context'
import { useWindow } from '../lib/useWindow'
import { useTranslation } from '../i18n'

const name = 'Kaeru'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const { width, height, ref } = useResizeDetector<HTMLDivElement>()
  const { window } = useWindow()
  const [t] = useTranslation()

  // return <div ref={ref}>{`${width}x${height}`}</div>;
  console.log('height', height)
  const context = {
    cookieComponentHeight: height,
  }
  const { setCookieComponentHeight } = useContext(GlobalContext)

  React.useEffect(() => {
    setCookieComponentHeight(height)
  }, [height])

  console.log('context', context)

  return (
    <div
      className="flex flex-col"
      style={{ height: window ? window.innerHeight : '100%' }}
    >
      <div ref={ref}>
        <CookieConsent
          location="top"
          buttonText={t('Agree')}
          cookieName="myAwesomeCookieName2"
          style={{
            background: '#2B373B',
            position: 'relative',
            fontSize: '11px',
          }}
          contentStyle={{
            flex: '1 0 100px',
          }}
          buttonStyle={{
            color: '#4e503b',
            marginLeft: '0px',
            fontSize: '11px',
            backgroundColor: 'rgb(153 217 234)',
          }}
        >
          {t('By using this site, you agree to my use of Cookies')}
        </CookieConsent>
      </div>
      <div className="flex bg-gray-200 flex-grow">
        <NavSidebar />

        <div className="relative w-full bg-white">
          <main className="content h-full p-4 pt-8 overflow-y-hidden">
            <div className="content-box h-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
