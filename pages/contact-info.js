import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.ourStoryPage}>
        <PageTitle title="Contact Information"/>
        <h2>Email: arleneperezforerusd@gmail.com</h2>
        <h2>Instagram: @arleneperezforelrancho</h2>
        {/* <div className={styles.ourStoryImage}>
          <img src="cocoImage.jpg"/>
        </div> */}
    </div>
    </div>
  )
}

export default ContactPage;