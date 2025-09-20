import styles from '../hero.module.css'

export default function Title() {
    return(
        <div className={`${styles.title} flex-vert`} >
            <h1 className={`${styles.nameContainer} flex-vert align-center`}> 
                <p className={`big-font-3`}>Hello, I'm</p>
                <p className={`${styles.titleName} big-font`} > Shreetej </p>
            </h1>
            <div className={`${styles.titleButtonContainer} flex-horiz`}>
                <button className={`${styles.titleButton}`} >View My Work </button>
                <button className={`${styles.titleButton}`} >Contact Me </button>
            </div>
        </div>
    )
}