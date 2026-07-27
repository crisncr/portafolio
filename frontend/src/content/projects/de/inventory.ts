import type { ProjectContent } from "../../types";

export default {
  title: "Gestión Inventario",
  theme: "dark",
  tags: ["react", "postgresql", "supabase", "fastapi"],
  description:
    "Plataforma integral de gestión web y móvil para la administración de inventario en tiempo real.<br/><br/>Utiliza una arquitectura por capas con un potente backend en FastAPI, integración con inteligencia artificial (Gemini) y una aplicación móvil nativa con escaneo QR para operaciones en terreno.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto2/dashboard.png",
        alt: "Dashboard",
        caption: "Dashboard Principal",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto2/obras.png",
        alt: "Gestión de Obras",
        caption: "Gestión de Obras",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto2/trabajadores.png",
        alt: "Gestión de Trabajadores",
        caption: "Gestión de Trabajadores",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto2/crear equipos.png",
        alt: "Crear Equipos",
        caption: "Crear Equipos",
      },
    }
  ],
} as const satisfies ProjectContent;
