import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

import WeddingSection from "@/components/WeddingSection";

const WEDDING_SECTIONS = [
  {
    weddingButtonTitle1: "Directions",
    weddingButtonTitle2: "Add to Calendar",
    message: "",
    address: "411 N Rampart St New Orleans, LA 70112",
    calendarLink: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWUzazhkc2xzZ3BjM2swZ2UyZTU5MHZ1ZXMgbm9sYXdlZGRpbmcyM0Bt&tmsrc=nolawedding23%40gmail.com",
    sectionTitle: "Ceremony",
    title: "Our Lady of Guadalupe Church",
    time: "3:00 pm",
    imageSrc: "ourLadyOfGuadalupe.jpeg",
    href: "https://judeshrine.com/",
    mapsImage: "churchImage.png",
    directionsLink: "https://www.google.com/maps/dir//our+lady+of+guadalupe+new+orleans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8620a60936dcdfbf:0xba43be32306ba62c?sa=X&ved=2ahUKEwjB8_fslI39AhW5O0QIHewjCp0Q9Rd6BAhxEAQ"
  },
  {
    weddingButtonTitle1: "Directions",
    weddingButtonTitle2: "Add to Calendar",
    message: "Please make sure to arrive by 5:30pm to get in line to dock the boat. Unfornately, the boat will leave by 6:30pm.",
    address: "1 Poydras St New Orleans, LA 70130",
    calendarLink: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDlhb3RmOHBtODdpZmhxcnV2aDU5NHJiMHAgbm9sYXdlZGRpbmcyM0Bt&tmsrc=nolawedding23%40gmail.com",
    sectionTitle: "Reception",
    title: "PaddleWheeler Creole Queen Boat",
    time: "5:30pm",
    imageSrc: "paddlewheeler.jpeg",
    href: "https://www.creolequeen.com/photo-gallery",
    mapsImage: "venueImage.png",
    directionsLink: "https://www.google.com/maps/dir//Paddlewheeler+Creole+Queen,+1+Poydras+St,+New+Orleans,+LA+70130/@29.9487072,-90.0972298,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8620a66ce0432797:0xfa2991d7982ef3a8!2m2!1d-90.0622102!2d29.9486375"
  }
]

const renderWeddingSections = () => {
  return (
    <div className={styles.wedding}>
      {WEDDING_SECTIONS.map((item, index) => {
        return (
          <WeddingSection
            key={index}
            {...item}
          />
        )
      })}
    </div>
  )
}

const SchedulePage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.schedulePage}>
          <div className={styles.weddingDate}>Friday October 13, 2023</div>
          {renderWeddingSections()}
      </div>
    </div>
  )
}
export default SchedulePage;