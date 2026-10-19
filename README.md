# 🎵 Landing Page - Banda / Músico (musico-01)

Template de landing page profesional para bandas, músicos solistas o grupos musicales. Diseño elegante con paleta oscura/dorada estilo "music premium".

## 🚀 Stack Técnico

- **HTML5** semántico
- **Tailwind CSS** (vía CDN)
- **JavaScript Nativo** (vanilla)
- **Google Fonts** (Playfair Display + Inter)

## 📂 Estructura

```
musico-01/
├── index.html                    # Página de inicio
├── pages/
│   ├── sobre-nosotros.html       # Historia + integrantes
│   ├── servicios.html            # Servicios ofrecidos
│   ├── galeria.html              # Galería con lightbox
│   ├── precios.html              # Planes y tarifas
│   ├── contacto.html             # Formulario + mapa + horarios
│   ├── privacidad.html           # Política de privacidad
│   └── terminos.html             # Términos y condiciones
├── assets/
│   ├── css/
│   │   └── styles.css            # Estilos personalizados
│   ├── js/
│   │   ├── data.js               # Datos mockeados
│   │   ├── components.js         # Navbar y Footer reutilizables
│   │   ├── main.js               # Navegación, animaciones, utilidades
│   │   ├── galeria.js            # Renderizado + Lightbox
│   │   └── formulario.js         # Validación de formulario
│   └── img/                      # (vacío - se usan URLs externas)
└── README.md
```

## ✨ Características

### Páginas (9 en total)
- **Inicio** - Hero, próximos eventos, preview de servicios, testimonios, CTA
- **Sobre nosotros** - Timeline de la banda, integrantes, valores
- **Servicios** - 6 servicios con descripción detallada
- **Galería** - 12 imágenes con filtros por categoría + lightbox
- **Precios** - 3 planes con toggle evento/pack anual + FAQ
- **Contacto** - Formulario validado, mapa, horarios, redes sociales
- **Privacidad** - Texto legal completo (RGPD)
- **Términos y condiciones** - Texto legal completo

### Funcionalidades JS
- ✅ Menú hamburguesa móvil
- ✅ Navbar con backdrop blur que cambia al hacer scroll
- ✅ Animaciones reveal con Intersection Observer
- ✅ Validación de formulario en tiempo real
- ✅ Lightbox para galería
- ✅ Filtros en galería
- ✅ Toggle de precios (evento / pack anual)
- ✅ Toast de notificación al enviar formulario
- ✅ Smooth scroll
- ✅ Datos mockeados realistas
- ✅ Componentes reutilizables (navbar/footer vía JS)

### Diseño
- 🎨 Paleta oscura con dorado musical (#d4af37) y rojo profundo
- 📱 100% responsive
- ♿ Accesibilidad básica (aria, focus)
- 🌟 Animaciones suaves y profesionales

## 🛠️ Instalación

1. No requiere instalación de dependencias (Tailwind viene por CDN)
2. Abre `index.html` directamente en tu navegador, o
3. Usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

## 📝 Personalización

### Cambiar datos de la banda
Edita `assets/js/data.js` - objeto `BANDA_DATA`:
- Nombre, eslogan, descripción
- Email, teléfono, dirección
- Horarios de atención
- Redes sociales

### Cambiar paleta de colores
Edita `assets/css/styles.css` - variables CSS:
```css
:root {
  --color-primary: #d4af37;    /* Color principal */
  --color-secondary: #8b0000;  /* Color secundario */
  --color-dark: #0a0a0a;
  --color-darker: #050505;
}
```

### Cambiar imágenes
Todas las imágenes son de Unsplash vía URL. Reemplaza las URLs en:
- `assets/js/data.js` (GALERIA, INTEGRANTES, TESTIMONIOS)
- Hero backgrounds en cada `.html`

## 📞 Datos Mockeados

La banda de ejemplo se llama **"Los Hermanos del Ritmo"**, una banda de Santiago de Chile con 5 integrantes (rock/blues/jazz latino) y más de 15 años de experiencia.

## 📄 Licencia

Template de uso libre para proyectos comerciales y personales.

### Datos de ejemplo para Chile

Los precios están expresados en CLP y son referenciales: $650.000, $1.450.000 y $2.950.000 por evento. El descuento del pack anual es del 15%. El teléfono +56 9 1234 5678, correo y ubicación en Providencia son datos de demostración; reemplázalos por los del negocio antes de publicar. Los datos principales se encuentran en `assets/js/data.js`; los enlaces directos de contacto también están en `pages/contacto.html`.
