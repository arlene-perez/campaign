import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

const WeddingPartyPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.weddingPartyPage}>
        <PageTitle title="Wedding Party Page"/>
        <h2>Please excuse us as we are getting the party ready!</h2>
    </div>
    </div>
  )
}
export default WeddingPartyPage;