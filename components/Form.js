import styles from '../styles/page.module.css';

const Form = () => {
  return (
    <form>
      <div className={styles.formSection}>
        <label>First Name</label>
        <input name="first_name" />
      </div>
      <div className={styles.formSection}>
        <label>Last Name</label>
        <input name="last_name" />
      </div>
      <div className={styles.formSection}>
        <label>Will you be attending?</label>
        <input type="radio" id="attend" name="attend" value="Yes" />
        <input type="radio" id="attend" name="attend" value="No" />
      </div>
      <div className={styles.formSection}>
        <label>From the number listed above, how many guests will be attending?</label>
        <input type="radio" id="attend" name="numberOfGuests" value="Yes" />0
        <input type="radio" id="attend" name="numberOfGuests" value="No" />1
        <input type="radio" id="attend" name="numberOfGuests" value="No" />2
        <input type="radio" id="attend" name="numberOfGuests" value="No" />3
        <input type="radio" id="attend" name="numberOfGuests" value="No" />4
        <input type="radio" id="attend" name="numberOfGuests" value="No" />5
        
      </div>
    </form>
  );
  
};

export default Form;