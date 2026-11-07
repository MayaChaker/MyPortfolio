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
  availability: "Open to new opportunities. Based in Lebanon, available for remote, hybrid and on-site roles.",
};

// Send a role-specific link to each company: /?role=frontend or /?role=backend
const intro = "Dedicated to my craft, and committed to raising the standard with every project.";
export const roles = {
  fullstack: { title: "Full-stack developer", intro },
  frontend: { title: "Frontend developer", intro },
  backend: { title: "Backend developer", intro },
};

export function getRole(search) {
  const role = new URLSearchParams(search).get("role");
  return role && role in roles ? role : "fullstack";
}
