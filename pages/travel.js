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
        <h3>Unfortunately, we were unable to get discounted group rates for flights leaving from LAX due to it being a popular weekend. We will be flying with Southwest since they provide two free checked bags as well as provide travel credit in case of cancellations.</h3>
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