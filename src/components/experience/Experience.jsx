import styles from "./Experience.module.css";
import hexawareLogo from "../../assets/hexaware.png";

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h3 className={styles.heading}>Experience</h3>

      <div className={styles.card}>
        <div className={styles.accent} />

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h4 className={styles.role}>Associate Software Engineer</h4>
              <p className={styles.company}>Hexaware Technologies</p>
            </div>

            <div className={styles.right}>
              <span className={styles.duration}>July 2024 – Present</span>

              <div className={styles.logoWrap}>
                <img
                  src={hexawareLogo}
                  alt="Hexaware Technologies logo"
                  className={styles.logo}
                />
              </div>
            </div>
          </div>

          <p className={styles.summary}>
            SUMMARY : Working on enterprise-scale CMS migration and upgrade
            projects using Drupal and PHP.
          </p>

          <ul className={styles.points}>
            <li>
              Contributed to large-scale platform migration from AWS to Acquia,
              ensuring compatibility and stability across environments.
            </li>
            <li>
              Migrated content and functionality of from WordPress to Drupal,
              focusing on data integrity and performance.
            </li>
            <li>
              Performed Drupal version upgrades from Drupal 9 to Drupal 10,
              addressing deprecated APIs and module compatibility.
            </li>
          </ul>

          <div className={styles.tech}>
            <span>Drupal</span>
            <span>PHP</span>
            <span>Acquia</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
