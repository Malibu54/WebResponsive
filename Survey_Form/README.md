# 📋 Formulario de Encuesta Optimizado

![Web Screenshot](/Survey_Form/asset/image.png)

Un formulario de encuesta moderno, accesible y completamente responsive, optimizado para performance y experiencia de usuario.

![Formulario de Encuesta](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)

## 🚀 Características Principales

### ✨ Diseño y UX
- **Diseño moderno** con efectos glassmorphism y gradientes
- **Animaciones suaves** CSS3 para mejor engagement
- **Totalmente responsive** - móvil, tablet y escritorio
- **Modo oscuro** integrado por defecto
- **Tipografía optimizada** con Google Fonts (Poppins)

### 🔧 Funcionalidad
- **Validación en tiempo real** sin dependencias externas
- **Mensajes de error específicos** y contextuales
- **Autocompletado** para mejor experiencia de usuario
- **Envío simulado** con feedback visual
- **Campos agrupados semánticamente** con fieldsets

### ♿ Accesibilidad (WCAG 2.1)
- **Navegación por teclado** completa
- **Lectores de pantalla** compatibles
- **Roles ARIA** apropiados
- **Contraste de colores** optimizado
- **Soporte para motion-reduced**

### ⚡ Performance
- **CSS integrado** - cero requests externos adicionales
- **Fuentes preloaded** para renderizado rápido
- **Imágenes optimizadas** con lazy loading
- **JavaScript vanilla** - sin dependencias
- **Animaciones GPU-accelerated**

## 🎯 Casos de Uso

- **Encuestas de satisfacción** de productos/servicios
- **Formularios de feedback** para plataformas educativas
- **Recolección de datos** de usuarios
- **Formularios de contacto** avanzados
- **Encuestas de investigación** de mercado

## 🛠️ Instalación y Uso

### Uso Básico
```bash
# Clona o descarga el archivo HTML
# No requiere instalación - funciona directamente en el navegador
```

### Estructura de Archivos
```
formulario-encuesta/
├── index.html          # Archivo principal (todo incluido)
├── README.md           # Documentación
└── assets/            # Opcional: recursos adicionales
    └── screenshots/   # Capturas de pantalla
```

### Implementación
1. **Descarga** el archivo `index.html`
2. **Abre** en cualquier navegador moderno
3. **Personaliza** los estilos o campos según necesites
4. **Integra** con tu backend para procesar los datos

## 🎨 Personalización

### Colores y Temas
```css
:root {
    --color-primary: #fc2882;        /* Color principal */
    --color-background: rgba(27, 27, 50, 0.95);
    --color-input: #ffffff;
    --color-focus: #80bdff;
    --color-error: #dc3545;
    --color-success: #28a745;
}
```

### Fuentes
```css
/* Cambiar la fuente principal */
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### Campos del Formulario
- **Información Personal**: Nombre, Email, Edad
- **Información Profesional**: Rol actual
- **Recomendación**: Radio buttons
- **Características Favoritas**: Select dropdown
- **Mejoras Sugeridas**: Checkboxes múltiples
- **Comentarios**: Textarea expandible

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos
- 📱 **Móviles**: iPhone, Android
- 📟 **Tablets**: iPad, Android tablets
- 💻 **Escritorio**: Windows, macOS, Linux
- 🖥️ **Pantallas grandes**: 4K, ultrawide

## 🔍 SEO y Meta Tags

```html
<meta name="description" content="Formulario de encuesta para mejorar nuestra plataforma">
<meta name="keywords" content="encuesta, formulario, feedback, opinión">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="Formulario de Encuesta">
<meta property="og:description" content="Tu opinión es importante">
```

## 🧪 Testing y Validación

### Validaciones Implementadas
- **Campos requeridos**: Nombre, Email, Edad
- **Formato de email**: Regex validation
- **Rango de edad**: 10-120 años
- **Selección de radio**: Al menos una opción
- **Feedback visual**: Estados de error y éxito

### Tests Recomendados
```javascript
// Test de validación de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.assert(emailRegex.test("test@example.com"), "Email válido");

// Test de rango de edad
const age = 25;
console.assert(age >= 10 && age <= 120, "Edad en rango válido");
```

## 📊 Optimizaciones de Performance

### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1

### Técnicas Aplicadas
- CSS crítico inline
- Preload de recursos importantes
- Lazy loading de imágenes
- Minimización de repaints/reflows

## 🔒 Seguridad

### Frontend
- **Validación cliente**: Sanitización de inputs
- **CSP Headers**: Prevención de XSS (recomendado)
- **HTTPS**: Siempre usar en producción

### Backend (Recomendaciones)
```javascript
// Ejemplo de sanitización en Node.js
const validator = require('validator');

app.post('/submit-survey', (req, res) => {
    const email = validator.isEmail(req.body.email);
    const name = validator.escape(req.body.name);
    // ... más validaciones
});
```

## 🚀 Deployment

### Hosting Estático
- **Netlify**: Arrastra y suelta el HTML
- **Vercel**: Deploy con git integration
- **GitHub Pages**: Hosting gratuito
- **AWS S3**: Para aplicaciones empresariales

### CDN Integration
```html
<!-- Ejemplo con CloudFront -->
<link rel="preconnect" href="https://d1234567890.cloudfront.net">
```

## 📈 Analytics y Tracking

### Google Analytics
```html
<!-- Agregar antes del </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Event Tracking
```javascript
// Trackear envío de formulario
form.addEventListener('submit', function(e) {
    gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'survey_form'
    });
});
```

## 🤝 Contribución

### Cómo Contribuir
1. **Fork** el proyecto
2. **Crea** una rama feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Estándares de Código
- **HTML**: Semántico y válido W3C
- **CSS**: BEM methodology
- **JavaScript**: ES6+ estándar
- **Commits**: Conventional commits

## 🐛 Reporte de Bugs

### Template de Issue
```markdown
**Describe el bug**
Una descripción clara del problema.

**Pasos para reproducir**
1. Ve a '...'
2. Haz clic en '....'
3. Scrollea hasta '....'
4. Ve el error

**Comportamiento esperado**
Lo que esperabas que pasara.

**Screenshots**
Si aplica, agrega screenshots.

**Información adicional:**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

## 📝 Changelog

### [v2.0.0] - 2025-08-08
#### Agregado
- ✨ Validación en tiempo real con JavaScript
- 🎨 Diseño moderno con glassmorphism
- ♿ Mejoras de accesibilidad WCAG 2.1
- 📱 Responsive design completo
- ⚡ Optimizaciones de performance

#### Cambiado
- 🔧 Estructura HTML completamente refactorizada
- 🎯 CSS optimizado con custom properties
- 📋 Agrupación semántica con fieldsets

#### Arreglado
- 🐛 Labels incorrectamente cerrados
- 🔍 IDs duplicados
- 📱 Problemas de responsive en móviles

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [malibu54](https://github.com/malibu54)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/orianasoledad)


---

## 🙏 Reconocimientos

- **freeCodeCamp** por la inspiración del formulario original
- **Google Fonts** por las tipografías
- **Unsplash** por las imágenes de fondo
- **MDN Web Docs** por la documentación de referencia

---

**¡Si este proyecto te fue útil, dale una ⭐ en GitHub!**