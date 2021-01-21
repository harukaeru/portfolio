/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import Icon from 'awesome-react-icons'
import React, { useState } from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = () => {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        id="aaaaaaaa"
        onClick={() => {
          console.log('hey')
          setIsSidebarOpen(false)
        }}
        className={`fixed inset-0 z-20 opacity-50 bg-black ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      />

      <div className="absolute right-0">
        <a href="https://github.com/abhijithvijayan/react-minimal-side-navigation">
          View on GitHub
        </a>
      </div>

      <div>
        <button
          id="bbbbbbbbb"
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            react-minimal-side-navigation
          </span>
        </div>

        <Navigation
          activeItemId={router.asPath}
          onSelect={({ itemId }) => {
            router.push(itemId, undefined, { shallow: true })
          }}
          items={[
            {
              title: 'Home',
              itemId: '/',
              elemBefore: () => <Icon name="coffee" />,
            },
            {
              title: 'About',
              itemId: '/about',
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: 'Blogs',
                  itemId: '/posts/first-post',
                },
              ],
            },
            {
              title: 'Another Tab',
              itemId: '/another',
              subNav: [
                {
                  title: 'Teams',
                  itemId: '/another/teams',
                },
              ],
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={router.asPath}
            items={[
              {
                title: 'Settings',
                itemId: '/settings',
                elemBefore: () => <Icon name="activity" />,
              },
            ]}
            onSelect={({ itemId }) => {
              router.push(itemId, undefined, { shallow: true })
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
