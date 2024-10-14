import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const dearNeighbor1 = "My name is Arlene Perez and I am currently the El Rancho Unified School Board President. Pico Rivera is home, and I am a proud product of ERUSD schools. As a first generation College student, a former Math teacher and current Software Engineer, I know firsthand what our students, staff and teachers need to succeed in this new 21st century tech world we live in. I am seeking re-election for my seat on the board and I hope with your support, I can continue working hard to ensure students have the best facilities, the best education and an abundance of opportunities."

const dearNeighbor2 = "Education has and will always be a passion of mine because of how ERUSD has impacted my life and my future. It was at Rio Vista Elementary where I first learned to speak English. At Rivera Middle School, was where I learned the love for music through band. And it was at El Rancho High School where I learned everything I needed to know about preparing and applying to college as a first generation college student. Many of my family members either work or attend schools within ERUSD."

const dearNeighbor3 = "After high school, I attended UC Santa Barbara and soon after my college graduation, I began my career in teaching middle school math in Washington DC. These years of teaching are what I use every time when I am at a board meeting or any school event because I will forever understand the hardships teachers encounter. Throughout my entire tenure while on the board, I have always advocated for staff and teachers because I know firsthand what is important when it comes to helping our students succeed."

const dearNeighbor4 = "Currently, I serve as a Software Engineer. It is this passion of STEM that motivated me to always push for more technology courses at the high school. I was part of the group of individuals who initiated the 1st Robotics program at El Rancho. Moreover, because education begins at all ages, I brought forth the Mommy & Me program back to our district to ensure all our little ones are prepared for the future. And through a partnership with the LA Galaxy and the US Soccer Foundation, I was able to lead the project in securing a Mini Pitch Soccer Field at my old elementary school, Rio Vista."

const dearNeighbor5 = "During these last four years, the district has experienced transformative changes, specifically stability with our facility projects coming to completion. My former high school, El Rancho High, will at last complete its stadium and pool project. I am proud to have been part of this team of board members!"

const dearNeighbor6 = "But my work is not done. If re-elected, I hope to continue the success of improving school facilities and strengthening the district budget, prioritize academics through data-driven practices and create opportunities for students to succeed after graduation. This district has made me who I am, and with your support, I hope to give back to the district who has given me everything."

const AboutPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.aboutPage}>
        <PageTitle title="About Arlene"/>
        <div className={styles.aboutImageSection}>
        <div className={styles.aboutImage}>
          <img src="arlene-band.jpeg"/>
        </div>
        <div className={styles.aboutImageRect}>
          <img src="arlene_elem.png"/>
        </div>
        <div className={styles.aboutImage}>
          <img src="arlene_grad.jpeg"/>
        </div>
        </div>
        <div className={styles.aboutPageText}>
          <p>Dear Neighbor,</p>
          <p>{dearNeighbor1}</p>
          <p>{dearNeighbor2}</p>
          <p>{dearNeighbor3}</p>
          <p>{dearNeighbor4}</p>
          <p>{dearNeighbor5}</p>
          <p>{dearNeighbor6}</p>
          <p>Sincerely,</p>
          <p>Arlene Perez</p>
        </div>
    </div>
    </div>
  )
}

export default AboutPage;