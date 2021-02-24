import '../styles/index.css'
import React from 'react'
import { appWithTranslation } from '../i18n'
import Layout from '../components/Layout'
import { GlobalContext } from '../lib/context'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [cookieComponentHeight, setCookieComponentHeight] = React.useState(0)
  const [isAdBlocked, setIsAdBlocked] = React.useState(false)

  React.useEffect(() => {
    fetch('http://d1l6p2sc9645hc.cloudfront.net/tracker.js', {
      method: 'HEAD',
      mode: 'no-cors',
    })
      .then(() => {
        setIsAdBlocked(false)
      })
      .catch(() => {
        setIsAdBlocked(true)
      })
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        cookieComponentHeight,
        setCookieComponentHeight,
        window: null,
        isAdBlocked,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

export default appWithTranslation(MyApp)
