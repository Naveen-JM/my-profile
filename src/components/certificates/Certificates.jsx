import styles from "./Certificates.module.css";

function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Multi Cloud Architect",
      issuer: "Oracle Cloud Infrastructure",
      year: "2025",
    },
    {
      title: "PCEP™ – Certified Entry-Level Python Programmer",
      issuer: "Python Institute",
      year: "2025",
    },
  ];

  return (
    <section className={styles.certificates} id="certifications">
      <h3 className={styles.heading}>Certifications</h3>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div
            key={cert.title}
            className={styles.item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.accent} />
            <div className={styles.content}>
              <div className={styles.top}>
                <p className={styles.title}>{cert.title}</p>
                <span className={styles.year}>{cert.year}</span>
              </div>
              <p className={styles.issuer}>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
