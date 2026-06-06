# Espejos Esmeralda — Landing Page

Proyecto React + Vite para la landing page de Espejos Esmeralda.

## Estructura del proyecto

```
espejos-esmeralda/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── gallery/          ← Coloca aquí tus fotos (jpg, png, webp)
│   ├── components/
│   │   ├── Nav.jsx            Barra de navegación fija
│   │   ├── Nav.module.css
│   │   ├── Hero.jsx           Sección principal con canvas animado
│   │   ├── Hero.module.css
│   │   ├── Services.jsx       Tarjetas de servicios
│   │   ├── Services.module.css
│   │   ├── Stats.jsx          Números destacados
│   │   ├── Stats.module.css
│   │   ├── Gallery.jsx        Portafolio de trabajos
│   │   ├── Gallery.module.css
│   │   ├── Contact.jsx        Formulario de contacto
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx         Pie de página con redes
│   │   └── Footer.module.css
│   ├── hooks/
│   │   └── useMirrorCanvas.js ← Animación 3D de espejos flotantes
│   ├── styles/
│   │   └── global.css         Variables CSS y estilos base
│   ├── App.jsx                Ensamblado de componentes
│   └── main.jsx               Punto de entrada React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Previsualizar build
npm run preview
```

## Personalización rápida

### Agregar fotos a la galería
1. Copia tus fotos a `src/assets/gallery/`
2. Abre `src/components/Gallery.jsx`
3. Importa cada foto al inicio del archivo:
   ```js
   import foto1 from '../assets/gallery/foto1.jpg'
   ```
4. Reemplaza `img: null` con `img: foto1` en el array `GALLERY_ITEMS`

### Cambiar número de WhatsApp
Abre `src/components/Contact.jsx` y cambia el valor en `.contactValue`.

### Conectar formulario (Formspree - gratis)
1. Crea cuenta en https://formspree.io
2. Crea un formulario y copia tu ID (ej: `xpzgkdqw`)
3. En `Contact.jsx`, descomenta y edita el bloque `fetch`:
   ```js
   fetch('https://formspree.io/f/xpzgkdqw', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(form),
   })
   ```

### Actualizar redes sociales
Abre `src/components/Footer.jsx` y edita el array `SOCIAL_LINKS`.

## Deploy gratuito (recomendado: Netlify)
1. `npm run build` → genera carpeta `dist/`
2. Arrastra la carpeta `dist/` a https://netlify.com/drop
3. Tu sitio queda publicado al instante con URL gratuita
