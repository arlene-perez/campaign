import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';
import Button from "@/components/Button";
import Image from 'next/image';

const RegistryPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.registryPage}>
        <PageTitle title="Registry Page"/>
        {/* <h2>Details coming soon!</h2> */}
        <div className={styles.registryInnerContainer}>
        <div className={styles.registryInnerContainerImage}>
            <Image 
              src="/dark-wedding.jpg"
              fill
              alt="couple picture"
              className={styles.homepageImage}
            />
        </div>
        <div className={styles.registryInnerContainerText}>
          <div className={styles.registryInnerContainerTextDescription}>
          Your presence is enough of a present to us! But for those of you who would like to give a gift, we have put together a wish-list to help you out below by using the link. We are planning on taking our honeymoon to Europe after the wedding and cannot wait to celebrate! If you would prefer to give cash, feel free to use Venmo! We also love any e-gift cards if you would like to purchase one. Thank you again!
          <br></br>
          <br></br>
          Love, 
          <br></br>
          Christian & Arlene
          </div>
        </div>

        </div>
        <div className={styles.registryInnerContainerTwo}>
          <div className={styles.registryInnerContainerText}>
            <div className={styles.registryInnerContainterTextSection}>
              <div className={styles.weddingSectionButton}>
                <Button 
                  buttonTitle="Registry Link"
                  href="https://withjoy.com/arlene-and-christian/registry"
                />
              <br></br>
              <br></br>
              <div>
                Email for e-gift cards: 
                <br></br>
                nolawedding23@gmail.com
              </div>
            </div>
          </div>
          </div>
          <div className={styles.registryInnerContainerImage}>
          <Image 
              src="/venmo.jpeg"
              fill
              alt="couple picture"
              className={styles.homepageImage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistryPage;