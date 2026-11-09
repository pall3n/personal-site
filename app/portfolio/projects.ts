export type ProjectMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  image: string;
  meta: string;
  summary: string;
};

export const projects: ProjectMeta[] = [
  {
    slug: "print-evolved",
    title: "Print Evolved",
    shortTitle: "Print Evolved",
    href: "/portfolio/print-evolved/",
    image: "/images/projects/print-evolved/preview.png",
    meta: "Internal production platform · 2024 to 2026",
    summary:
      "Redesigning and rebuilding internal production tools so operators complete workflows in one place.",
  },
  {
    slug: "snackable",
    title: "Snackable",
    shortTitle: "Snackable",
    href: "/portfolio/snackable/",
    image: "/images/projects/snackable/preview.png",
    meta: "MVP product design · Decode · 2023",
    summary:
      "Defined a micro-course product structure and designed creator and learner flows end to end.",
  },
  {
    slug: "podcast-app",
    title: "Podcast App",
    shortTitle: "Podcast App",
    href: "/portfolio/podcast-app/",
    image: "/images/projects/podcast/preview.png",
    meta: "Own product · Design + React Native · 2023",
    summary:
      "Designed listening, discovery and community flows, then built the front end in React Native.",
  },
  {
    slug: "mity",
    title: "Mity V2",
    shortTitle: "Mity V2",
    href: "/portfolio/mity/",
    image: "/images/projects/mity/preview.png",
    meta: "Personal project · Design + full stack · 2022–2023",
    summary:
      "Explored decentralised community product design with creator economics built into the core experience.",
  },
];

export function getOtherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug);
}
