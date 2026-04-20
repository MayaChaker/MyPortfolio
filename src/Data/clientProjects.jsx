import { FaBolt, FaGem, FaDatabase } from "react-icons/fa";

export const clientProjects = [
  {
    title: "Subscription & Billing Management App",
    subtitle: "ELECTRICITY SUBSCRIPTIONS SYSTEM",
    description:
      "Built a full-stack web application to manage electricity subscriptions, monthly billing, and generator meter tracking for small-scale operations",
    tags: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "MySQL (with JSON fallback)",
      "JWT Authentication",
    ],
    results: [
      "Automated monthly billing and debt calculation based on user subscriptions and payment history",
      "Implemented month-based data handling for accurate tracking of dues and payments over time",
      "Built flexible data storage with MySQL and JSON fallback to ensure reliability in different environments",
    ],
    icon: <FaBolt className="text-4xl text-blue-500" />,
    color: "blue",
  },
  {
    title: "Online Store & Product Showcase",
    subtitle: "JEWELRY E-COMMERCE WEBSITE",
    description:
      "Developed a modern e-commerce web application for showcasing and selling jewelry products with a focus on user experience and product presentation",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    results: [
      "Enhanced user experience with dynamic product browsing, filtering, and search functionality",
      "Integrated secure payment processing for smooth and reliable transactions",
      "Structured backend APIs to efficiently manage products, orders, and customer data",
    ],
    icon: <FaGem className="text-4xl text-purple-500" />,
    color: "purple",
  },
  {
    title: "Inventory & Product Management API",
    subtitle: "BACKEND API SYSTEM",
    description:
      "Engineered a scalable backend service to handle product operations, authentication, and dynamic data querying",
    tags: ["Node.js", "Express.js", "Sequelize + Raw SQL", "MariaDB", "JWT"],
    results: [
      "Reduced query complexity by implementing dynamic filtering, sorting, and pagination",
      "Secured API access using JWT-based authentication and protected routes",
      "Improved performance by combining Sequelize with optimized raw SQL queries",
    ],
    icon: <FaDatabase className="text-4xl text-green-500" />,
    color: "green",
  },
];
