import { useRef } from "react"
import styles from './experience.module.css'
import { experienceContent } from "./experience-section-content.js"
import ExperienceCards from "./experience-components/ExperienceCards"
import ExperienceScrollIndicator from "../../background/ExperienceScrollIndicator"
import FloatingParticlesBackground from "../../background/ParticleBg"

export default function Projects() {
  const sectionRef = useRef(null)
  return (
    <div ref={sectionRef} className={`${styles.experienceSection} section-margin`}>
        <FloatingParticlesBackground pointerTargetRef={sectionRef} className={`${styles.floatingParticlesBackground}`}/>
        <h2 className={`${styles.experienceSectionTitle} big-font`} id="experience">Experience</h2>
        <div className={`${styles.progressAndCardsContainer} `}>
            <div className={`${styles.progressContainer} `}>
                <ExperienceScrollIndicator sectionRef={sectionRef} />
            </div>
            <div className={`${styles.experienceCardsContainer} flex-vert`}>
                {experienceContent.map((experience, index) => (
                  <ExperienceCards key={index} experience={experience} />
                ))}
            </div>
        </div>
    </div>
  )
}
