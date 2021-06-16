import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export async function getServerSideProps({params}) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=ce1120e3ba8e41bfa8184eff931c3d8c&units=metric`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function LocationPage({data}) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Page 2</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1>Weather in {data.name}</h1>
          <h2>{data.main.temp.toFixed(0)}°C {'  '}{data.weather[0].description}</h2>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        </main>
      </div>
    )
  }
  