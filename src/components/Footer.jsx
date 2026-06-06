import logoEsmeralda   from '../assets/logo-esmeralda.svg'
import logoVitrofusion from '../assets/logo-vitrofusion.svg'
import styles from './Footer.module.css'

const PAGES = [
  {
    logo: logoEsmeralda,
    name: 'Espejos Esmeralda',
    url:  'https://www.facebook.com/Cuadrosedy',
    followers: '1.5K seguidores',
  },
  {
    logo: logoVitrofusion,
    name: 'Vitrofusión Decor',
    url:  'https://www.facebook.com/profile.php?id=61561582107111',
    followers: '300 seguidores',
  },
  /*
    Para agregar el tercer logo:
    1. Copia la imagen a src/assets/logo-tercero.png
    2. Importa: import logoTercero from '../assets/logo-tercero.png'
    3. Agrega un objeto más aquí con los mismos campos
  */
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* Logo principal grande */}
        <div className={styles.brand}>
          <img src={logoEsmeralda} alt="Espejos Esmeralda" className={styles.brandLogo} />
          <p className={styles.brandTagline}>
            Transformamos espacios con elegancia y precisión.
          </p>
        </div>

        {/* Páginas de Facebook */}
        <div className={styles.social}>
          <p className={styles.socialLabel}>NUESTRAS PÁGINAS</p>
          <div className={styles.pages}>
            {PAGES.map((page, i) => (
              <a
                key={i}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pageCard}
              >
                <img src={page.logo} alt={page.name} className={styles.pageLogo} />
                <div className={styles.pageInfo}>
                  <span className={styles.pageName}>{page.name}</span>
                  <span className={styles.pageFollowers}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    {page.followers}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Espejos Esmeralda — Lima, Perú. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
