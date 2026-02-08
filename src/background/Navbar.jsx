import { useEffect, useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isReappearing, setIsReappearing] = useState(false)
  const [isAboveThreshold, setIsAboveThreshold] = useState(true)
  const [isDisappearing, setIsDisappearing] = useState(false)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const minScrollThreshold = window.innerHeight - 50 // 100vh - 50px buffer
      
      if (currentScrollY < minScrollThreshold) {
        // Above 100vh → show navbar at fixed position with document
        setIsAboveThreshold(true)
        setShow(true)
        setIsReappearing(false)
        setLastScrollY(currentScrollY)
        return
      }
      
      // Below 100vh → normal scroll behavior
      setIsAboveThreshold(false)
      
      // When first crossing threshold, smoothly disappear
      if (lastScrollY < minScrollThreshold && currentScrollY >= minScrollThreshold) {
        setIsAboveThreshold(false)
        setIsDisappearing(true)
        setShow(false)
        setIsReappearing(false)
        setLastScrollY(currentScrollY)
        return
      }
      
      if (currentScrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShow(false)
        setIsReappearing(false)
        setIsDisappearing(false)
      } else {
        // scrolling up → show navbar
        if (!show) {
          setIsReappearing(true)
        }
        setShow(true)
        setIsDisappearing(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, show])

  return (
    <div
      className={`${styles.titleButtonContainer} ${
        isAboveThreshold 
          ? styles.fixedPosition
          : isDisappearing
            ? styles.disappearing
            : show 
              ? isReappearing 
                ? styles.reappearing 
                : styles.visible 
              : styles.hidden
      } flex-horiz`}
    >
      <div className={styles.dropdown} onMouseLeave={() => setOpen(false)} onMouseEnter={() => setOpen(true)}>
        <div className={styles.titleButton} onClick={() => setOpen(!open)}>
          Navigation <span>{!open ? '▾' : '▴'}</span>
        </div>
        <ul className={`${styles.dropdownContent} ${open ? styles.show : styles.dontshow}`}>
          <li><a href="#aboutMe">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactMe">Contact Me</a></li>
        </ul>
      </div>
      <button>
        <a href="/TechnicalResume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </button>
    </div>
  )
}
