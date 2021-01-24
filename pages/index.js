import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostData } from '../lib/posts'
import Link from 'next/link'

const a = 1

export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  console.log('Home')
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          Haro! Nice too meeto you 🙇
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
