import styles from './navbar.module.css'

export default function Navbar() {
    return(
        <div className={`${styles.titleButtonContainer} flex-horiz`}>
            <div className={`${styles.dropdown}`} >
                <div className={`${styles.titleButton}`} >Navigation ▾</div>
                <ul className={`${styles.dropdownContent}`} >
                    <li><a href="#landingPage">Landing Page</a></li>
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contactMe">Contact Me</a></li>
                </ul>
            </div>
            <button><a href="/TechnicalResume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a></button>
            {/* <div className={`${styles.dropdown}`} >
                <div className={`${styles.titleButton}`} >Download CV/Resume ▾ </div>
                <ul className={`${styles.dropdownContent}`} >
                        <li><a href="/TechnicalResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li>Curriculum Vitae (CV)</li>
                </ul>
            </div> */}
        </div>
    )
}