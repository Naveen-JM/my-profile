import styles from "./Profile.module.css";
import profileImage from "../assets/profile.jpg";

function Profile() {
  return (
    <section className={styles.card}>
      {/* Photo first */}
      <div className={styles.photo}>
        <img src={profileImage} alt="Profile" />
      </div>

      {/* Details next */}
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>murugannaveen745@gmail.com</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Date of Birth</span>
          <span className={styles.value}>29 Nov 2001</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Contact</span>
          <span className={styles.value}>+91 7021317959</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Location</span>
          <span className={styles.value}>Kanyakumari, India</span>
        </div>
      </div>

      {/* Bio remains the same */}
      <p className={styles.bio}>
        I have a strong interest in Computer & Technology and its impact on the
        world.I stay informed about developments in IT and emerging trends.
        Always keen to learn things. I remain curious about science and space,
        eager to follow new discoveries and innovations. Outside of my technical
        interests, I am a sports enthusiast who values the teamwork and
        dedication sports represent, providing a well-rounded balance to my
        pursuits.
      </p>
    </section>
  );
}

export default Profile;
