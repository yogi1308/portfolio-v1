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
                <button className={`${styles.titleButton}`} >About Me </button>
                <button className={`${styles.titleButton}`} >View My Work</button>
                <button className={`${styles.titleButton}`} >Download CV/Resume </button>
                <button className={`${styles.titleButton}`} >Contact Me </button>
            </div>
        </div>
    )
}