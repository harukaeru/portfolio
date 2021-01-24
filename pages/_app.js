import '../styles/index.css'
import Layout from '../components/Layout'
// import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
