import Image from 'next/image';
import styles from '../styles/page.module.css';
import { Carousel } from '@/components/Carousel';

// import NavBar from '@/components/NavBar.js';

const IMAGE_URLS = ['/image1.jpg','/imageSecond.jpg','/image3.jpg','/image4.jpg','/image5.jpg', '/image6.jpg', '/image7.jpg','/image8.jpg','/image9.jpg','/image11.jpg','/image13.jpg'];

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding 2023</title>
        <meta property="og:title" content="Wedding 2023" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Wedding 2023" key="title" />
      </Head>
      <div className={styles.main}>
        <Carousel slides={IMAGE_URLS}/>
        <div className={styles.homepageSection}>
          <div className={styles.homepageNames}>
          Christian & Arlene
          </div>
          <div className={styles.homepageText}>
          Friday, October 13, 2023
          </div>
          <div className={styles.homepageText}>
          New Orleans, LA
          </div>
        </div>
      </div>
    </div>
  )
}
