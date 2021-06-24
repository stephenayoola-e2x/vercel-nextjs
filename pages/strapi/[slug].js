import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import renderZones from '../../renderer/render-zones'

export async function getServerSideProps({params}) {
  const { slug } = params;
  console.log(slug)
  const res = await fetch(`${process.env.REACT_APP_STAPI_API_URL}/pages?slug=${slug}`)
  const data = await res.json()
  console.log('data', data)
  
  return {
    props: {
      data: data[0] || null,
    },
  }
}

export default function StrapiPage({data}) {
  console.log('data', data)
    return (
      <div className={styles.container}>
        <Head>
          <title>{data.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          {data.zone && renderZones(data.zone)}
        </main>
      </div>
    )
  }
  