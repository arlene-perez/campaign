import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

const FAQ = [
  {
    question: "The reception is on a boat but I get seasick, will that be an issue?",
    answer: "Although it's a boat, it's more of a steamboat. Think the steamboat at Disneyland! It moves so slow and will be traveling along the Mississippi River that you may not even feel it so seasickness will be very minimal if any!"
  },
  {
    question: "What is the wedding attire?",
    answer: "Cocktail Attire but bring comfortable shoes for dancing the night away! Please do not wear white."
  },
  {
    question: "Are there any group flight discounts?",
    answer: "Currently we were not able to provide any discounts due to it being a busy weekend. We will be traveling with Southwest since you get two free checked bags and can get travel credit if you need to cancel."
  },
  {
    question: "When are you(Arlene/Christian) getting to New Orleans?",
    answer: "We will be arriving Wednesday 10/11 and departing Monday! Some people are coming in Thursday and departing Saturday, feel free to stay as long as you want!"
  },
  {
    question: "Is this an adults only wedding?",
    answer: "We love your children, but due to space restrictions we cannot accommodate kids unless they are in our wedding party. So sorry!"
  },
  {
    question: "Which hotel are you staying at?",
    answer: "We will be staying at the Best Western in New Orleans"
  },
  {
    question: "Is the church far from the venue?",
    answer: "Nope! It's only an 8min Uber ride or a 20minute walk."
  },
  {
    question: "Where should I stay?",
    answer: "Anywhere in French Quarter is ideal! If you can find a hotel on Canal Street such as the Sheraton or the Best Western, it's a busy street."
  },
  {
    question: "How many guests are included in my invite?",
    answer: "You should have received a text from Christian/Arlene with your guest count. If you did not, please reach out to one of us!"
  },
]
const QAPage = () => {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.faqPage}>
      <PageTitle title="Q & A"/>
      <div className={styles.faqSection}>
        {FAQ.map((item, index) => {
          return (
            <div className={styles.questionSection} key={index}>
              <div className={styles.question}>{item.question}</div>
              <div>{item.answer}</div>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default QAPage;