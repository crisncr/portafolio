import type { ProjectContent } from "../../types";

export default {
  title: "Cargas Familiares Aura",
  theme: "light",
  tags: ["react", "typescript", "appsscript", "firebase"],
  description:
    "Formulario web para incorporar a cada trabajador y sus cargas familiares al seguro complementario de salud.<br/><br/>Un asistente de tres pasos valida el RUT chileno y pide un código enviado al correo antes de abrir o actualizar un registro. Al enviar, genera en el navegador la Declaración de Cargas Familiares en PDF y guarda el registro en Google Sheets con el formato de la aseguradora. El área de Personas entra con su cuenta de Google a un panel donde habilita trabajadores, filtra por obra y vigencia y descarga todas las declaraciones de una vez.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto6/1.png",
        alt: "Primer paso del registro: RUT del trabajador titular",
        caption: "Registro del titular",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto6/2.png",
        alt: "Revisión de la carga familiar y aceptación de términos",
        caption: "Revisión y envío",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto6/3.png",
        alt: "Acceso al panel con cuenta de Google",
        caption: "Acceso al panel",
        contain: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: "/proyecto6/4.png",
        alt: "Inicio del panel con total de registros, cargas y última vigencia",
        caption: "Panel de administración",
        contain: true,
      },
    },
  ],
} as const satisfies ProjectContent;