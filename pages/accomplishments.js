import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const accomplishments10 = "Was a key member in completing the Pool & Stadium Project at El Rancho High School, opening Spring 2025!"
const accomplishments11 = "As a district, we completed the renovations of ALL middle school lockers"
const accomplishments12 = "Instrumental in the facilitation of the new playgrounds at every elementary school site"
const accomplishments13 = "Approved the project for our upcoming Multipurpose rooms across all elementary schools"
const accomplishments1 = "Led the funding to create El Rancho High School’s 1st ever Robotics Team";
const accomplishments2 = "Brought the Rio Vista Mini Pitch via partnership between LA Galaxy, US Soccer Foundation, and the Roldan Family"
const accomplishments3 = "Brought the Mommy & Me Classes back to our district after 10+ years"
const accomplishments4 = "Initiated the El Rancho High School Facilities Committee to bring upgrades and improvements"
const accomplishments5 = "Was a key member in making sure the district prioritized daily academic goals"
const accomplishments6 = "Worked alongside a great team to bring on a new Superintendent, a new HR Director, a new CBO, a new Facilities Director"
const accomplishments7 = "Led the WASTA Social and received $20,000 for ERUSD"
const accomplishments8 = "Brought back Beautification Day to our community where we come together to improve our school facilities"
const accomplishments9 = "Stability!"

const AccomplishmentsPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.accomplishmentsPage}>
        <PageTitle title="Arlene's Accomplishments"/>
        <div className={styles.accomplishmentsImage}>
          <img src="accom7.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="arlene_stadium.JPG"/>
        </div>
        <iframe src="https://www.youtube.com/embed/nRoI3bovyTU?si=X9lzfzB7zrRBTTvN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className={styles.accomplishmentsImage}>
          <img src="accom1.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="accom2.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="accom3.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="accom4.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="accom5.png"/>
        </div>
        <div className={styles.accomplishmentsImage}>
          <img src="accom6.png"/>
        </div>
        <div className={styles.homepageText}>
          <h2>Accomplishment List:</h2>
          <ul className={styles.homepageList}>
          <li>{accomplishments10}</li>
          <li>{accomplishments11}</li>
          <li>{accomplishments12}</li>
          <li>{accomplishments13}</li>
          <li>{accomplishments1}</li>
          <li>{accomplishments2}</li>
          <li>{accomplishments3}</li>
          <li>{accomplishments4}</li>
          <li>{accomplishments5}</li>
          <li>{accomplishments6}</li>
          <li>{accomplishments7}</li>
          <li>{accomplishments8}</li>
          <li>{accomplishments9}</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default AccomplishmentsPage;