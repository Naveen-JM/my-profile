import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.name}>Naveen Janardhanan Murugan</p>
          <p className={styles.tagline}>
            Software Engineer · Web & Drupal Developer
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Naveen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
