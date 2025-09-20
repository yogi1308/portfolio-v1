import styles from './hero.module.css'
import HeroBG from "./hero-components/HeroBG"
import Title from "./hero-components/Title"

export default function Hero() {
    return(
        <div className={`${styles.heroSection}`} >
            <HeroBG />
            <Title/>
        </div>
    )
}