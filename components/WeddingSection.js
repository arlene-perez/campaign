import Link from "next/link";

import styles from '../styles/page.module.css';

const WeddingSection = ({key, sectionTitle, title, time, imageSrc, href, mapsImage, directionsLink}) => {
  return (
    <div className={styles.weddingSection}>
      <div className={styles.weddingSectionTitle}>{sectionTitle}</div>
      <div className={styles.weddingTime}>Time: {time}</div>
      <div className={styles.weddingImage}>
        <img src={imageSrc}></img>
      </div>
      <div className={styles.weddingLink}>
        <Link href={href}>
          {title}
        </Link>
      </div>
      <div className={styles.weddingLink}>
        <Link href={directionsLink} target="_blank">
          Directions
        </Link>
      </div>

  
      <div className={styles.weddingMapsImage}><img src={mapsImage}></img></div>
    </div>
  )
}

export default WeddingSection;