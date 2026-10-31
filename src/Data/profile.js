export const profile = {
  name: "Maya Chaker",
  firstName: "Maya",
  lastName: "Chaker",
  email: "mayachaker06@gmail.com",
  github: "https://github.com/MayaChaker",
  githubHandle: "MayaChaker",
  linkedin: "https://www.linkedin.com/in/maya-chaker-9025a7387",
  linkedinHandle: "maya-chaker",
  cv: "/Maya-Chaker-CV.pdf",
  photo: "/maya.webp",
  location: "Lebanon · Remote",
};

// Send a role-specific link to each company: /?role=frontend or /?role=backend
const work = "Three live projects, each with its source code and a case study.";
export const roles = {
  fullstack: { title: "Full-stack developer", intro: `React, Next.js, Node.js and SQL. ${work}` },
  frontend: { title: "Frontend developer", intro: `React, Next.js and TypeScript. ${work}` },
  backend: { title: "Backend developer", intro: `Node.js, Express, PostgreSQL and MySQL. ${work}` },
};

export function getRole(search) {
  const role = new URLSearchParams(search).get("role");
  return role && role in roles ? role : "fullstack";
}
