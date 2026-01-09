import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

import webIcon from "../../assets/skills/web-dev.png";
import reactIcon from "../../assets/skills/react.png";
import pythonIcon from "../../assets/skills/python.png";
import drupalIcon from "../../assets/skills/drupal.png";
import phpIcon from "../../assets/skills/php.png";
import acquiaIcon from "../../assets/skills/acquia.png";

function Skills() {
  const skills = [
    { name: "Web Development(HTML,CSS & JS)", icon: webIcon, level: 85 },
    { name: "React", icon: reactIcon, level: 80 },
    { name: "Python", icon: pythonIcon, level: 75 },
    { name: "Drupal", icon: drupalIcon, level: 70 },
    { name: "PHP", icon: phpIcon, level: 65 },
    { name: "Acquia Cloud", icon: acquiaIcon, level: 90 },
  ];

  return (
    <section className={styles.skills}>
      <h3 className={styles.heading}>Skills</h3>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
