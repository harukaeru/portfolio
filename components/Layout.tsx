import React, { useContext } from 'react'
import { NavSidebar } from './NavSidebar'
import CookieConsent from 'react-cookie-consent'
import { useResizeDetector } from 'react-resize-detector'
import { GlobalContext } from '../lib/context'
import { useWindow } from '../lib/useWindow'
import { useTranslation } from '../i18n'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { height, ref } = useResizeDetector<HTMLDivElement>()
  const { window } = useWindow()
  const [t] = useTranslation()

  const { setCookieComponentHeight } = useContext(GlobalContext)

  React.useEffect(() => {
    setCookieComponentHeight(height)
  }, [height])

  return (
    <div
      className="flex flex-col"
      style={{ height: window ? window.innerHeight : '100%' }}
    >
      <div ref={ref}>
        <CookieConsent
          location="top"
          buttonText={t('Got it')}
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
          {t(
            'I use Category 2 Cookies to improve your experience on this website'
          )}
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
