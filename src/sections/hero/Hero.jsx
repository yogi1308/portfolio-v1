import styles from './hero.module.css'
import DotBg from "../../background/DotBg"
import Title from "./hero-components/Title"

export default function Hero() {
    return(
        <div className={`${styles.heroSection}`} id="landingPage" >
            <DotBg />
            <Title/>
        </div>
    )
}