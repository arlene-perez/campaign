import Link from "next/link";
import Image from 'next/image';

import styles from '../styles/page.module.css';

import Button from "@/components/Button";

const EventItem = (item) => {
  const { title, date, imageSrc, link, description } = item;
  return (
    <div className={styles.eventItem}>
      <div className={styles.eventItemTitle}>
      {title}
      </div>
      <div className={styles.eventItemImage}>
      <Image 
        src={imageSrc}
        fill
        alt="event picture"
        className={styles.homepageImage}
      />
      </div>
      <div className={styles.eventItemDate}>
      Date: {date}
      </div>
      <div className={styles.eventItemDescription}>
        Info: {description}
      </div>
      <div className={styles.toDoButton}>
        <Button 
          buttonTitle="Details"
          href={link}
        />
      </div>
    </div>   
  )
}

export default EventItem;