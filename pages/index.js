import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swe Movie App</title>
        <meta name="description" content="movie app created by Emad Mhardawi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
