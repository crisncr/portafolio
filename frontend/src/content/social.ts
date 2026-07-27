export const social = [
  { url: "https://mail.google.com/mail/?view=cm&fs=1&to=cuevasn050@gmail.com", name: "mail" },
  { url: "https://github.com/crisncr", name: "github" },
  { url: "https://www.linkedin.com/in/cristopher-cuevas-070440242/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
