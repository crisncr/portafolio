export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "fastapi"
  | "supabase"
  | "tailwind"
  | "firebase"
  | "netlify"
  | "stitch";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  fastapi: "FastAPI",
  supabase: "Supabase",
  tailwind: "Tailwind CSS",
  firebase: "Firebase",
  netlify: "Netlify",
  stitch: "Stitch"
} as const satisfies Record<TagVariant, string>;
