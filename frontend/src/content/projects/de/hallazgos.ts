import type { ProjectContent } from "../../types";

export default {
  title: "AURA Hallazgos",
  theme: "light",
  tags: ["react", "fastapi", "python", "postgresql"],
  live: "https://hallazgos.aura.cl",
  description:
    "Aplicación móvil para reportar hallazgos en obra (hallazgos.aura.cl).<br/><br/>Quien detecta una condición registra la foto, el lugar y el riesgo. La app calcula sola el nivel y el plazo de cierre, y el encargado del proceso lo cierra con evidencia. Si no hay señal, el reporte queda en el teléfono y se envía cuando vuelve internet.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto5/hallazgos-1.jpg",
        alt: "Inicio de AURA Hallazgos",
        caption: "Reportar",
        frame: "phone",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto5/hallazgos-2.jpg",
        alt: "Evidencia fotográfica del hallazgo",
        caption: "Evidencia",
        frame: "phone",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto5/hallazgos-3.jpg",
        alt: "Cierre del hallazgo con nivel de riesgo",
        caption: "Cierre",
        frame: "phone",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto5/hallazgos-4.jpg",
        alt: "Ficha del hallazgo",
        caption: "Gestión",
        frame: "phone",
      },
    },
  ],
} as const satisfies ProjectContent;