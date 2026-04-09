import { FaBuilding, FaUsers, FaChartLine } from "react-icons/fa";

export const clientProjects = [
  {
    title: "Property Listing Platform",
    subtitle: "LOCAL REAL ESTATE AGENCY",
    description:
      "Built a custom property management system with advanced search filters and image galleries",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    results: [
      "Reduced listing upload time by 60% with bulk upload feature",
      "Implemented SEO optimization increasing organic traffic by 40%",
      "Created responsive design supporting mobile",
    ],
    icon: <FaBuilding className="text-4xl text-blue-500" />,
    color: "blue",
  },
  {
    title: "Client Dashboard & Analytics",
    subtitle: "DIGITAL MARKETING AGENCY",
    description:
      "Developed a comprehensive dashboard for tracking marketing campaigns and client metrics",
    tags: ["React", "Express.js", "PostgreSQL", "Chart.js"],
    results: [
      "Automated report generation saving 10+ hours weekly",
      "Real-time analytics integration with multiple marketing platforms",
    ],
    icon: <FaUsers className="text-4xl text-purple-500" />,
    color: "purple",
  },
  {
    title: "Inventory & Sales System",
    subtitle: "SMALL E-COMMERCE STARTUP",
    description:
      "Created an integrated system for managing inventory, orders, and customer relationships",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    results: [
      "Streamlined order processing reducing fulfillment time by 35%",
      "Automated inventory alerts preventing stockouts",
      "Integrated payment gateway with recurring subscription support",
    ],
    icon: <FaChartLine className="text-4xl text-green-500" />,
    color: "green",
  },
];
