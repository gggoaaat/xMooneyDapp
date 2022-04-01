import Head from 'next/head'
import styles from '../styles/Home.module.css'
import next from 'next';
import Footer from '../components/footer';
import MinerPayout from '../components/bulk/index';
import { MoralisProvider } from "react-moralis";


export default function Home() {

  // return (
  //   <div className={styles.container}>
  //     <Head>1
  //       <title>xMooney DApp</title>
  //       <meta name="description" content="xMooney DApp for xMooney Ecosystem" />
  //       <link rel="icon" href="/xMooney.ico" />
  //     </Head> 

  //     <main className={styles.main}>
  //         {/* <MinerPayout /> */}
  //     </main>
  //     <Footer />
  //   </div>
  // )

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Moralis IO tutorial</title>
        <meta name="description" content="A basic tutorial of Moralis IO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     xMooney
    </div>
    // <MoralisProvider
    //   appId={process.env.NEXT_PUBLIC_APP_ID}
    //   serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    // >
    //   <div className="h-screen w-screen flex items-center justify-center">
    //     <Head>
    //       <title>Moralis IO tutorial</title>
    //       <meta name="description" content="A basic tutorial of Moralis IO" />
    //       <link rel="icon" href="/favicon.ico" />
    //     </Head>
    //     <button
    //       className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
    //     >
    //       Login using Metamask
    //     </button>
    //   </div>
    // </MoralisProvider>
  );
}