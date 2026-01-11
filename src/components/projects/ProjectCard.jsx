import styles from "./ProjectCard.module.css";

function ProjectCard({ title, summary, description, tech, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.accent} />

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
