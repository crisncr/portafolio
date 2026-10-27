import type { ProjectContent } from "../../types";

export default {
  title: "Monitoreo Sísmico Aura",
  theme: "light",
  tags: ["react", "fastapi", "python", "sqlite"],
  description:
    "Panel para seguir el estado sísmico de los polígonos de la mina El Teniente.<br/><br/>Cada minuto, un servicio en Python lee la tabla del sistema sísmico y guarda la lectura en SQLite. La interfaz en React muestra el resumen del turno, el estado de cada polígono con su frecuencia, magnitud y cota, la tendencia de los últimos 7 días y el historial de lecturas. Si se corta el enlace con la mina, la página sigue disponible con el último respaldo.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto7/1.png",
        alt: "Resumen general de la sismicidad de los polígonos",
        caption: "Resumen general",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto7/2.png",
        alt: "Tarjetas de frecuencia, magnitud y cota por polígono",
        caption: "Monitoreo sísmico",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto7/3.png",
        alt: "Gráfico de frecuencia sísmica de los últimos 7 días",
        caption: "Frecuencia sísmica",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/Proyecto7/4.png",
        alt: "Historial de lecturas guardadas por polígono",
        caption: "Historial",
        contain: true,
      },
    },
  ],
} as const satisfies ProjectContent;
