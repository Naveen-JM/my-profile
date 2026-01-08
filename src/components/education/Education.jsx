import styles from "./Education.module.css"

function Education() {
  const education = [
    {
      year: "2019 – 2023",
      title: "Bachelor of Technology",
      place: "XYZ Engineering College",
      detail: "Computer Science and Engineering"
    },
    {
      year: "2018 – 2019",
      title: "Higher Secondary (12th)",
      place: "ABC Matriculation School",
      detail: "Computer Science Stream"
    },
    {
      year: "2016 – 2017",
      title: "Secondary School (10th)",
      place: "ABC Matriculation School",
      detail: "State Board"
    }
  ]

  return (
    <section className={styles.education}>
      <h3 className={styles.heading}>Education</h3>

      <div className={styles.timeline}>
        {education.map((item, index) => (
          <div key={index} className={styles.entry}>
            <span className={styles.dot} />

            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.place}>{item.place}</p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education