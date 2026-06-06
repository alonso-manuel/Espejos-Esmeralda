import { useState } from 'react'
import styles from './Contact.module.css'

const INITIAL_FORM = { nombre: '', telefono: '', mensaje: '' }

export default function Contact() {
  const [form, setForm]   = useState(INITIAL_FORM)
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState('')

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError('Por favor completa nombre y teléfono.')
      return
    }
    setError('')
    /* 
      Aquí conectas con tu servicio de formularios.
      Opciones: Formspree, EmailJS, WhatsApp API, etc.
      Ejemplo Formspree:
        fetch('https://formspree.io/f/TU_ID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
    */
    setSent(true)
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>CONVERSEMOS</p>
        <h2 className={styles.title}>Solicita tu cotización</h2>
        <p className={styles.subtitle}>
          Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
        </p>

        {sent ? (
          <div className={styles.success}>
            <p className={styles.successTitle}>✦ MENSAJE ENVIADO</p>
            <p className={styles.successMsg}>Nos pondremos en contacto contigo muy pronto.</p>
          </div>
        ) : (
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
              placeholder="Teléfono / WhatsApp"
              value={form.telefono}
              onChange={handleChange}
              className={styles.input}
            />
            <textarea
              name="mensaje"
              placeholder="Describe tu proyecto (tipo de espacio, dimensiones, diseño que deseas...)"
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              className={`${styles.input} ${styles.textarea}`}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button onClick={handleSubmit} className={styles.btn}>
              ENVIAR CONSULTA
            </button>
          </div>
        )}

        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📱</span>
            <p className={styles.contactLabel}>WHATSAPP</p>
            <p className={styles.contactValue}>+51 999 999 999</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <p className={styles.contactLabel}>LIMA, PERÚ</p>
            <p className={styles.contactValue}>Atención a domicilio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
