/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = () => {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  console.log('isSidebarOpen', isSidebarOpen)

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => {
          console.log('hey')
          setIsSidebarOpen(false)
        }}
        className={`fixed inset-0 z-20 opacity-50 bg-black ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      />

      {/* Sidebar */}
      <div
        className={`origin-left relative inset-y-0 left-0 z-30 bg-white ease-in-out transform transition-all duration-300 ${
          isSidebarOpen ? 'scale-x-100 w-64' : 'scale-x-0 w-0'
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
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
              elemBefore: () => <FontAwesomeIcon icon={faTrashAlt} />,
            },
            {
              title: 'About',
              itemId: '/about',
              elemBefore: () => <FontAwesomeIcon icon={faTrashAlt} />,
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
                elemBefore: () => <FontAwesomeIcon icon={faTrashAlt} />,
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
