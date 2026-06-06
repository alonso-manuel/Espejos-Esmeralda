import { useState } from 'react'
import styles from './Contact.module.css'

const WHATSAPP_NUMBER = '51928414125' // Cambia por tu número sin + ni espacios

const INITIAL_FORM = { nombre: '', telefono: '', mensaje: '' }

export default function Contact() {
  const [form, setForm]   = useState(INITIAL_FORM)
  const [error, setError] = useState('')

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError('Por favor completa nombre y teléfono.')
      return
    }
    setError('')

    const lines = [
      '¡Hola! Quiero agendar una visita técnica.',
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
    ]
    if (form.mensaje.trim()) lines.push(`Detalle: ${form.mensaje}`)

    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>CONVERSEMOS</p>
        <h2 className={styles.title}>Agenda tu visita t&eacute;cnica</h2>
        <p className={styles.subtitle}>
          Cu&eacute;ntanos sobre tu proyecto y te contactamos en menos de 24 horas.
        </p>

        <div className={styles.form}>
          <input
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            name="telefono"
            placeholder="Tel&eacute;fono / WhatsApp"
            value={form.telefono}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="mensaje"
            placeholder="Describe tu proyecto (tipo de espacio, dimensiones, dise&ntilde;o que deseas...)"
            value={form.mensaje}
            onChange={handleChange}
            rows={4}
            className={`${styles.input} ${styles.textarea}`}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={handleSubmit} className={styles.btn}>
            AGENDA TU VISITA T&Eacute;CNICA
          </button>
        </div>

        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📱</span>
            <p className={styles.contactLabel}>WHATSAPP</p>
            <p className={styles.contactValue}>+51 928 414 125</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <p className={styles.contactLabel}>LIMA, PER&Uacute;</p>
            <p className={styles.contactValue}>Atenci&oacute;n a domicilio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
