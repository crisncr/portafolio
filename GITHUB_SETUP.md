# Guía para Subir a GitHub

Pasos para subir tu portafolio a GitHub y prepararlo para Render.

## 📋 Pasos

### 1. Inicializar Git (si no lo has hecho)

```bash
cd "C:\Users\usuario\Desktop\Nueva carpeta"
git init
```

### 2. Agregar archivos

```bash
git add .
```

### 3. Hacer commit inicial

```bash
git commit -m "Initial commit: Portafolio completo"
```

### 4. Conectar con GitHub

```bash
git remote add origin https://github.com/crisncr/portafolio.git
```

### 5. Subir a GitHub

```bash
git branch -M main
git push -u origin main
```

## ⚠️ Importante

Antes de subir, asegúrate de:

1. **Los archivos están en `frontend/public/`:**
   - Imágenes de proyecto1/
   - Imágenes de proyecto2/
   - PDFs (CV y Certificado)

2. **El archivo `.env` NO se subirá** (está en .gitignore)

3. **Verificar que todo funcione localmente:**
   ```bash
   # Backend
   cd backend
   python main.py
   
   # Frontend (en otra terminal)
   cd frontend
   npm run dev
   ```

## 📝 Después de subir

1. Ve a tu repositorio: https://github.com/crisncr/portafolio
2. Verifica que todos los archivos estén ahí
3. Sigue las instrucciones en `RENDER_SETUP.md` para desplegar el backend

## 🔄 Actualizaciones futuras

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

