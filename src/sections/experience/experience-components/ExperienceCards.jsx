import styles from './experience-card.module.css'

export default function ExperienceCards({ experience }) {
    return(
        <div className={`${styles.cardImgAndDetails} flex-horiz align-center`}>
            <div className={`${styles.card} flex-vert`} >
                <div className={`flex-horiz align-end`} >
                    <h3>{experience.role}</h3>
                    <p>{experience.time}</p>
                </div>
                <p class={`italics`} >{experience.where}</p>
                <ul>
                    {experience.experienceDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}