import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
// import Image from 'next/image';
import Button from "@/components/Button";

const EndorsementsPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.endorsementsPage}>
        <PageTitle title="Endorsements"/>
          <div className={styles.endorsementsImageSection}>
            <div className={styles.endorsementsImage}>
              <img src="erft.png"/>
            </div>
            <div className={styles.endorsementsImage}>
              <img src="csea.png"/>
            </div>
            <div className={styles.endorsementsImage}>
              <img src="latinas_lead.jpg"/>
            </div>
          </div>
    </div>
    </div>
  )
}

export default EndorsementsPage;