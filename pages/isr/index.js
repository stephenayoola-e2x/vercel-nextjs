import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export async function getStaticProps({params}) {
  const res = await fetch(`https://random-data-api.com/api/cannabis/random_cannabis`)
  const data = await res.json()
  console.log(data)
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
          <h1>Incremental Static Regeneration (ISR) Example</h1>
          <p>ISR will recache every 10 seconds, data is stale whilst revalidating</p>
          <h2>Random Cannabis Strain</h2>
          <h2>{data.strain}</h2>
          <h3>Health Benefit: {data.health_benefit}</h3>
          <h3>Type: {data.type}</h3>
          <h3>Cannabinoid: {data.cannabinoid}</h3>
        </main>
      </div>
    )
  }
  