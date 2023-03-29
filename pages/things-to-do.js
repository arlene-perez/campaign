import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

import EventItem from "@/components/EventItem";

const items = [
  {
    title: "Jazz BBQ Festival",
    date: "Saturday 10/14 & Sunday 10/15",
    imageSrc: "/event-jazz-bbq.png",
    link: "https://www.jazzandheritage.org/events/crescent-city-blues-bbq-festival/",
    description: "FREE! And near our venue/hotel! Try some of the best bbq and hear the best Jazz bands in NOLA!"
  },
  {
    title: "New Orleans Oktoberfest",
    date: "Friday 10/13 & Saturday 10/14",
    imageSrc: "/event-octoberfest.jpeg",
    link: "https://www.neworleans.com/event/oktoberfest/3202/",
    description: "There is traditional music, German folk dancing, lots of cold beer, German wines and liquors, and delicious German cuisine!"
  },
  {
    title: "Black Restaurant Week",
    date: "Friday 10/13 - Sunday 10/22",
    imageSrc: "/event-black-restaurant.png",
    link: "https://blackrestaurantweeks.com/gulfcoast-directory/",
    description: "Celebrate the flavors of African-American, African, and Caribbean cuisine during Black Restaurant Week."
  },
  {
    title: "Cafe Du Monde's Beignets",
    date: "Always open!",
    imageSrc: "/event-beignets.jpeg",
    link: "https://shop.cafedumonde.com/",
    description: "Must try if you're in NOLA! Their beignets are so good!"
  },
  {
    title: "Free Walking Tours",
    date: "Please check the site",
    imageSrc: "/event-tour.jpeg",
    link: "https://freetoursbyfoot.com/new-orleans-tours/",
    description: "French Quarter is very walkable! Feel free to schedule a walking tour to hear NOLA's history, ghost/Voodoo tours or a food tour!"
  },
  {
    title: "Harrah's Casino",
    date: "Always Open",
    imageSrc: "/event-casino.jpeg",
    link: "https://www.caesars.com/harrahs-new-orleans",
    description: "Las Vegas's Harrah's is in New Orleans! It's only a 4 minute walk from the hotel so you can enjoy it all weekend!"
  },
  {
    title: "title",
    date: "date",
    imageSrc: "/event-jazz-bbq.png",
    link: "link",
    description: "description"
  },
  {
    title: "title",
    date: "date",
    imageSrc: "/event-jazz-bbq.png",
    link: "link",
    description: "description"
  },
  {
    title: "title",
    date: "date",
    imageSrc: "/event-jazz-bbq.png",
    link: "link",
    description: "description"
  },
  {
    title: "title",
    date: "date",
    imageSrc: "/event-jazz-bbq.png",
    link: "link",
    description: "description"
  },
  
]
const ThingsToDoPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.thingsToDoPage}>
        <PageTitle title="Things To Do in NOLA"/>
        <div className={styles.thingsToDoInner}>
        {items.map((item, index) => {
          return (
            <EventItem
            {...item}
            />
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default ThingsToDoPage;