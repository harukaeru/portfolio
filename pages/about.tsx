import React from 'react'
import { useTranslation } from '../i18n'

export default function About(): React.ReactNode {
  const [t] = useTranslation()

  return (
    <div>
      <section className="mb-4">
        <div className="text-4xl mt-4 sm:mt-20">{t('Skillset')}</div>
        <div className="ml-4 mt-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-3">React / TypeScript</div>
          <div className="mb-3">Python 3.x / Django</div>
          <div className="mb-3">Ruby on Rails</div>
          <div className="mb-3">AWS / MySQL</div>
          <div className="mb-3">{t('etc')}</div>
        </div>
      </section>
      <section>
        <div className="text-4xl mt-0 sm:mt-16">{t('Links')}</div>
        <div className="ml-4 mt-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-3">
            Twitter (
            <a
              href="https://twitter.com/harukaeru_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('En')}
            </a>
            {' / '}
            <a
              href="https://twitter.com/harukaeru1981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('Ja')}
            </a>
            )
          </div>

          <div className="mb-3">
            <a
              href="https://github.com/harukaeru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://harukaeru-harukaeru.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('Medium')}
            </a>
          </div>

          <div className="mb-3">
            <a
              href="https://stackoverflow.com/users/3077059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('StackOverflow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
