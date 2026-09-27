// All portfolio content lives here so numbers and claims stay consistent
// across sections. Recruiter-only data (the resume URL) lives in
// lib/recruiter.ts instead; never add it here.
import {
  siAxios,
  siClaude,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siMedusa,
  siMongodb,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siReacthookform,
  siReactquery,
  siReacttable,
  siRedux,
  siShadcnui,
  siSocketdotio,
  siStripe,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siVitest,
  siXyflow,
  siZod,
} from "simple-icons"

export type Tech = {
  name: string
  // simple-icons path data; omitted for tools without an icon (e.g. AWS)
  icon?: { path: string; hex: string }
}

const t = (name: string, icon?: { path: string; hex: string }): Tech => ({ name, icon })

// Headline figures. Reused by the stats row, page metadata, share image and
// recruiter card, so change them here only.
type Figure = { value: number; decimals: number; suffix: string }
export const figures = {
  years: { value: 2.5, decimals: 1, suffix: "+" },
  platforms: { value: 6, decimals: 0, suffix: "+" },
} satisfies Record<string, Figure>
export const formatFigure = ({ value, decimals, suffix }: Figure) => `${value.toFixed(decimals)}${suffix}`

const muiVersion = "v8.28.2"

const phone = "+91 8433980976"
const whatsappMessage = "Hi Sibananda, I came across your portfolio and would like to discuss a frontend role."

export const profile = {
  name: "Sibananda Sahu",
  shortName: "Siba",
  role: "Frontend Engineer",
  tagline: "I build complex B2B products in React & TypeScript that people actually enjoy using.",
  summary:
    `${formatFigure(figures.years)} years shipping enterprise frontends: procurement, HRMS, CRM, LMS and vendor platforms. I care about clean architecture, fast interfaces and components other developers like reusing.`,
  location: "Mumbai, India",
  email: "sahusiba485@gmail.com",
  phone,
  whatsappUrl: `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`,
  // Shown as the "open to work" badge in the hero. Set to null to hide it.
  availability: "Open to Frontend Engineer roles" as string | null,
  github: "https://github.com/sibananda485",
  linkedin: "https://www.linkedin.com/in/sibananda485",
  // Shown only on the public page, never on /recruiter.
  instagram: "https://www.instagram.com/sibananda485",
  source: "https://github.com/sibananda485/my-portfolio",
}

export const stats = [
  { ...figures.years, label: "Years building production React" },
  { ...figures.platforms, label: "B2B platforms shipped" },
  { value: 3, decimals: 0, suffix: "", label: "Companies" },
]

export const companies = ["Finseal Software", "Actify Inc.", "Genex Co.", "MUI (open source)"]

export type Experience = {
  role: string
  company: string
  period: string
  current?: boolean
  summary: string
  highlights: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: "Software Developer (Frontend)",
    company: "Finseal Software Pvt Ltd",
    period: "Jan 2025 – Present",
    current: true,
    summary:
      "Leading frontend development of Sourceware, an end-to-end procurement platform: RFQs, bid analysis, purchase orders, invoices, approvals and catalogs.",
    highlights: [
      "Built a drag-and-drop approval workflow builder with React Flow that lets non-technical users design their own approval pipelines.",
      "Own the component architecture, API integration and state management (Redux Toolkit + TanStack Query) across an enterprise-scale codebase.",
      "Set the team's patterns for reusable components, design patterns and performance.",
    ],
    stack: ["React", "TypeScript", "React Flow", "TanStack Query", "Redux Toolkit", "Tailwind", "shadcn/ui", "MUI"],
  },
  {
    role: "Software Developer (Frontend)",
    company: "Actify Inc.",
    period: "Mar 2024 – Dec 2024",
    summary: "Delivered a suite of B2B platforms for enterprise clients in under a year.",
    highlights: [
      `Architected and shipped ${formatFigure(figures.platforms)} platforms: HRMS, CRM, Vendor Portal, LMS, Approval System and Shipping Management.`,
      "Built a reusable React + TypeScript component library shared across every platform.",
      "Implemented dashboards, approval flows and reporting modules that streamlined client operations.",
    ],
    stack: ["React", "TypeScript", "shadcn/ui", "Tailwind", "Redux Toolkit", "TanStack Table"],
  },
  {
    role: "Full-stack Engineer Intern",
    company: "Genex Co. Services",
    period: "Jan 2024 – Mar 2024",
    summary: "Built a custom e-commerce storefront on Medusa.js from Figma designs.",
    highlights: [
      "Built the wishlist, cart and order flows, and integrated the product, cart and order APIs.",
      "Implemented the Stripe payment flow and worked with the backend team on Node.js integrations.",
    ],
    stack: ["Next.js", "TypeScript", "Medusa.js", "Node.js", "Stripe", "Figma"],
  },
]

export const openSource = {
  org: "MUI-X",
  repo: "mui/mui-x",
  pkg: "@mui/x-data-grid-premium",
  version: muiVersion,
  pr: { number: 21931, url: "https://github.com/mui/mui-x/pull/21931" },
  // npm weekly downloads of the package (≈625K in Sep 2026), rounded down
  weeklyDownloads: "600K+",
  title: "Fix clipboard paste inside portals in DataGridPremium",
  problem:
    "Keyboard paste inside a Portal (e.g. a Dialog) injected duplicate hidden inputs into the document and stole focus from the field being edited.",
  outcome:
    "Reproduced the bug, shipped a fix that was merged into the v8.x branch, and got a shoutout in the official release notes.",
  timeline: [
    { label: "Issue reported", detail: "#21891", url: "https://github.com/mui/mui-x/issues/21891" },
    { label: "PR opened & reviewed", detail: "#21931", url: "https://github.com/mui/mui-x/pull/21931" },
    { label: "Merged", detail: "v8.x branch", url: "https://github.com/mui/mui-x/pull/21931" },
    { label: "Released", detail: muiVersion, url: `https://github.com/mui/mui-x/releases/tag/${muiVersion}` },
  ],
}

export type Project = {
  title: string
  kind: string
  description: string
  highlights: string[]
  image: string
  stack: string[]
  live: string
  github: string
}

export const projects: Project[] = [
  {
    title: "EntryEdge",
    kind: "Full-stack job board",
    description:
      "A job board for both sides of hiring: candidates search, compare and apply; recruiters post jobs and manage applicants from a dashboard.",
    highlights: [
      "Real-time chat and notifications over Socket.IO",
      "Advanced search filters, job comparison and resume uploads to S3",
      "Type-safe forms and APIs with React Hook Form, Zod and Prisma",
    ],
    image: "/entryedge.png",
    stack: ["React", "TypeScript", "shadcn/ui", "Redux Toolkit", "Express", "PostgreSQL", "Prisma", "Socket.IO", "AWS S3", "Zod"],
    live: "https://entryedge.vercel.app/",
    github: "https://github.com/sibananda485/entryedge",
  },
  {
    title: "TailShop",
    kind: "E-commerce platform",
    description:
      "A storefront with catalog, cart, authentication and orders, plus an admin dashboard for inventory and user management.",
    highlights: [
      "Admin dashboard for inventory and user management",
      "Cart and order flow backed by a Node/Express REST API",
      "Global state with Redux Toolkit",
    ],
    image: "/tailshop.png",
    stack: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    live: "https://tailshop-ruby.vercel.app/",
    github: "https://github.com/sibananda485/Ecommerce-Tailshop",
  },
]

export const skills = {
  core: [
    t("React", siReact),
    t("TypeScript", siTypescript),
    t("Next.js", siNextdotjs),
    t("Tailwind CSS", siTailwindcss),
    t("TanStack Query", siReactquery),
    t("Redux Toolkit", siRedux),
    t("React Flow", siXyflow),
    t("TanStack Table", siReacttable),
    t("JavaScript", siJavascript),
    t("shadcn/ui", siShadcnui),
    t("MUI", siMui),
    t("MUI X Data Grid", siMui),
    t("React Hook Form", siReacthookform),
  ],
  backend: [
    t("Node.js", siNodedotjs),
    t("Express", siExpress),
    t("PostgreSQL", siPostgresql),
    t("Prisma", siPrisma),
    t("MongoDB", siMongodb),
    t("Socket.IO", siSocketdotio),
    t("Zod", siZod),
    t("Axios", siAxios),
    t("Medusa.js", siMedusa),
  ],
  tooling: [
    t("Git", siGit),
    t("GitHub", siGithub),
    t("GitLab CI/CD", siGitlab),
    t("AWS (S3, EC2, IAM)"),
    t("Figma", siFigma),
    t("Stripe", siStripe),
    t("Claude Code", siClaude),
  ],
  testing: [
    t("Vitest", siVitest),
    t("React Testing Library", siTestinglibrary),
  ],
  practices: [
    "Component library design",
    "React design patterns",
    "Modular architecture",
    "Performance optimisation",
    "REST & WebSocket APIs",
    "Accessible UI",
  ],
}

export const about = {
  paragraphs: [
    "Most of my work turns dense, data-heavy business processes into interfaces that feel calm and fast: procurement, HR, CRM and learning platforms used by enterprise teams every day.",
    `I learn from documentation and source code. That habit is how a paste bug in MUI's Data Grid turned into a merged fix in a package downloaded ${openSource.weeklyDownloads} times a week.`,
  ],
  lookingFor:
    "A product team building ambitious web apps, where I can own complex frontend features end to end and keep raising the bar on quality.",
  principles: [
    { title: "Readable over clever", body: "Code the next developer understands in one pass." },
    { title: "Components as products", body: "Reusable, documented, hard to misuse." },
    { title: "Fast by default", body: "Performance is a feature users feel." },
  ],
}
