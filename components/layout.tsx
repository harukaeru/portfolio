import React, { useContext } from 'react'
import { NavSidebar } from './NavSidebar'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useResizeDetector } from 'react-resize-detector'
import { GlobalContext } from '../lib/context'
import { useWindow } from '../lib/useWindow'
import { useTranslation } from '../i18n'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): React.ReactNode {
  const { height, ref } = useResizeDetector<HTMLDivElement>()
  const { window } = useWindow()
  const [t] = useTranslation()

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
