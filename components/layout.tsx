import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { NavSidebar } from './NavSidebar'
import BodyWrapper from './BodyWrapper'

const name = 'Kaeru'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="relative w-full bg-white p-8 overflow-y-auto">
          <main className="content">
            <div className="content-box">{children}</div>
          </main>
        </div>
      </div>
    </BodyWrapper>
  )
}
