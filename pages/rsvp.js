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
        <h3 className={styles.rsvpDescription}>Please select your name below to RSVP. Your total guest count was sent via email/text. Please feel free to reach out to Christian/Arlene if you have any questions! <br/>We cannot wait to celebrate with you all!</h3>
       <div className={styles.dropDownForm}>
        <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default RsvpPage;