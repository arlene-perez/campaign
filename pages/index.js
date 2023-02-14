import Image from 'next/image';
import styles from '../styles/page.module.css';
import { Carousel } from '@/components/Carousel';

// import NavBar from '@/components/NavBar.js';

const IMAGE_URLS = ['headerImage.jpg','image2.jpg','image3.jpg'];

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
      </div>
    </div>
  )
}
