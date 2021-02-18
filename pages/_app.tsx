import '../styles/index.css'
import React from 'react'
import { appWithTranslation } from '../i18n'
import App from 'next/app'
import Layout from '../components/Layout'
import { GlobalContext } from '../lib/context'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [cookieComponentHeight, setCookieComponentHeight] = React.useState(0)

  return (
    <GlobalContext.Provider
      value={{
        cookieComponentHeight,
        setCookieComponentHeight,
        window: null,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)
