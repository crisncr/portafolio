from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import uvicorn
import os
from dotenv import load_dotenv
import resend
import urllib.request
import urllib.parse
import json

# Cargar variables de entorno
# Especificar la ruta del archivo .env explícitamente
env_path = os.path.join(os.path.dirname(__file__), '.env')
print(f"🔍 Buscando archivo .env en: {env_path}")
print(f"🔍 ¿Existe el archivo?: {os.path.exists(env_path)}")

# Intentar cargar el archivo .env
result = load_dotenv(dotenv_path=env_path)
print(f"🔍 Resultado de load_dotenv: {result}")

# Leer directamente del archivo para debug
if os.path.exists(env_path):
    with open(env_path, 'r', encoding='utf-8') as f:
        content = f.read()
        print(f"🔍 Contenido del archivo .env (primeros 50 chars): {content[:50]}")

# Configurar Resend
resend.api_key = os.getenv("RESEND_API_KEY")

# Debug: Verificar que la API key se cargó (solo mostrar los primeros caracteres por seguridad)
if resend.api_key:
    print(f"✅ Resend API key cargada correctamente: {resend.api_key[:10]}...")
else:
    print("❌ ERROR: No se pudo cargar RESEND_API_KEY del archivo .env")
    # Intentar leer directamente
    try:
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                if line.startswith('RESEND_API_KEY='):
                    key_value = line.strip().split('=', 1)
                    if len(key_value) == 2:
                        resend.api_key = key_value[1]
                        print(f"✅ API key cargada manualmente: {resend.api_key[:10]}...")
                        break
    except Exception as e:
        print(f"❌ Error al leer archivo manualmente: {e}")

app = FastAPI(title="Portafolio API", version="1.0.0")

# CORS middleware
# CORS: Permitir orígenes para desarrollo y producción
allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://crisncr.github.io",  # GitHub Pages
    "https://crisncr.github.io/portafolio",  # GitHub Pages con subdirectorio
]

# Agregar URLs de Render (backend y frontend)
render_backend_url = os.getenv("RENDER_EXTERNAL_URL")
if render_backend_url:
    allowed_origins.append(render_backend_url)

# Permitir cualquier subdominio de Render para el frontend (usar wildcard)
# FastAPI no soporta wildcards directamente, así que permitimos todos los orígenes en producción
# O puedes agregar manualmente la URL de tu frontend aquí

# En producción, permitir todos los orígenes de Render
# En desarrollo, usar la lista específica
is_production = os.getenv("RENDER") is not None or os.getenv("RENDER_EXTERNAL_URL") is not None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if is_production else allowed_origins,  # Permitir todos en producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ContactMessage(BaseModel):
    nombre: str
    email: EmailStr
    mensaje: str
    cf_turnstile_response: Optional[str] = None

class Project(BaseModel):
    id: int
    nombre: str
    descripcion: str
    fecha: str
    estado: str
    tecnologias: List[str]
    imagenes: List[str]
    caracteristicas: List[str]

# Datos de proyectos
projects_data = [
    {
        "id": 1,
        "nombre": "Gestión Inventario",
        "descripcion": "Plataforma integral de gestión disponible en web y dispositivos móviles para la administración de inventario en tiempo real. Utiliza una arquitectura por capas con un potente backend en FastAPI, integración con inteligencia artificial (Gemini) y una aplicación móvil nativa con escaneo QR para operaciones en terreno.",
        "fecha": "Enero 2026",
        "estado": "Completado",
        "tecnologias": [
            "FastAPI", "React", "React Native", "PostgreSQL", 
            "Supabase", "TypeScript", "Gemini AI", 
            "Tailwind CSS", "Expo", "QR Scanning"
        ],
        "imagenes": [
            "/proyecto2/dashboard.png",
            "/proyecto2/obras.png",
            "/proyecto2/trabajadores.png",
            "/proyecto2/crear equipos.png",
            "/proyecto2/historial trabajadores.png",
            "/proyecto2/grestion inventario dashboard.png",
            "/proyecto2/login.png",
            "/proyecto2/s.png",
            "/proyecto2/tr.png"
        ],
        "caracteristicas": [
            "Arquitectura por capas (Backend, Web, Mobile) altamente escalable",
            "Gestión de inventario en tiempo real con sincronización instantánea",
            "App móvil nativa (iOS/Android) con escaneo de códigos QR",
            "Procesamiento inteligente de datos mediante Google Gemini AI",
            "Base de datos robusta con PostgreSQL y servicios de Supabase",
            "Interfaz web moderna construida con React, Vite y TypeScript",
            "Control de acceso y seguridad integrada mediante Supabase Auth",
            "Operaciones en terreno optimizadas mediante escaneo rápido de productos"
        ]
    },
    {
        "id": 2,
        "nombre": "Evaluación de Proveedor",
        "descripcion": "Aplicación web serverless y liviana enfocada en la evaluación de proveedores. Diseñada con un enfoque 'frontend-only', utiliza servicios en la nube para gestionar datos y seguridad, permitiendo una operación ágil sin necesidad de servidores tradicionales, ideal para despliegues rápidos y de bajo mantenimiento.",
        "fecha": "Diciembre 2025",
        "estado": "Completado",
        "tecnologias": [
            "HTML5", "CSS3", "JavaScript (Vanilla)", 
            "Supabase", "PostgreSQL", "SheetJS (XLSX)", 
            "jsPDF", "Web Crypto API", "SHA-256"
        ],
        "imagenes": [
            "/proyecto1/general encuesta.png",
            "/proyecto1/evaluadores.png",
            "/proyecto1/items.png",
            "/proyecto1/proveedores.png",
            "/proyecto1/eva guardadas.png",
            "/proyecto1/pdf firmados.png",
            "/proyecto1/1.png",
            "/proyecto1/2.png",
            "/proyecto1/3.png",
            "/proyecto1/4.png"
        ],
        "caracteristicas": [
            "Arquitectura Serverless y Frontend-only para máxima rapidez y bajo costo",
            "Gestión integral de proveedores, evaluadores y asignaciones mediante Supabase",
            "Generación dinámica de reportes en PDF y exportación a Excel (XLSX) desde el navegador",
            "Seguridad avanzada con hashing SHA-256 mediante Web Crypto API",
            "Interfaz responsiva construida con CSS moderno (Flexbox y Variables)",
            "Base de datos PostgreSQL sincronizada en tiempo real",
            "Despliegue optimizado para plataformas como Netlify y GitHub Pages",
            "Diseño ligero y eficiente sin dependencias de frameworks externos"
        ]
    },
    {
        "id": 3,
        "nombre": "Sistema Gestión Excedentes Aura",
        "descripcion": "Capa moderna de experiencia de usuario integrada con Oracle JD Edwards (JDE) para el control eficiente de inventario de excedentes. Optimiza la operación diaria mediante una SPA fluida, automatización de reportes PDF y trazabilidad total de materiales, garantizando consistencia de datos entre el frontend y el ERP central.",
        "fecha": "Enero 2026",
        "estado": "Completado",
        "tecnologias": [
            "React", "FastAPI", "Supabase", "TypeScript", 
            "Docker", "JDE Integration", "Tailwind CSS", 
            "jsPDF", "Vite", "Lucide React"
        ],
        "imagenes": [
            "/Proyecto3/Captura de pantalla 2026-01-08 145322.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 150029.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 150308.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 150403.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 150438.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 150459.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 151704.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 151944.png",
            "/Proyecto3/Captura de pantalla 2026-01-08 152042.png"
        ],
        "caracteristicas": [
            "Integración bidireccional con Oracle JD Edwards EnterpriseOne",
            "Gestión de stock de excedentes con trazabilidad en tiempo real",
            "Generación dinámica de boletas y reportes técnicos en PDF",
            "Interfaz SPA moderna construida con React, Vite y TypeScript",
            "Arquitectura robusta con FastAPI, Pydantic y Supabase PostgreSQL",
            "Contenerización con Docker para despliegues consistentes",
            "Seguridad avanzada mediante Supabase Auth y variables de entorno",
            "Automatización de procesos operativos mediante scripts PowerShell"
        ]
    }
]

@app.get("/")
@app.head("/")
async def root():
    return {"message": "Portafolio API"}

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    return projects_data

@app.get("/api/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    project = next((p for p in projects_data if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    return project

@app.post("/api/contact")
async def send_contact(message: ContactMessage):
    try:
        # Verificar que la API key de Resend esté configurada
        if not resend.api_key:
            return {
                "success": False,
                "message": "Error: No se ha configurado la API key de Resend. Por favor, configura RESEND_API_KEY en el archivo .env"
            }
            
        # Validación de Cloudflare Turnstile
        cf_secret = os.getenv("TURNSTILE_SECRET_KEY")
        if cf_secret:
            if not message.cf_turnstile_response:
                return {"success": False, "message": "Por favor, completa el desafío de seguridad (Captcha)."}
                
            verify_url = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
            data = urllib.parse.urlencode({
                'secret': cf_secret,
                'response': message.cf_turnstile_response
            }).encode('utf-8')
            
            req = urllib.request.Request(verify_url, data=data)
            try:
                with urllib.request.urlopen(req) as response:
                    result = json.loads(response.read().decode('utf-8'))
                    if not result.get('success'):
                        return {"success": False, "message": "Fallo en la validación de seguridad (Captcha inválido)."}
            except Exception as e:
                print(f"Error verificando Turnstile: {e}")
                return {"success": False, "message": "Error verificando seguridad del formulario."}
        
        # Resend en modo de prueba solo permite enviar a tu email registrado
        # Cambia esto a tu email de Resend o verifica un dominio para usar cualquier email
        recipient_email = "cristocuevas5@gmail.com"  # Email registrado en Resend
        
        # Crear el cuerpo del mensaje con formato mejorado
        body_html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #7c3aed;">Nuevo mensaje de contacto desde tu portafolio</h2>
                
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #7c3aed;">Información de contacto</h3>
                    <p><strong>Nombre:</strong> {message.nombre}</p>
                    <p><strong>Email:</strong> <a href="mailto:{message.email}">{message.email}</a></p>
                </div>
                
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #7c3aed; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #7c3aed;">Mensaje</h3>
                    <p style="white-space: pre-wrap;">{message.mensaje}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                    <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio.</p>
                    <p>Puedes responder directamente a este correo para contactar a <strong>{message.nombre}</strong>.</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        body_text = f"""Has recibido un nuevo mensaje de contacto desde tu portafolio:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMACIÓN DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre: {message.nombre}
Email: {message.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MENSAJE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{message.mensaje}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
Puedes responder directamente a este correo para contactar a {message.nombre} en {message.email}
"""
        
        # Enviar el correo usando Resend
        # NOTA: Para usar un email personalizado, necesitas verificar tu dominio en Resend
        # Por ahora usamos el email temporal de Resend, pero el Reply-To está configurado
        # con el email de la persona para que puedas responder directamente
        
        # Opción 1: Email temporal de Resend (funciona sin configuración)
        from_email = "Portafolio <onboarding@resend.dev>"
        
        # Opción 2: Si verificas tu dominio en Resend, cambia a:
        # from_email = f"Portafolio Cristopher <contacto@tudominio.com>"
        
        params = {
            "from": from_email,
            "to": [recipient_email],
            "reply_to": [message.email],  # Esto permite responder directamente a la persona
            "subject": f"Nuevo mensaje de contacto de {message.nombre}",
            "html": body_html,
            "text": body_text,
        }
        
        email = resend.Emails.send(params)
        
        return {
            "success": True,
            "message": "Mensaje enviado correctamente. Te contactaré pronto."
        }
    
    except Exception as e:
        print(f"Error al enviar correo: {str(e)}")
        return {
            "success": False,
            "message": f"Error al enviar el mensaje. Por favor, intenta nuevamente más tarde. Error: {str(e)}"
        }

@app.get("/api/skills")
async def get_skills():
    return {
        "frontend": [
            "JavaScript",
            "TypeScript",
            "HTML/CSS",
            "React",
            "React Native",
            "Vue.js",
            "Angular",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "SASS/SCSS",
            "Redux",
            "Material-UI",
            "Svelte"
        ],
        "backend": [
            "Python",
            "Java",
            "JavaScript",
            "PHP",
            "Node.js",
            "FastAPI",
            "Django",
            "Express.js",
            "Spring Boot",
            "Laravel",
            "REST APIs",
            "GraphQL",
            "WebSockets",
            "Socket.io",
            "Microservicios"
        ],
        "especialidades": [
            "SQL",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "WebRTC",
            "Sistemas Embebidos",
            "IoT & Drones",
            "Arduino",
            "Machine Learning",
            "DevOps",
            "Git",
            "Azure DevOps",
            "Agile Scrum",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "AWS",
            "Firebase",
            "JWT",
            "OAuth",
            "API Gateway",
            "Message Queues",
            "RabbitMQ"
        ]
    }

if __name__ == "__main__":
    # Obtener el puerto de la variable de entorno (Render lo proporciona)
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

