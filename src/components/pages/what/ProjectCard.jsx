import React from 'react'
import './What.css'

const ProjectCard = ({ project }) => {
  return (
    <li key={project.id} className="main_card_container">
      <h4 className="project_title">{project.name}</h4>
      <div className="card_container">
        <p className="project_description" >{project.description}</p>
        {project.link ? (
          <button
            className="project_button"
            onClick={() => window.open(`${project.link}`)}
          >
            <img
              src="/images/link_red_NoBak.png"
              alt="Link"
              className="project_image"
            />
          </button>
        ) : null}
        <p className="project_language">Language: {project.language}</p>
      </div>
    </li>
  )
}

export default ProjectCard
