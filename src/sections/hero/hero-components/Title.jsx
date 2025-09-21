import styles from '../hero.module.css'
import {useEffect, useState} from 'react'

export default function Title() {
    const [name, setName] = useState('')
    useEffect(() => {
        const nameContent = 'Shhreetej Hadge';
        let index = 0;
        const intervalId = setInterval(() => {
        setName(prev => prev + nameContent[index]);
        ++index;
        if (index === nameContent.length - 1) {
            clearInterval(intervalId);
        }
        }, 150);
        return () => clearInterval(intervalId);
    },[])
    return(
        <div className={`${styles.title} flex-vert`} >
            <h1 className={`${styles.nameContainer} flex-vert align-center`}> 
                <p className={`big-font-3`}>Hello, I'm</p>
                <p className={`${styles.titleName} big-font flex-horiz`} > {name} <div className={`${styles.cursor}`} ></div> </p>
            </h1>
            <div className={`${styles.titleButtonContainer} flex-horiz`}>
                <div>
                    <button className={`${styles.titleButton} dropdown`} >Navigation ▾</button>
                    <div className={`dropdown-content`} >
                        <p>Landing Page</p>
                        <p>About Me</p>
                        <p>Experience</p>
                        <p>Projects</p>
                        <p>Contact Me</p>
                    </div>
                </div>
                <button className={`${styles.titleButton} dropdown`} >Download CV/Resume ▾ </button>
                <div className={`dropdown-content`} >
                        <p>Resume</p>
                        <p>Curriculum Vitae (CV)</p>
                    </div>
            </div>
        </div>
    )
}