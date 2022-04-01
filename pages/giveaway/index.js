import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import next from 'next';
import Footer from '../../components/footer';
import MinerPayout from '../../components/bulk/index';

export default function Home() {  

  return (
    <div className={styles.container}>
      <Head>
        <title>xMooney DApp</title>
        <meta name="description" content="xMooney DApp for xMooney Ecosystem" />
        <link rel="icon" href="/xMooney.ico" />
      </Head> 

      <main className={styles.main}>
          <MinerPayout />
      </main>
      <Footer />
    </div>
  )
}