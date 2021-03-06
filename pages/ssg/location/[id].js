import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export async function getStaticProps({params}) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=ce1120e3ba8e41bfa8184eff931c3d8c&units=metric`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  
    const response = await fetch('http://api.openweathermap.org/data/2.5/find?lat=51.48&lon=-0.16&cnt=50&appid=ce1120e3ba8e41bfa8184eff931c3d8c');
    const data = await response.json();

    const { list } = data;

    const paths = list.map((location) => {
        const sanitisedName = location.name.toLowerCase();
        const slug = encodeURIComponent(sanitisedName);
        return { params: { id: slug } }
    });

    return { paths, fallback: false }
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
  