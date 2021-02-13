/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import { useTranslation, i18n } from '../i18n'
import React from 'react'

export const NavSidebar = () => {
  const router = useRouter()
  const [t] = useTranslation()

  console.log('router.asPath', router.asPath)

  return (
    <>
      <div className="bg-white flex justify-between flex-col">
        <div className="w-32 mt-12 sm:mt-28">
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

        <div className="w-32 mb-8">
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
