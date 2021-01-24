/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrashAlt, faBars } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter()
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  console.log('isSidebarOpen', isSidebarOpen)

  return (
    <>
      {/* Sidebar */}
      <div
        className="absolute z-50 inset-2 w-8 h-8 cursor-pointer"
        onClick={() => {
          console.log('hey')
          setIsSidebarOpen((currentSidebarOpenFlag) => !currentSidebarOpenFlag)
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div
        className={`relative inset-y-0 left-0 z-30 bg-white ${
          isSidebarOpen ? 'w-64 block' : 'w-0 hidden'
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-3">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
            src="/images/kaeru.png"
            alt="Kaeru Face"
          />
        </div>
        <div className="flex items-center justify-center text-center pb-6">
          <div>Kaeru Portfolio</div>
        </div>

        <Navigation
          activeItemId={router.asPath}
          onSelect={({ itemId }) => {
            console.log('selected')
            router.push(itemId)
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
              router.push(itemId)
            }}
          />
        </div>
      </div>
    </>
  )
}
