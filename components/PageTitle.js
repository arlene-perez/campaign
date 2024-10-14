import styles from '../styles/page.module.css';

const PageTitle = ({title}) => {
  return (
    <div className={styles.pageTitle}>
      <h2>{title}</h2>
    </div>
  )
}

export default PageTitle;