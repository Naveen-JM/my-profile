import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

import webIcon from "../../assets/skills/web-dev.png";
import reactIcon from "../../assets/skills/react.png";
import pythonIcon from "../../assets/skills/python.png";
import drupalIcon from "../../assets/skills/drupal.png";
import phpIcon from "../../assets/skills/php.png";
import acquiaIcon from "../../assets/skills/acquia.png";
import gitIcon from "../../assets/skills/git.png";
import awsIcon from "../../assets/skills/AWS.png";

function Skills() {
  const skills = [
    { name: "Web Development(HTML,CSS & JS)", icon: webIcon, level: 85 },
    { name: "Amazon web services", icon: awsIcon, level: 70 },
    { name: "React", icon: reactIcon, level: 70 },
    { name: "Python & Django", icon: pythonIcon, level: 75 },
    { name: "Drupal", icon: drupalIcon, level: 90 },
    { name: "PHP", icon: phpIcon, level: 75 },
    { name: "Acquia Cloud", icon: acquiaIcon, level: 90 },
    { name: "Git", icon: gitIcon, level: 75 },
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
