import Head from 'next/head'
import styles from '../styles/Home.module.css'


export async function getStaticProps({params}) {
  const response = await fetch('http://api.openweathermap.org/data/2.5/find?lat=51.48&lon=-0.16&cnt=50&appid=ce1120e3ba8e41bfa8184eff931c3d8c');
  const data = await response.json();
  const { list } = data;

  return {
    props: {
      data: list,
    },
  }
}



export default function Page2({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Pick a location</h1>
        {data.map((location) => {
          const sanitisedName = location.name.toLowerCase();
          const slug = encodeURIComponent(sanitisedName);
          return <a href={`/location/${slug}`}>{location.name}</a>
        })}
      </main> 
    </div>
  )
} 
