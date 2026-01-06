# Frontend - Portafolio

Aplicación React moderna desarrollada con Vite.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Construcción

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos estáticos para producción.

## 📁 Estructura

```
frontend/
├── public/              # Archivos estáticos
│   ├── proyecto1/      # Imágenes proyecto 1
│   ├── proyecto2/      # Imágenes proyecto 2
│   └── *.pdf          # CV y certificados
├── src/
│   ├── components/     # Componentes React
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Frameworks.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
│   ├── services/       # Servicios API
│   │   └── api.js
│   ├── styles/         # Estilos globales
│   │   └── index.css
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
└── package.json
```

## 🌐 Despliegue en GitHub Pages

1. Construir el proyecto:
   ```bash
   npm run build
   ```

2. Configurar `vite.config.js`:
   ```javascript
   base: '/nombre-del-repositorio/'
   ```

3. Subir la carpeta `dist/` a GitHub Pages

4. Actualizar la URL del API en `src/services/api.js` para producción

## 🎨 Características

- Modo oscuro/claro
- Diseño responsive
- Animaciones con Framer Motion
- Galería de imágenes con modal
- Formulario de contacto
- Integración con Calendly

