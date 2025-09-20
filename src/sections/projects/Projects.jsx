import { useRef } from "react"
import styles from './project.module.css'
import { projectsContent } from "./project-section-content"
import ProjectsCards from "./project-components/Project-cards"
import ProjectScrollIndicator from "./project-components/ProjectScrollIndicator"
import FloatingParticlesBackground from "../../background/ParticleBg"

export default function Projects() {
  const sectionRef = useRef(null)

  return (
    <div ref={sectionRef} className={`${styles.projectSection} section-margin`}>
        <FloatingParticlesBackground className={`${styles.floatingParticlesBackground}`}/>
        <h2 className={`${styles.projectSectionTitle} big-font`}>Projects</h2>
        <div className={`${styles.progressAndCardsContainer} `}>
            <div className={`${styles.progressContainer} `}>
                <ProjectScrollIndicator sectionRef={sectionRef} />
            </div>
            <div className={`${styles.projectCardsContainer} flex-vert`}>
                {projectsContent.map((project, index) => (
                  <ProjectsCards key={index} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}
