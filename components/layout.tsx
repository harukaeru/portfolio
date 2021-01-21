import Head from 'next/head'
import Link from 'next/link'
import Icon from 'awesome-react-icons'
import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { NavSidebar } from './NavSidebar'
import BodyWrapper from './BodyWrapper'

const name = 'Kaeru'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
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
