import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.ourStoryPage}>
        <PageTitle title="Contact Information"/>
        <h3>Email: arleneperezforerusd@gmail.com</h3>
        <h3>Instagram: @arleneperezforelrancho</h3>
        {/* <div className={styles.ourStoryImage}>
          <img src="cocoImage.jpg"/>
        </div> */}
    </div>
    </div>
  )
}

export default ContactPage;