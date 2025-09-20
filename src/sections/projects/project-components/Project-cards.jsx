import styles from './project-card.module.css'

export default function ProjectsCards({ project }) {
    return(
        <div className={`${styles.card} flex-vert`} >
            <div className={`flex-horiz`} >
                <h3>{project.name}</h3>
                <p>{project.time}</p>
            </div>
            <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} (opens in a new tab)`}
                style={{ width: 'min-content' }}
            >
                View Project
            </a>
            <ul>
                {project.projectDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    )
}