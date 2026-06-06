import { useState, useEffect } from 'react'
import logoEsmeralda from '../assets/logo-esmeralda.svg'
import styles from './Nav.module.css'

const NAV_LINKS = ['Servicios', 'Galería', 'Nosotros', 'Contacto']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logoLink}>
        <img src={logoEsmeralda} alt="Espejos Esmeralda" className={styles.logoImg} />
      </a>
      <ul className={styles.links}>
        {NAV_LINKS.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className={styles.link}>
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
