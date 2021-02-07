import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { NavSidebar } from './NavSidebar'
import BodyWrapper from './BodyWrapper'
import CookieConsent, { Cookies } from 'react-cookie-consent'

const name = 'Kaeru'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <BodyWrapper>
      <div className="flex flex-col h-screen">
        <CookieConsent
          location="top"
          buttonText="Agree"
          cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B', position: 'relative' }}
          buttonStyle={{
            color: '#4e503b',
            fontSize: '13px',
            backgroundColor: 'rgb(153 217 234)',
          }}
        >
          By using this site, you agree to my use of Cookies
        </CookieConsent>

        <div className="flex bg-gray-200 flex-grow">
          <NavSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <div className="relative w-full h-full bg-white p-4 pt-8 overflow-y-auto">
            <main className="content h-full">
              <div className="content-box h-full">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
