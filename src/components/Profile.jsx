import styles from "./Profile.module.css";
import profileImage from "../assets/profile.jpg";

function Profile() {
  return (
    <section className={styles.card}>
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>murugannaveen745@gmail.com</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Date of Birth</span>
          <span className={styles.value}>29 Nov 2001</span>
        </div>
      </div>
      {/* Bio */}
      <p className={styles.bio}>
        Software developer with a strong interest in building clean, reliable
        web applications. I enjoy working across the stack, learning new
        technologies, and refining user experiences through thoughtful design.
      </p>
      <div className={styles.photo}>
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Profile;
