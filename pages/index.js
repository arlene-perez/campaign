import Image from 'next/image';
import styles from '../styles/page.module.css';
import Slideshow  from '@/components/Slideshow.js';

// import NavBar from '@/components/NavBar.js';

const IMAGE_URLS = ['/image1.jpg','/imageSecond.jpg', '/image3.jpg','/image4.jpg','/image5.jpg', '/image6.jpg', '/image7.jpg','/image8.jpg','/image9.jpg','/image11.jpg','/image13.jpg'];
const OPTIONS = { loop: true}

import Head from 'next/head'

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


export default function Home() {
  return (
    <div>
      <Head>
        <title>Arlene Perez for School Board</title>
        <meta property="og:title" content="Arlene Perez for School Board" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Arlene Perez for School Board" key="title" />
      </Head>
      <div className={styles.main}>
      <div className={styles.homepageSection}>
        <div className={styles.homepageImageContainer}>
            <Image 
              src="/main_page_img.png"
              fill
              alt="main picture"
              className={styles.homepageImage}
            />
        </div>
        <div className={styles.homepageText}>
          <h2>What I have accomplished during my four years on the school board:</h2>
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
        {/* <div className={styles.homepageNames}>
          Christian & Arlene
        </div>
        <div className={styles.homepageText}>
          Friday, October 13, 2023
        </div>
        <div className={styles.homepageText}>
          New Orleans, LA
      </div> */}
    </div>
      </div>
    </div>
  )
}

{/* <Slideshow slides={IMAGE_URLS}/> */}

