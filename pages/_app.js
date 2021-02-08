import '../styles/index.css'
import React from 'react'
import { appWithTranslation } from '../i18n'
import App from 'next/app'
import Layout from '../components/Layout'
import { GlobalContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  const [cookieComponentHeight, setCookieComponentHeight] = React.useState(0)
  return (
    <GlobalContext.Provider
      value={{ cookieComponentHeight, setCookieComponentHeight }}
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
