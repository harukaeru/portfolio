import React from 'react'
import { useTranslation } from '../i18n'

export default function Index(): React.ReactNode {
  const [t] = useTranslation()
  const [clickCount, setClickCount] = React.useState(0)

  return (
    <div>
      <div className="text-4xl mt-4 sm:mt-36">{t('This is Kaeru')}</div>
      <section className="ml-3 mt-1 flex flex-col">
        <div>
          <p className="mt-1">{t('Konnichiwa!')}</p>
          <p className="mt-1">{t('My name is Kaeru')}</p>
          <p className="mt-1">{t('I am a programmer living in Japan')}</p>
          <p className="mt-1">
            {t('You can reach me from the bottom-right button')}
          </p>
        </div>
        <div className="self-end disappear-when-xs mt-6 sm:mt-20 ml-auto mr-2 sm:mr-auto">
          <img
            className="block h-24 rounded-full cursor-pointer transform"
            style={{
              transform: `scale(${1 + 0.1 * clickCount}, ${
                1 + 0.1 * clickCount
              }) rotate(${(clickCount % 4) * 90}deg)`,
            }}
            src="/images/kaeru.png"
            alt="Kaeru Face"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </section>
    </div>
  )
}
