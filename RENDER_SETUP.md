# Configuración en Render

Guía paso a paso para desplegar el backend en Render.

## 📋 Pasos

### 1. Crear cuenta en Render
- Ve a [https://render.com](https://render.com)
- Crea una cuenta (puedes usar tu cuenta de GitHub)

### 2. Conectar repositorio
- En el Dashboard, haz clic en **"New +"**
- Selecciona **"Web Service"**
- Conecta tu repositorio de GitHub: `crisncr/portafolio`

### 3. Configurar el servicio

**Configuración básica:**
- **Name**: `portafolio-backend` (o el nombre que prefieras)
- **Environment**: `Python 3`
- **Region**: Elige la más cercana a ti
- **Branch**: `main` (o la rama que uses)

**Build & Deploy:**
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `python main.py`

**Environment Variables:**
- Haz clic en **"Add Environment Variable"**
- Agrega:
  - **Key**: `RESEND_API_KEY`
  - **Value**: Tu API key de Resend (empieza con `re_`)

### 4. Desplegar
- Haz clic en **"Create Web Service"**
- Render comenzará a construir y desplegar tu aplicación
- Espera a que termine (puede tomar 2-5 minutos)

### 5. Obtener la URL
- Una vez desplegado, Render te dará una URL como:
  - `https://portafolio-backend.onrender.com`
- **Copia esta URL**, la necesitarás para el frontend

### 6. Actualizar el frontend

En `frontend/src/services/api.js`, actualiza:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'https://tu-backend.onrender.com'
```

Y crea un archivo `.env.production` en `frontend/`:

```env
VITE_API_URL=https://tu-backend.onrender.com
```

## ⚠️ Notas importantes

- **Plan gratuito**: Render puede poner tu servicio en "sleep" después de 15 minutos de inactividad. La primera petición después del sleep puede tardar ~30 segundos.
- **Variables de entorno**: Nunca subas tu `.env` a GitHub. Usa las variables de entorno de Render.
- **CORS**: El backend ya está configurado para permitir requests desde GitHub Pages.

## 🔍 Verificar que funciona

1. Visita la URL de tu backend: `https://tu-backend.onrender.com`
2. Deberías ver: `{"message":"Portafolio API"}`
3. Prueba: `https://tu-backend.onrender.com/api/projects`
4. Deberías ver la lista de proyectos en JSON

## 🐛 Solución de problemas

**Error al construir:**
- Verifica que `requirements.txt` esté en la raíz de `backend/`
- Revisa los logs de build en Render

**Error 502:**
- Verifica que el comando de inicio sea correcto
- Revisa que el puerto sea 8000 (Render lo detecta automáticamente)

**CORS errors:**
- Verifica que la URL de GitHub Pages esté en `allowed_origins` en `backend/main.py`

