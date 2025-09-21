import { useEffect, useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShow(false)
      } else {
        // scrolling up → show navbar
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`${styles.titleButtonContainer} ${show ? styles.visible : styles.hidden} flex-horiz`}
    >
      <div className={styles.dropdown}>
        <div className={styles.titleButton}>Navigation ▾</div>
        <ul className={styles.dropdownContent}>
          <li><a href="#landingPage">Landing Page</a></li>
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
