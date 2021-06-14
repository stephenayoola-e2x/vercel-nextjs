import Head from 'next/head'
import styles from '../../styles/Home.module.css'

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default function LocationPage(props) {
    console.log('props', props)
    return (
      <div className={styles.container}>
        <Head>
          <title>Page 2</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1>Weather in</h1>
        </main>
      </div>
    )
  }
  