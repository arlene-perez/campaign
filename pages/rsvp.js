import {useState} from "react";

import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import guests from '../files/numberOfGuests';
import Dropdown from "@/components/Dropdown";
import Image from 'next/image';

import Form from '@/components/Form';

const RsvpPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const isFormOpen = false;
  const onSubmit = () => {
    setIsFormSubmitted(true);
  }
  return (
    <div className={styles.pageOuter}>
      <div className={styles.rsvpPage}>
        <PageTitle title="RSVP Page"/>
        <h3 className={styles.rsvpDescription}>We closed our RSVP form but if you have any questions, please reach out to Christian/Arlene.<br/><br/>We cannot wait to celebrate with you all!</h3>
        <Image 
        src="/image3.jpg"
        fill
        alt="event picture"
        className={styles.homepageImage}
      />
        {/* {isFormSubmitted ? (
          <h1>Thanks for filling out the form!</h1>
          )
          : 
          (
            <div>
              <h3 className={styles.rsvpDescription}>Please select your name below to RSVP. Your total guest count was sent via email/text. Please feel free to reach out to Christian/Arlene if you have any questions! <br/>We cannot wait to celebrate with you all!</h3>
              <div className={styles.dropDownForm}>
                <Dropdown
                  onSubmit={onSubmit} 
                />
              </div>
            </div>
          )} */}
      </div>
    </div>
  )
}

export default RsvpPage;