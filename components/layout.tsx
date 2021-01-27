import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
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

        <div className="overflow-hidden w-full">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="relative content-box inset-8"
                style={{ flexGrow: 2, flexBasis: '0%' }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  )
}
