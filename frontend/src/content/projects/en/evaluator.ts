import type { ProjectContent } from "../../types";

export default {
  title: "Evaluación Proveedor",
  theme: "light",
  tags: ["html", "css", "javascript", "supabase"],
  description:
    "Aplicación web serverless y liviana enfocada en la evaluación de proveedores.<br/><br/>Diseñada con un enfoque 'frontend-only', utiliza servicios en la nube para gestionar datos y seguridad, permitiendo una operación ágil sin necesidad de servidores tradicionales, ideal para despliegues rápidos y de bajo mantenimiento.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto1/general encuesta.png",
        alt: "Encuestas Generales",
        caption: "Encuestas Generales",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto1/evaluadores.png",
        alt: "Evaluadores",
        caption: "Evaluadores",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto1/proveedores.png",
        alt: "Proveedores",
        caption: "Proveedores",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto1/pdf firmados.png",
        alt: "Reportes en PDF",
        caption: "Reportes generados en PDF",
      },
    }
  ],
} as const satisfies ProjectContent;
