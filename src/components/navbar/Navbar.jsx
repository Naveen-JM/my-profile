import styles from "./Navbar.module.css";
import { Collapse } from "bootstrap";

function Navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar) {
      const bsCollapse =
        Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand ${styles.brand}`}
          href="#top"
          onClick={closeNavbar}
        >
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
              <a className={styles.link} href="#profile" onClick={closeNavbar}>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#education"
                onClick={closeNavbar}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.link}
                href="#experience"
                onClick={closeNavbar}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.link} href="#skills" onClick={closeNavbar}>
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
