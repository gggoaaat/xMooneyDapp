import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                //href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                href="https://www.xMooneyToken.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                {' '}
                <span className={styles.logo}>
                    {/* 
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                </span>
            </a>
        </footer>
    )
}
