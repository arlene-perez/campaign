import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const TravelDetailsPage = () => {
  return (
    <div className={styles.travelDetailsPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Travel Details Page"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}
export default TravelDetailsPage;