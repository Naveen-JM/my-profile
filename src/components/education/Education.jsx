import styles from "./Education.module.css";

function Education() {
  const education = [
    {
      level: "10th",
      place: "Ryan International School",
      year: "2016 – 2017",
      detail: "ICSE Board – 85% marks",
    },
    {
      level: "12th",
      place: "ABC Matriculation School",
      year: "2018 – 2019",
      detail: "Computer Science",
    },
    {
      level: "Undergraduate",
      place: "XYZ Engineering College",
      year: "2019 – 2023",
      detail: "B.Tech – Computer Science",
    },
  ];

  return (
    <section className={styles.education}>
      <h3 className={styles.heading}>Education</h3>

      <div className={styles.row}>
        {education.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.level}>{item.level}</span>
            <p className={styles.place}>{item.place}</p>
            <p className={styles.year}>{item.year}</p>
            <p className={styles.detail}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
