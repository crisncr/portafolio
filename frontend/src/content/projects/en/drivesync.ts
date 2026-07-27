import type { ProjectContent } from "../../types";

export default {
  title: "DriveSync Aura",
  theme: "dark",
  tags: ["html", "tailwind", "firebase", "netlify", "stitch"],
  description:
    "Portal web para la sincronización de archivos (drivesync.aura.cl).<br/><br/>Desarrollo de la interfaz estática responsiva con soporte para Dark Mode, gestión de sistema de diseño (Design System) con Stitch y backend Serverless mediante Firebase. Alojado y desplegado en Netlify.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto4/drivesync-1.png",
        alt: "DriveSync Aura",
        caption: "Vista Principal",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto4/drivesync-2.png",
        alt: "DriveSync Aura Funcionalidad",
        caption: "Gestión de Archivos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto4/drivesync-3.png",
        alt: "DriveSync Aura",
        caption: "Interfaz y Diseño",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto4/drivesync-4.png",
        alt: "DriveSync Aura",
        caption: "Detalle del Proyecto",
      },
    }
  ],
} as const satisfies ProjectContent;
