import styles from './Gallery.module.css'

/*
  Para agregar fotos reales:
  1. Copia tus imágenes a src/assets/gallery/
  2. Importa cada una: import foto1 from '../assets/gallery/foto1.jpg'
  3. Reemplaza el campo `img` de cada item con la variable importada
*/
const GALLERY_ITEMS = [
  { label: 'Sala con mosaico rombo',    tag: 'Residencial', img: null },
  { label: 'Pared completa enchapada',  tag: 'Gimnasio',    img: null },
  { label: 'Techo espejado biselado',   tag: 'Comercial',   img: null },
  { label: 'Diseño geométrico custom',  tag: 'Residencial', img: null },
  { label: 'Studio de danza',           tag: 'Fitness',     img: null },
  { label: 'Lobby empresarial',         tag: 'Corporativo', img: null },
]

function MosaicPlaceholder({ index }) {
  return (
    <svg
      className={styles.placeholder}
      viewBox="0 0 300 260"
      aria-hidden="true"
    >
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

export default function Gallery() {
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
            >
              {item.img
                ? <img src={item.img} alt={item.label} className={styles.photo} />
                : <MosaicPlaceholder index={i} />
              }

              <div className={styles.cardOverlay}>
                <span className={styles.tag}>{item.tag.toUpperCase()}</span>
                <p className={styles.cardLabel}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
