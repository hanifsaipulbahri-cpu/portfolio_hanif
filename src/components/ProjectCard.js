import { useState, useEffect } from "react";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.image.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [project.image.length]);

  return (
    <div className="project-card">
      <img src={project.image[currentImage]} alt={project.title} />

      <div className="project-content">
        {project.featured && (
          <span className="featured-badge">⭐ Featured</span>
        )}

        <h3>{project.title}</h3>

        <p className="project-year">{project.year}</p>

        <p className="project-description">{project.description}</p>

        <div className="achievement-box">
          <h4>{project.award}</h4>

          <p>{project.competition}</p>
        </div>

        <div className="project-role">
          <strong>Role:</strong> {project.role}
        </div>

        <div className="tech-list">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
