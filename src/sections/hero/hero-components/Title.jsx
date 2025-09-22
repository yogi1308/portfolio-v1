import styles from '../hero.module.css'
import Typewriter from 'typewriter-effect';
export default function Title() {
    
    return(
        <div className={`${styles.title} flex-vert`}>
            <h1 className={`${styles.nameContainer} flex-vert align-center`}> 
                <p className={`${styles.hello} big-font-3`}>Hello, I'm</p>
                <div className={`${styles.titleName} big-font`}>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Shreetej Hadge')
                        .callFunction(() => {})
                        .pauseFor(2500)
                        .start();
                    }}
                    options={{cursor: '', cursorClassName: 'my-custom-cursor'}}
                    />
                </div>
            </h1>
        </div>
    )
}