import Image from 'next/image';
import styles from '../pages/page.module.css';

import NavBar from '../components/NavBar.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div className={styles.header}>
        <NavBar/>
      </div>
    </main>
  )
}
