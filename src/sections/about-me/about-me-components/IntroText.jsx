import styles from '../about-me.module.css'

export default function IntroText() {
    return(
        <div>
            <p className={`medium-font`}>Hey<span className={`${styles.wave} cursor`} >👋</span>, I'm Shreetej Hadge. I'm currently a Computer Science Student at Arizona State University
                in my Sophomore Year. I am highly passionate about building cool software, and learning more about the vast, endless field of Computer Science and Software Engineering. For now, I am deep into
                the world of web dev, while polishing my Java, Python, and C/C++ skills.
                I am also highly interested in Data Science, Data Visualization, Artificial Intelligence, and Embedded Systems.... I'm no expert here, but I'm curious and wish to learn more about them.
            </p>
            <p>
                When I'm not on my computer, I spend my time swimming, watching basketball,
                catching up to the latest shows and movies and reading some manga. My goal is to simply build cool stuff and do cool things<span className={`${styles.cool} cursor`} >😎</span>
            </p>
        </div>
    )
}