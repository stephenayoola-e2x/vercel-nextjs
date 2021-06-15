import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export async function getStaticProps({params}) {
  const res = await fetch(`https://random-data-api.com/api/cannabis/random_cannabis`)
  const data = await res.json()

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default function LocationPage({data}) {
    return (
      <div className={styles.container}>
        <Head>
          <title>ISR Strain</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1>Random Strain</h1>
          <h2>{data.strain}, {data.health_benefit}</h2>
          <p>ISR will recache every 10 seconds, data is stale whilst revalidating</p>
        </main>
      </div>
    )
  }
  