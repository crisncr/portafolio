# Portafolio Personal - Cristopher Cuevas

Portafolio web moderno y profesional desarrollado con React y FastAPI, desplegado en GitHub Pages y Render.

## 🚀 Tecnologías

### Frontend
- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **React Router** - Navegación

### Backend
- **FastAPI** - Framework web moderno
- **Python 3.10+** - Lenguaje de programación
- **Uvicorn** - Servidor ASGI
- **Resend** - Servicio de envío de emails

## 📁 Estructura del Proyecto

```
.
├── frontend/              # Aplicación React
│   ├── public/           # Archivos estáticos (imágenes, PDFs)
│   │   ├── proyecto1/   # Imágenes del proyecto 1
│   │   └── proyecto2/    # Imágenes del proyecto 2
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── services/    # Servicios API
│   │   └── styles/      # Estilos globales
│   └── package.json
└── backend/             # API FastAPI
    ├── main.py          # Aplicación principal
    └── requirements.txt # Dependencias Python
```

## 🛠️ Instalación Local

### Prerrequisitos
- Node.js 18+ y npm
- Python 3.10+
- Git

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Backend

```bash
cd backend
pip install -r requirements.txt
```

Crear archivo `.env`:
```env
RESEND_API_KEY=tu_api_key_de_resend
```

Ejecutar:
```bash
python main.py
```

El backend estará disponible en `http://localhost:8000`

## 📝 Características

- ✅ Diseño moderno y responsive
- ✅ Modo oscuro/claro (toggle)
- ✅ Sección Hero con animaciones
- ✅ Sobre Mí con información personal
- ✅ Línea de tiempo de proyectos
- ✅ Galería de proyectos destacados con modal
- ✅ Habilidades técnicas y frameworks
- ✅ Formulario de contacto funcional
- ✅ Integración con Resend para emails
- ✅ Calendly para agendar consultas
- ✅ Descarga de CV y certificados

## 🌐 Despliegue

### Frontend (GitHub Pages)
1. Construir el proyecto: `cd frontend && npm run build`
2. Subir la carpeta `dist` a GitHub Pages
3. Configurar la URL base en `vite.config.js`

### Backend (Render)
1. Conectar repositorio en [Render](https://render.com)
2. Crear nuevo Web Service
3. Configurar:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python main.py`
   - **Environment Variables**: `RESEND_API_KEY`

## 📧 Configuración de Email

El formulario de contacto usa Resend para enviar emails. Configura tu API key en:
- **Local**: Archivo `.env` en `backend/`
- **Producción**: Variables de entorno en Render

## 🔗 Enlaces

- **GitHub**: [https://github.com/crisncr/portafolio](https://github.com/crisncr/portafolio)
- **LinkedIn**: [https://www.linkedin.com/in/cristopher-cuevas-070440242/](https://www.linkedin.com/in/cristopher-cuevas-070440242/)
- **Email**: cuevasn050@gmail.com

## 📄 Licencia

Este proyecto es de uso personal.
