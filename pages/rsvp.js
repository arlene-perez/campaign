import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

import guests from '../files/numberOfGuests';
import Dropdown from "@/components/Dropdown";

import Form from '@/components/Form';

const RsvpPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.rsvpPage}>
        <PageTitle title="RSVP Page"/>
        <h3 className={styles.rsvpDescription}>Choose your name from the guest list below to populate your total number of guests</h3>
        <div className={styles.dropDownForm}>
        <Dropdown />
        </div>
        <h1>Form to RSVP coming soon!</h1>
        {/* <Form /> */}
      </div>
    </div>
  )
}

export default RsvpPage;