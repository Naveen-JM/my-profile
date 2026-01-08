import styles from "./SkillCard.module.css";

function SkillCard({ name, icon, level }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={name} className={styles.icon} />

      <span className={styles.name}>{name}</span>

      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillCard;
