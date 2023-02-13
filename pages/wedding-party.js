import PageTitle from "../components/PageTitle";
import styles from '../pages/page.module.css';

import NavBar from "@/components/NavBar";

const WeddingPartyPage = () => {
  return (
    <div className={styles.weddingPartyPage}>
      <div className={styles.header}>
        <NavBar/>
      </div>
      <PageTitle title="Wedding Party Page"/>
      <h2>Details coming soon!</h2>
    </div>
  )
}
export default WeddingPartyPage;