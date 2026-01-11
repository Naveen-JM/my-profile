import styles from "./Navbar.module.css";

function Navbar() {
  const handleNavClick = () => {
    // Close navbar AFTER anchor navigation
    setTimeout(() => {
      const toggler = document.querySelector(".navbar-toggler");
      const navbar = document.getElementById("mainNavbar");

      if (toggler && navbar?.classList.contains("show")) {
        toggler.click();
      }
    }, 0);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.brand}`} href="#top">
          Naveen Murugan
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav ms-auto ${styles.navList}`}>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#profile"
                onClick={handleNavClick}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#education"
                onClick={handleNavClick}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#experience"
                onClick={handleNavClick}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#skills"
                onClick={handleNavClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#projects"
                onClick={handleNavClick}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
