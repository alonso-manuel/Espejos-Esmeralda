import { useRef } from 'react'
import { useMirrorCanvas } from '../hooks/useMirrorCanvas'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)
  useMirrorCanvas(canvasRef)

  return (
    <>
      <canvas ref={canvasRef} id="mirror-canvas" aria-hidden="true" />

      <section className={styles.hero}>
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <p className={styles.eyebrow}>DISEÑO · INSTALACIÓN · ELEGANCIA</p>

          <h1 className={styles.titleMain}>ESPEJOS</h1>
          <h1 className={styles.titleSub}>ESMERALDA</h1>

          <div className={styles.divider} aria-hidden="true">
            <div className={styles.dividerLine} />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <polygon points="9,0 18,9 9,18 0,9" fill="#2a7a4f" opacity="0.9" />
              <polygon points="9,3 15,9 9,15 3,9" fill="#3aaa6f" opacity="0.6" />
            </svg>
            <div className={styles.dividerLine} />
          </div>

          <p className={styles.subtitle}>
            Transformamos tus espacios con espejos enchapados a medida.<br />
            Precisión artesanal, reflejo perfecto.
          </p>

          <div className={styles.ctas}>
            <a href="#contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
              SOLICITAR COTIZACIÓN
            </a>
            <a href="#galería" className={`${styles.btn} ${styles.btnOutline}`}>
              VER TRABAJOS
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          <span className={styles.scrollLabel}>SCROLL</span>
          <div className={styles.scrollLine} />
        </div>
      </section>
    </>
  )
}
