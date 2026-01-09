import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const titles = [
  "Supercalifragilisticexpalidicious",
  "Innovative Problem Solver",
  "Passionate Coder",
  "Tech Enthusiast",
  "Lifelong Learner",
];

function Header() {
  const [index, setIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState(styles.fadeIn);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp(styles.fadeOut);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFadeProp(styles.fadeIn);
      }, 500); // match fadeOut duration
    }, 2500); // total time per title

    return () => clearInterval(fadeTimeout);
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
