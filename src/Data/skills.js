// `focus` puts a group first for ?role=frontend / ?role=backend.
export const capabilities = [
  { title: "Frontend", focus: "frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", focus: "backend", tools: ["Node.js", "Express", "Better Auth, JWT", "Zod"] },
  { title: "Data", focus: "backend", tools: ["PostgreSQL", "MySQL", "Prisma", "Sequelize"] },
  { title: "Testing & tools", tools: ["Jest", "Vitest", "Playwright", "GitHub Actions", "Git"] },
];
