/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import { useTranslation, i18n } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faBars,
  faHome,
  faAddressCard,
  faChess,
  faGlobe,
  faLink,
} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter()
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [t] = useTranslation()

  console.log('router.asPath', router.asPath)

  return (
    <>
      <div
        className={`flex justify-start flex-col inset-y-0 left-0 z-30 bg-white ${
          isSidebarOpen ? 'w-44 block border-right-black' : 'w-0 hidden'
        }`}
      >
        <div className="relative w-full mt-16">
          <Navigation
            activeItemId={'[noactive-forever]'}
            onSelect={({ itemId }) => {
              router.push(itemId)
            }}
            items={[
              {
                title: t('Home'),
                itemId: '/',
              },
              {
                title: t('About'),
                itemId: '/about',
              },
            ]}
          />
        </div>

        <div className="relative bottom-0 w-full mb-8 mt-auto">
          <Navigation
            activeItemId={router.asPath}
            items={[
              {
                title: t('Change Language'),
                itemId: '/language',
              },
            ]}
            onSelect={({ itemId }) => {
              console.log('i18n.language', i18n.language)
              const targetLanguage = i18n.language === 'en' ? 'ja' : 'en'
              console.log('targetLanguage', targetLanguage)
              i18n.changeLanguage(targetLanguage)
            }}
          />
        </div>
      </div>
    </>
  )
}
