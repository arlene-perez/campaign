import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const HoneymoonFundPage = () => {
  return (
    <div className={styles.honeymoonFundPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Honeymoon Fund Page"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}

export default HoneymoonFundPage;