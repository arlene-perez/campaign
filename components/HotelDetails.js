import Link from "next/link";
import styles from '../styles/page.module.css';
import Image from 'next/image';

const HOTEL_DETAILS = [
  {
    title: "Best Western Plus St. Christopher Hotel New Orleans",
    imageSrc: "bestWestern.jpeg", 
    href: "https://www.bestwestern.com/en_US/book/hotels-in-new-orleans/best-western-plus-st-christopher-hotel/propertyCode.19095.html", 
    priceText: "Waiting on group rates. This is where the wedding party will be staying at."
  },
  {
    title: "Sheraton New Orleans Hotel",
    imageSrc: "sheraton.jpeg", 
    href: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/", 
    priceText: "Approximately $260 per night including taxes"
  },
  {
    title: "Maison Dupuy Hotel",
    imageSrc: "maisonDupuy.jpeg", 
    href: "https://maisondupuy.com/?gclid=CjwKCAiAlp2fBhBPEiwA2Q10D3U_F2_mjV2fCcW17KHKZvw5NbjAb5p1eJsLpUIdVuzldHZ38Q0PbBoC5ikQAvD_BwE&gclsrc=aw.ds", 
    priceText: "Approximately $235 per night including taxes"
  }
]

const HotelDetails = ({title, imageSrc, href, priceText}) => {
  return (
    <div className={styles.hotelSection}>
      {HOTEL_DETAILS.map((item, index) => {
        return (
          <div className={styles.hotel} key={index}>
            <div className={styles.hotelPrice}>Price: {item.priceText}</div>
            <div className={styles.hotelLink}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </div>
            <div className={styles.weddingImage}>
              <img src={item.imageSrc} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HotelDetails;