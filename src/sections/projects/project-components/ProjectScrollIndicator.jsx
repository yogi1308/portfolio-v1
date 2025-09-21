import { useEffect, useState } from "react"
import styles from "./scroll-indicator.module.css"

export default function ProjectScrollIndicator({ sectionRef }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
  const handleScroll = () => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const total = rect.height - window.innerHeight
    const scrolled = Math.min(Math.max(-rect.top, 0), total)
    const rawProgress = total > 0 ? scrolled / total : 0
    
    // Make scroll bar go slower by reducing the progress rate
    const slowedProgress = Math.pow(rawProgress, 1.2) // Slower progression
    setProgress(slowedProgress)
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll() // run once on mount

  return () => window.removeEventListener("scroll", handleScroll)
}, [sectionRef])

  return (
    <div className={styles.scrollTrack}>
      <div
        className={styles.scrollThumb}
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  )
}
