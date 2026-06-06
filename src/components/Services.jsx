import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '◈',
    title: 'Espejos Enchapados',
    desc: 'Instalación de espejos a medida en cualquier superficie. Acabado impecable con perfiles de aluminio o sin marco.',
  },
  {
    icon: '◇',
    title: 'Mosaicos de Espejo',
    desc: 'Composiciones geométricas con piezas biseladas, creando efectos visuales únicos para paredes y techos.',
  },
  {
    icon: '◆',
    title: 'Espejos para Gimnasios',
    desc: 'Paredes completamente espejadas para estudios de danza, gimnasios y salones de fitness.',
  },
  {
    icon: '◉',
    title: 'Diseño Personalizado',
    desc: 'Asesoría completa desde el diseño hasta la instalación. Adaptamos cada proyecto a tu espacio y visión.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>NUESTROS SERVICIOS</p>
        <h2 className={styles.title}>Lo que hacemos</h2>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title.toUpperCase()}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
