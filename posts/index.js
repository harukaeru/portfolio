import Head from 'next/head'
import { getHomeData } from '../lib/posts'

export async function getStaticProps() {
  const homeData = getHomeData()
  return {
    props: {
      home: homeData,
    },
  }
}

export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>Kaeru Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>{home.content}</section>
    </>
  )
}
