import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

const RsvpPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.rsvpPage}>
        <PageTitle title="RSVP Page"/>
        <h2>RSVP Form coming soon!</h2>
      </div>
    </div>
  )
}

export default RsvpPage;