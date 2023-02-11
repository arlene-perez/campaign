import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const QAPage = () => {
  return (
    <div className={styles.ourStoryPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Q & A"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}

export default QAPage;