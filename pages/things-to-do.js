import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
const ThingsToDoPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.thingsToDoPage}>
        <PageTitle title="Things To Do in NOLA"/>
        <h2>Details coming soon!</h2>
      </div>
    </div>
  )
}

export default ThingsToDoPage;