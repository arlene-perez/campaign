import Link from "next/link";

import styles from '../styles/page.module.css';
import Button from '@/components/Button';

const WeddingSection = (item) => {
  const {key, sectionTitle, title, time, imageSrc, href, mapsImage, calendarLink } = item;
  const { directionsLink, address, message, weddingButtonTitle1, weddingButtonTitle2 } = item;
  return (
    <div className={styles.weddingSection}>
      <div className={styles.weddingImage}>
        <img src={imageSrc}></img>
      </div>
      <div className={styles.weddingSectionTitle}>{sectionTitle}</div>
      <div className={styles.weddingTime}>Time: {time}</div>
      <div className={styles.weddingLink}>
        <Link href={href}>
          {title}
        </Link>
      </div>
      <div className={styles.weddingAddress}>{address}</div>
      <div className={styles.weddingSectionButton}>
        <Button 
          buttonTitle={weddingButtonTitle1} 
          href={directionsLink}
        />
      </div>
      <div className={styles.weddingSectionButton}>
        <Button 
          buttonTitle={weddingButtonTitle2} 
          href={calendarLink}
        />
      </div>
      <div className={styles.weddingMessage}>{message}</div>
      {/* <div className={styles.weddingMapsImage}><img src={mapsImage}></img></div> */}
    </div>
  )
}

export default WeddingSection;