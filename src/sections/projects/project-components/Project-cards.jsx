import { useRef } from 'react';
import styles from './project-card.module.css'

export default function ProjectsCards({ project }) {
    const imageWrapperRef = useRef(null);

    const handleMouseMove = (e) => {
        const wrapper = imageWrapperRef.current;
        if (!wrapper) return;

        const rect = wrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * -30;
        const rotateY = (mouseX / rect.width) * 30;
        
        wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        const wrapper = imageWrapperRef.current;
        if (!wrapper) return;
        wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return(
        <div className={`${styles.cardImgAndDetails} flex-horiz align-center`}>
            <div 
                className={styles.imageWrapper}
                ref={imageWrapperRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} (opens in a new tab)`}style={{ width: 'min-content' }}>
                    <img src={project.thumbnail} className={`${styles.projectCardImage} refImage`} />
                </a>
            </div>
            <div className={`${styles.card} flex-vert`} >
                <div className={`flex-horiz align-end`} >
                    <h3>{project.name}</h3>
                    <p>{project.time}</p>
                </div>
                <ul>
                    {project.projectDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}