import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("header");

  const sections = [
    "header",
    "profile",
    "education",
    "experience",
    "skills",
    "projects",
    "certifications",
  ];

  const handleNavClick = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(
        `.${styles.navbar}`
      ).offsetHeight;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close navbar after navigation
    setTimeout(() => {
      const toggler = document.querySelector(".navbar-toggler");
      const navbar = document.getElementById("mainNavbar");

      if (toggler && navbar?.classList.contains("show")) {
        toggler.click();
      }
    }, 300);
  };

  useEffect(() => {
    const navbarHeight = document.querySelector(
      `.${styles.navbar}`
    ).offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${navbarHeight}px 0px 0px 0px`, // offset for sticky navbar
      threshold: 0.5, // 50% of section visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections, styles.navbar]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <a
          className={`${styles.brand} ${
            activeSection === "header" ? styles.linkActive : ""
          }`}
          href="#header"
          onClick={handleNavClick}
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
            {sections.slice(1).map((sectionId) => (
              <li className="nav-item" key={sectionId}>
                <a
                  className={`${styles.link} ${
                    activeSection === sectionId ? styles.linkActive : ""
                  }`}
                  href={`#${sectionId}`}
                  onClick={handleNavClick}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
