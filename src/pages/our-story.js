import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const OurStoryPage = () => {
  return (
    <div className={styles.ourStoryPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Our Story Page"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}

export default OurStoryPage;