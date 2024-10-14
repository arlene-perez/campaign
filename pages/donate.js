import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
// import Image from 'next/image';
import Button from "@/components/Button";

const DonationPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.ourStoryPage}>
        <PageTitle title="Donation Page"/>
          <div className={styles.toDoButton}>
            <Button 
              buttonTitle="Click here for donation link"
              href="https://secure.anedot.com/arlene-perez-for-erusd/donate"
            />
          </div>
    </div>
    </div>
  )
}

export default DonationPage;