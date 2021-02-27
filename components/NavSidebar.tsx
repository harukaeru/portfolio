import { Navigation } from 'react-minimal-side-navigation'
import { useRouter } from 'next/router'
import { useTranslation, i18n } from '../i18n'
import React from 'react'

export const NavSidebar = (): JSX.Element => {
  const router = useRouter()
  const [t] = useTranslation()

  return (
    <>
      <div className="bg-white flex justify-between flex-col">
        <div className="w-32 mt-12 sm:mt-28 select-none">
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

        <div className="w-32 mb-8 select-none">
          <Navigation
            activeItemId={router.asPath}
            items={[
              {
                title: t('Change Language'),
                itemId: '/language',
              },
            ]}
            onSelect={() => {
              const targetLanguage = i18n.language === 'en' ? 'ja' : 'en'
              i18n.changeLanguage(targetLanguage)
            }}
          />
        </div>
      </div>
    </>
  )
}
