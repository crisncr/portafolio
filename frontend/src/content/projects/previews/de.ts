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
    title: "AURA Hallazgos",
    slug: "hallazgos",
    thumbnail: "/proyecto5/hallazgos-thumb.jpg",
    description: "App móvil para reportar hallazgos en obra",
  },
] as const satisfies ProjectPreview[];
