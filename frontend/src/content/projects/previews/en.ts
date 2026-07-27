import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Gestión Inventario",
    slug: "inventory",
    thumbnail: "/proyecto2/dashboard.png",
    description: "Plataforma de gestión web y móvil",
  },
  {
    title: "Evaluación Proveedor",
    slug: "evaluator",
    thumbnail: "/proyecto1/general encuesta.png",
    description: "Aplicación serverless de evaluación",
  },
  {
    title: "Excedentes Aura",
    slug: "aura",
    thumbnail: "/Proyecto3/Captura de pantalla 2026-01-08 145322.png",
    description: "Sistema SPA integrado con JD Edwards",
  },
  {
    title: "DriveSync Aura",
    slug: "drivesync",
    thumbnail: "/proyecto4/drivesync-1.png",
    description: "Portal web de sincronización de archivos",
  },
] as const satisfies ProjectPreview[];
