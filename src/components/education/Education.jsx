import styles from "./Education.module.css";

function Education() {
  const education = [
    {
      level: "10th",
      place: "Ryan International School",
      year: "2016 – 2017",
      detail: "ICSE Board ",
    },
    {
      level: "12th",
      place: "Bharati Vidyapeeth High School",
      year: "2018 – 2019",
      detail: "CBSE Board ",
    },
    {
      level: "Bachelor's Degree",
      place: "PSNA College of Engineering and Technology",
      year: "2019 – 2023",
      detail: "B.Tech – Information Technology",
    },
  ];

  return (
    <section id="education" className={styles.education}>
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
