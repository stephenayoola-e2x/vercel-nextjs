import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function StrapiPage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
            REACT_APP_STAPI_API_URL: {process.env.REACT_APP_STAPI_API_URL}
        </main>
      </div>
    )
  }
  