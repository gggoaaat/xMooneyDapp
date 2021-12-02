import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import next from 'next';
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../../components/walletBridge'
import Footer from '../../components/footer';
import React, { useReducer, useState, useEffect } from 'react';

export default function Home() {  
  const bridgeParams = {
    tokenAddress: "0x98631c69602083d04f83934576a53e2a133d482f",
    providerOptions: {
      metamask: {
        id: 'injected',
        name: 'MetaMask',
        type: 'injected',
        check: 'isMetaMask'
      },
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          rpc: {
            56: 'https://bsc-dataseed.binance.org/'
          },
          network: 'binance',
          chainId: 56,
          infuraId: "b830c8484bf841d795848610ff791d5b", // required
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar'
            ]
          }
        }
      }
    }
  };

  let connectDapp = WalletBridge(bridgeParams);

  let currentUseState = connectDapp.getUseStates();
  
  let displayData = true ? connectDapp.getMinerPayout() : "Loading!" //(<ul>{resultData}</ul>)

  return (
    <div className={styles.container}>
      <Head>
        <title>xMooney DApp</title>
        <meta name="description" content="xMooney DApp for xMooney Ecosystem" />
        <link rel="icon" href="/xMooney.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h2 className={styles.title}>
          Welcome to <a href=""> xMooney </a>
        </h2> */}
        <p>Get Your Balance</p>
        <connectDapp.ShowWalletConnect isConnected={currentUseState.isConnected} />
        <connectDapp.ShowSignature isConnected={currentUseState.isConnected} />        
        {displayData}
        <div id="userWalletAddress">
          <p>
            Wallet address: {currentUseState.xmPower.theWallet}
            <br />
            xm Power : {currentUseState.xmPower.theBalance}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}















{/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}