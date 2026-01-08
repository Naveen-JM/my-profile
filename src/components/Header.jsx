import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Naveen Janardhanan Murugan</h1>
      <p className={styles.title}>Software Developer</p>
    </header>
  );
}

export default Header;
