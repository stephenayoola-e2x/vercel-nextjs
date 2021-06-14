import Head from 'next/head'
import styles from '../../styles/Home.module.css'

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=london&appid=ce1120e3ba8e41bfa8184eff931c3d8c')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}

export default function Page2({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Weather in {data.base}</h1>
      </main>
    </div>
  )
}
