import styles from '../pages/page.module.css';

const PageTitle = ({title}) => {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle;