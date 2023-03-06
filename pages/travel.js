import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';


import HotelDetails from "@/components/HotelDetails";
import Button from "@/components/Button";

const TravelPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.travelPage}>
      <h3>***Although most hurricanes occur in late August or early September, we are asking 
          our guests to play it safe. Please always choose the refundable option
          when booking your flight or hotel.***</h3>
        <PageTitle title="Flights"/>
        <h3>We are currently waiting on our requests for group rates for flights from American Airlines and Southwest leaving from LAX. We will update you as soon as we know more details.</h3>
        <PageTitle title="Hotel Accomodations"/>
        <HotelDetails />
        <h3>The prices above are based on a group rate. If interested, please fill out the form below.</h3>
        <div className={styles.weddingSectionButton}>
          <Button 
          buttonTitle="Hotel Form"
          href="https://forms.gle/sw8KYFmL3WREQRKBA"
          />
        </div>
      </div>
    </div>
  )
}

export default TravelPage;