/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import { useTranslation, i18n } from '../i18n'
import Link from 'next/link'
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

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter()
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [t] = useTranslation()

  return (
    <>
      {/* Sidebar */}
      <div
        className="absolute z-50 inset-2 w-8 h-8 cursor-pointer"
        onClick={() => {
          setIsSidebarOpen((currentSidebarOpenFlag) => !currentSidebarOpenFlag)
        }}
      >
        <FontAwesomeIcon icon={faBars} size="2x" className={'text-xl'} />
      </div>

      <div
        className={`relative inset-y-0 left-0 z-30 bg-white ${
          isSidebarOpen ? 'w-80 block' : 'w-0 hidden'
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-3 select-none">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
            src="/images/kaeru.png"
            alt="Kaeru Face"
          />
        </div>
        <div className="flex items-center justify-center text-center pb-6 select-none">
          <div>Kaeru Portfolio</div>
        </div>

        <Navigation
          activeItemId={router.asPath}
          onSelect={({ itemId }) => {
            router.push(itemId)
          }}
          items={[
            {
              title: t('Home'),
              itemId: '/',
              elemBefore: () => <FontAwesomeIcon icon={faHome} />,
            },
            {
              title: t('About'),
              itemId: '/posts/first-post',
              elemBefore: () => <FontAwesomeIcon icon={faAddressCard} />,
            },
            {
              title: t('Gallery'),
              itemId: '/posts/first-post2',
              elemBefore: () => <FontAwesomeIcon icon={faChess} />,
            },
            {
              title: t('Links'),
              itemId: '/posts/first-post3',
              elemBefore: () => <FontAwesomeIcon icon={faLink} />,
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={router.asPath}
            items={[
              {
                title: t('Change Language'),
                itemId: '/language',
                elemBefore: () => <FontAwesomeIcon icon={faGlobe} />,
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
