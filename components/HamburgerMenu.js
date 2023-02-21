// import { clsx } from 'clsx';
import styles from '../styles/page.module.css';

const HamburgerMenu = () => {
  return (
    <div className={styles.HamburgerIcon}>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
    </div>
  )
}

export default HamburgerMenu;