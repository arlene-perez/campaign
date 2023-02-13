import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";
import WeddingSection from "@/components/WeddingSection";
import HotelDetails from "@/components/HotelDetails";

const WEDDING_SECTIONS = [
  {
    sectionTitle: "Church Ceremony",
    title: "Our Lady of Guadalupe Church",
    time: "3pm CST",
    imageSrc: "ourLadyOfGuadalupe.jpeg",
    href: "https://judeshrine.com/",
    mapsImage: "churchImage.png",
    directionsLink: "https://www.google.com/maps/dir//our+lady+of+guadalupe+new+orleans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8620a60936dcdfbf:0xba43be32306ba62c?sa=X&ved=2ahUKEwjB8_fslI39AhW5O0QIHewjCp0Q9Rd6BAhxEAQ"
  },
  {
    sectionTitle: "Venue Reception",
    title: "PaddleWheeler Creole Queen Boat",
    time: "5:30pm CST SHARP, boat will leave",
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
            sectionTitle={item.sectionTitle}
            title={item.title}
            time={item.time}
            imageSrc={item.imageSrc}
            href={item.href}
            mapsImage={item.mapsImage}
            directionsLink={item.directionsLink}
          />
        )
      })}
      <div className={styles.weddingSection}>
        <HotelDetails />
      </div>
    </div>
  )
}

const TravelDetailsPage = () => {
  return (
    <div className={styles.travelDetailsPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Wedding Date: Friday October 13, 2023"/>
      {renderWeddingSections()}
    </div>
  )
}
export default TravelDetailsPage;