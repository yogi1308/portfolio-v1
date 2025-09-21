import styles from '../hero.module.css'
import {useEffect, useState} from 'react'

export default function Title() {
    const [name, setName] = useState('')
    const [showCursor, setShowCursor] = useState(true)
    
    useEffect(() => {
        const nameContent = 'Shhreetej Hadge';
        let index = 0;
        const intervalId = setInterval(() => {
            setName(prev => prev + nameContent[index]);
            index++;
            if (index === nameContent.length - 1) { // Fixed: was length - 1
                clearInterval(intervalId);
                // Optional: hide cursor after typing is complete
                // setTimeout(() => setShowCursor(false), 2000);
            }
        }, 150);
        return () => clearInterval(intervalId);
    },[])
    
    return(
        <div className={`${styles.title} flex-vert`}>
            <h1 className={`${styles.nameContainer} flex-vert align-center`}> 
                <p className={`big-font-3`}>Hello, I'm</p>
                <div className={`${styles.titleName} big-font`}>
                    {name}
                    {showCursor && <span className={`${styles.cursor}`}></span>}
                </div>
            </h1>
        </div>
    )
}