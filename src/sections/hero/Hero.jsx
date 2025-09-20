import styles from './hero.module.css'
import HeroBG from "./hero-components/HeroBG"

export default function Hero() {
    return(
        <div className={`${styles.heroSection}`} >
            <HeroBG />
        </div>
    )
}