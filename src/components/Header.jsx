import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const titles = [
  "Software Engineer",
  "Information Technology Graduate",
  "Passionate Technologist",
  "Tech Enthusiast",
  "Lifelong Learner",
];

function Header() {
  const [index, setIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState(styles.fadeIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp(styles.fadeOut);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFadeProp(styles.fadeIn);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Naveen Janardhanan Murugan</h1>
      <p className={`${styles.title} ${fadeProp}`} key={index}>
        {titles[index]}
      </p>
    </header>
  );
}

export default Header;
