import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const RsvpPage = () => {
  return (
    <div className={styles.rsvpPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="RSVP Page"/>
      <h2>RSVP Form coming soon!</h2>
    </div>
  )
}

export default RsvpPage;