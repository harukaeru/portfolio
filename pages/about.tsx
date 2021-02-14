import Link from 'next/link'
import React from 'react'
import Lifegame from '../components/Lifegame'
import { useTranslation } from '../i18n'

/*
      <i className="fa-2x fab fa-twitter"></i>
      <i className="fa-2x fab fa-github-alt"></i>
      <i className="fa-2x fab fa-medium-m"></i>
      <i className="fa-2x fab fa-linkedin"></i>
      <i className="fa-2x fab fa-tiktok"></i>
      <i className="fa-2x fab fa-stack-overflow"></i>
      <i className="fa-2x fab fa-python"></i>
      <i className="fa-2x fab fa-angular"></i>
      <i className="fa-2x fab fa-react"></i>
      <i className="fa-2x fab fa-aws"></i>
      <i className="fa-2x fab fa-jira"></i>
      <i className="fa-2x fab fa-centos"></i>
      <i className="fa-2x fab fa-docker"></i>
      <i className="fa-2x fab fa-internet-explorer"></i>
      <i className="fa-2x fab fa-java"></i>
      */

const About = () => {
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
        <div className="text-4xl mt-0 sm:mt-20">{t('Links')}</div>
        <div className="ml-4 mt-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-3">
            Twitter (
            <a
              href="https://twitter.com/harukaeru_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('English')}
            </a>
            {' / '}
            <a
              href="https://twitter.com/harukaeru1981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t('Japanese')}
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

export default About
