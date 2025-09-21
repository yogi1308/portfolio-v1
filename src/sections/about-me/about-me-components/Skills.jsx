import styles from "./skills.module.css";
import {skills} from "./skillsList"

export default function SkillsBento() {
  return (
    <section className={styles.skillsSection} aria-labelledby="skills-title">

      <div className={styles.bentoGrid} role="list">
        {skills.map((skill, i) => {
          return (
            <div key={i} className={`${styles.bentoSection} ${styles[skill.vertSpan]} ${styles[skill.horizSpan]} flex-vert`} >
                <img src={skill.logo} />
              <span className={`${styles.skillText}`}>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
