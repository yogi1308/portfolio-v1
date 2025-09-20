import styles from './project.module.css'
import {projectsContent} from "./project-section-content"
import ProjectsCards from "./project-components/Project-cards"

export default function Projects() {
    return(
        <div class={`${styles.projectSection} section-margin`} >
            <div class="progress-container">
                <div class={`${styles.progressBar}`} id="myBar"></div>
            </div>
            <div>
                <h2 class={` section-header`} >Experience</h2>
                {projectsContent.map((project, index) => (
                    <ProjectsCards key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}