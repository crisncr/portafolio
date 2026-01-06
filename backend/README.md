# Backend API - Portafolio

API REST desarrollada con FastAPI para el portafolio personal.

## 🚀 Inicio Rápido

### Instalación

```bash
pip install -r requirements.txt
```

### Configuración

Crear archivo `.env` en la raíz de `backend/`:

```env
RESEND_API_KEY=tu_api_key_de_resend
```

### Ejecutar

```bash
python main.py
```

El servidor estará disponible en `http://localhost:8000`

## 📡 Endpoints

### GET `/api/projects`
Obtiene todos los proyectos.

### GET `/api/projects/{project_id}`
Obtiene un proyecto específico por ID.

### GET `/api/skills`
Obtiene las habilidades técnicas organizadas por categorías.

### POST `/api/contact`
Envía un mensaje de contacto por email.

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "mensaje": "Mensaje de contacto"
}
```

## 🌐 Despliegue en Render

1. Conectar repositorio de GitHub
2. Crear nuevo **Web Service**
3. Configurar:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python main.py`
   - **Port**: 8000
4. Agregar variable de entorno:
   - `RESEND_API_KEY`: Tu API key de Resend

## 📦 Dependencias

- `fastapi` - Framework web
- `uvicorn` - Servidor ASGI
- `python-dotenv` - Variables de entorno
- `resend` - Servicio de emails
- `pydantic` - Validación de datos
- `email-validator` - Validación de emails

