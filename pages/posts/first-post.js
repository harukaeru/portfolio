import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <div>here</div>
      <Head>
        <title>First post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
