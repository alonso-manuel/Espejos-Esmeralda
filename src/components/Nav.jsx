import { useState, useEffect } from 'react'
import logoEsmeralda from '../assets/logo-esmeralda.svg'
import styles from './Nav.module.css'

const NAV_LINKS = ['Servicios', 'Galería', 'Nosotros', 'Contacto']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logoLink} onClick={() => setOpen(false)}>
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

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
