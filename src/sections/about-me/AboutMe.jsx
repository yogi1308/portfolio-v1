import { useRef } from 'react'
import FloatingParticlesBackground from "../../background/ParticleBg"
import styles from './about-me.module.css'
import IntroText from './about-me-components/IntroText'
import Skills from './about-me-components/Skills'

export default function AboutMe() {
    const sectionRef = useRef(null)
  return (
    <div className={`section-margin ${styles.aboutMeSection}`} id="aboutMe" >
        <FloatingParticlesBackground pointerTargetRef={sectionRef} className={`${styles.floatingParticlesBackground}`}/>
        <h2 className={`big-font`}>About Me</h2>
        <div className={`${styles.aboutMeContent} flex-horiz`}>
            <IntroText />
            <Skills />
        </div>
    </div>
  )
}
