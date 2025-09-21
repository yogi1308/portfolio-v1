import { useRef, useEffect, useState } from "react"
import styles from './project.module.css'
import { projectsContent } from "./project-section-content"
import ProjectsCards from "./project-components/Project-cards"
import ScrollIndicator from "../../background/ScrollIndicator"
import FloatingParticlesBackground from "../../background/ParticleBg"

export default function Projects() {
  const sectionRef = useRef(null)
  const [imgWidth, setWidth] = useState(0)
  useEffect(() => {
    const img = document.querySelector(".refImage")
    if (img) {
      const updateWidth = () => setWidth(img.width)
      updateWidth()
      img.addEventListener("load", updateWidth)
      window.addEventListener("resize", updateWidth)
      return () => {
        img.removeEventListener("load", updateWidth)
        window.removeEventListener("resize", updateWidth)
      }
    }
  }, [])
  return (
    <div ref={sectionRef} className={`${styles.projectSection} section-margin`}>
        <FloatingParticlesBackground pointerTargetRef={sectionRef} className={`${styles.floatingParticlesBackground}`}/>
        <h2 className={`${styles.projectSectionTitle} big-font`} id="projects">Projects</h2>
        <div className={`${styles.progressAndCardsContainer} `}>
            <div className={`${styles.progressContainer} `}>
                <ScrollIndicator sectionRef={sectionRef} />
            </div>
            <div className={`${styles.projectCardsContainer} flex-vert`}>
                {projectsContent.map((project, index) => (
                  <ProjectsCards key={index} project={project} />
                ))}
                <div className={`${styles.projectCardsContainer}`}>
                <a href="https://github.com/yogi1308" target="_blank" rel="noopener noreferrer" >
                  <button className={`${styles.viewMore}`} style={{width: imgWidth}} >View More at Github</button>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}
