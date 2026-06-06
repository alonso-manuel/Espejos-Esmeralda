import { useState, useEffect } from 'react'
import styles from './Gallery.module.css'

import foto1 from '../assets/gallery/472232221_122161781012287334_3110217174826553251_n.jpg'
import foto2 from '../assets/gallery/472234441_122161781354287334_4696323396465974242_n.jpg'
import foto3 from '../assets/gallery/472229929_122161781018287334_4069408573877729396_n.jpg'
import foto4 from '../assets/gallery/472691905_122161781456287334_3956540567312488649_n.jpg'
import foto5 from '../assets/gallery/472801343_122136689354386070_8993523445528816593_n.jpg'
import foto6 from '../assets/gallery/472519970_122136689816386070_1832194475987794348_n.jpg'
import foto7 from '../assets/gallery/472878127_122136689510386070_3202292118945001752_n.jpg'

const GALLERY_ITEMS = [
  { label: 'Espejo circular retroiluminado', tag: 'Residencial', img: foto1 },
  { label: 'Mosaico diagonal biselado',      tag: 'Residencial', img: foto2 },
  { label: 'Pared completa enchapada',       tag: 'Comercial',   img: foto3 },
  { label: 'Mosaico rombo comedor clásico', tag: 'Residencial', img: foto4 },
  { label: 'Diseño geométrico custom',       tag: 'Residencial', img: foto5 },
  { label: 'Pared con franjas diagonales',   tag: 'Residencial', img: foto6 },
  { label: 'Mosaico rombo hall principal',   tag: 'Residencial', img: foto7 },
]

function MosaicPlaceholder() {
  return (
    <svg className={styles.placeholder} viewBox="0 0 300 260" aria-hidden="true">
      {Array.from({ length: 6 }, (_, r) =>
        Array.from({ length: 5 }, (_, c) => {
          const cx = c * 60 + 30
          const cy = r * 52 + (c % 2) * 26 + 26
          return (
            <polygon
              key={`${r}-${c}`}
              points={`${cx},${cy - 22} ${cx + 22},${cy} ${cx},${cy + 22} ${cx - 22},${cy}`}
              fill={`rgba(${58 + r * 8},${170 - c * 12},${111 - r * 8},${0.3 + Math.sin(r + c) * 0.2})`}
              stroke="rgba(200,236,216,0.2)"
              strokeWidth="0.5"
            />
          )
        })
      )}
    </svg>
  )
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Cerrar">✕</button>

      <button
        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
        <img src={item.img} alt={item.label} className={styles.lightboxImg} />
        <div className={styles.lightboxCaption}>
          <span className={styles.lightboxTag}>{item.tag.toUpperCase()}</span>
          <p className={styles.lightboxLabel}>{item.label}</p>
        </div>
      </div>

      <button
        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)

  const open  = i => { setActive(i); document.body.style.overflow = 'hidden' }
  const close = ()  => { setActive(null); document.body.style.overflow = '' }
  const prev  = ()  => setActive(i => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
  const next  = ()  => setActive(i => (i + 1) % GALLERY_ITEMS.length)

  return (
    <section id="galería" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>PORTAFOLIO</p>
          <h2 className={styles.title}>Trabajos realizados</h2>
        </div>

        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ background: `linear-gradient(${135 + i * 22}deg, #0a1f14, #1a4a30, #0d2b1c)` }}
              onClick={() => item.img && open(i)}
            >
              {item.img
                ? <img src={item.img} alt={item.label} className={styles.photo} />
                : <MosaicPlaceholder />
              }
              <div className={styles.cardOverlay}>
                <span className={styles.tag}>{item.tag.toUpperCase()}</span>
                <p className={styles.cardLabel}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          item={GALLERY_ITEMS[active]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
