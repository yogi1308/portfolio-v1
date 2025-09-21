import { useEffect, useState } from "react";
import styles from "./scroll-indicator.module.css";

export default function ExperienceScrollIndicator({ sectionRef }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const sectionBottom = sectionTop + sectionHeight;

      const scrollY = window.scrollY;

      const start = sectionTop - windowHeight;
      const end = sectionBottom;

      const totalScrollable = end - start;
      const progressRaw = (scrollY - start) / totalScrollable;

      const clampedProgress = Math.min(Math.max(progressRaw, 0), 1);
      const slowedProgress = Math.pow(clampedProgress, 1.2);

      setProgress(slowedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <div className={styles.scrollTrack}>
      <div
        className={styles.scrollThumb}
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}
