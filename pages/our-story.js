import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const OurStoryPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.ourStoryPage}>
        <PageTitle title="Our Story Page"/>
        <h2>Please excuse us as we are currently writing our love story...</h2>
        <div className={styles.ourStoryImage}>
          <Image src="cocoImage.jpg" />
        </div>
    </div>
    </div>
  )
}

export default OurStoryPage;