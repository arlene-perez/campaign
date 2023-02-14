import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

const OurStoryPage = () => {
  return (
    <div className={styles.ourStoryPage}>
      <PageTitle title="Our Story Page"/>
      <h2>Details coming soon!</h2>
      <div className={styles.ourStoryImage}>
        <img src="cocoImage.jpg" />
      </div>
    </div>
  )
}

export default OurStoryPage;