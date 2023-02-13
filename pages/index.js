import Image from 'next/image';
import styles from '../pages/page.module.css';

import NavBar from '@/components/NavBar.js';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.description}></div>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <div className={styles.homeImage}>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}
