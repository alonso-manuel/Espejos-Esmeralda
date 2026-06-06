import styles from './Stats.module.css'

const STATS = [
  { value: '+500', label: 'Proyectos completados' },
  { value: '12',   label: 'Años de experiencia' },
  { value: '100%', label: 'Clientes satisfechos' },
  { value: '24h',  label: 'Respuesta garantizada' },
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.item}>
            <p className={styles.value}>{s.value}</p>
            <p className={styles.label}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
