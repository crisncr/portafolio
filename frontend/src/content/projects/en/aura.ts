import type { ProjectContent } from "../../types";

export default {
  title: "Excedentes Aura",
  theme: "dark",
  tags: ["react", "fastapi", "supabase", "python"],
  description:
    "Sistema de Gestión de Excedentes Aura integrado con Oracle JD Edwards.<br/><br/>Capa moderna de experiencia de usuario para el control eficiente de inventario de excedentes. Optimiza la operación diaria mediante una SPA fluida, automatización de reportes PDF y trazabilidad total de materiales.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto3/Captura de pantalla 2026-01-08 145322.png",
        alt: "Dashboard",
        caption: "Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto3/Captura de pantalla 2026-01-08 150029.png",
        alt: "Inventario",
        caption: "Gestión de Inventario",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto3/Captura de pantalla 2026-01-08 150308.png",
        alt: "Trazabilidad",
        caption: "Trazabilidad de Materiales",
      },
    }
  ],
} as const satisfies ProjectContent;
