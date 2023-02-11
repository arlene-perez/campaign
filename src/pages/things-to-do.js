import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const ThingsToDoPage = () => {
  return (
    <div className={styles.ourStoryPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Things To Do in NOLA"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}

export default ThingsToDoPage;