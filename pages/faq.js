import PageTitle from "../components/PageTitle";
import styles from '../styles/page.module.css';

const FAQ = [
  {
    question: "What is the wedding attire?",
    answer: "Cocktail Attire but bring comfortable shoes for dancing the night away!"
  },
  {
    question: "Are there any group flight discounts?",
    answer: "We need to wait until 2/17 and will keep you all posted"
  },
  {
    question: "When are you(Arlene/Christian) getting to New Orleans?",
    answer: "We will most likely be arriving Wednesday 10/11 and depart Monday. Some people are coming in Thursday and departing Saturday, feel free to stay as long as you want!"
  },
  {
    question: "Is this an adults only wedding?",
    answer: "We love your children, but due to space restrictions we cannot accommodate guests under age 18 unless they are in our wedding party. So sorry! We appreciate your understanding."
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
]
const QAPage = () => {
  return (
    <div className={styles.faqPage}>
      <PageTitle title="Q & A"/>
      <h2>More questions coming soon!</h2>
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
  )
}

export default QAPage;