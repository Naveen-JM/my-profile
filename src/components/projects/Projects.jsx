import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      summary:
        "A web application to manage hospital appointments, doctors, and patients.",
      description:
        "Built a full-stack system focusing on appointment workflows, patient records, and role-based access with secure authentication.",
      tech: ["React", "Django", "JWT", "Postman"],
      link: "https://github.com/Naveen-JM/Hospital_management",
    },
    {
      title: "Personal Portfolio Website",
      summary:
        "A responsive personal portfolio to showcase experience, skills, projects and certifications",
      description:
        "Designed and developed a clean single-page application with modular components, smooth navigation, and consistent styling.",
      tech: ["React", "CSS Modules", "Bootstrap", "Vite"],
      link: "https://github.com/Naveen-JM/my-profile",
    },
    {
      title: "E-Commerce Application",
      summary:
        "A terminal-based e-commerce application for inventory and order management.",
      description:
        "Implemented CRUD operations for products and orders with a focus on backend logic and API-driven workflows.",
      tech: ["Python", "Django", "Postman"],
      link: "https://github.com/Naveen-JM/ECOM__Application",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h3 className={styles.heading}>Projects</h3>

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
