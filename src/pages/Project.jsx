import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaBuilding,
  FaUser,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedis,
  SiJavascript,
  SiKubernetes,
} from "react-icons/si";

const Project = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      type: "professional",
      title: "US Top Pharmacy Company ",
      company: "Tata Consultancy Services (TCS)",
      role: "Fullstack Developer",
      duration: "Jan 2025 – Present",
      location: "Noida",
      description:
        "Developed and deployed scalable fullstack features for enterprise clients using modern web technologies and cloud infrastructure.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      achievements: [
        {
          icon: "🚀",
          title: "Performance Optimization",
          detail:
            "Improved API performance by 35% using Redis caching and optimized Mongoose queries",
        },
        {
          icon: "🔐",
          title: "Authentication System",
          detail:
            "Implemented JWT-based authentication and secure session handling for over 1,000+ users",
        },
        {
          icon: "☁️",
          title: "Cloud Deployment",
          detail:
            "Deployed containerized microservices on OpenShift through automated CI/CD pipelines",
        },
        {
          icon: "✅",
          title: "Quality Assurance",
          detail:
            "Maintained 95% feature test coverage while ensuring timely sprint delivery",
        },
      ],
      techStack: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      ],
      responsibilities: [
        "Designed and consumed RESTful APIs, integrating them with React components for seamless data flow",
        "made onboarding and offboarding modules for users with secure authentication",
        "Applied React Query and Context API for efficient state management and data fetching",
        "Integrated Cloudinary for image management and used Axios for high-performance API calls",
        "Collaborated within Agile teams, ensuring timely sprint delivery",
      ],
    },
    {
      id: 2,
      type: "professional",
      title: "Danfoss Billing & Parts Management System",
      company: "Tata Consultancy Services (TCS) - Client: Danfoss",
      role: "Fullstack Developer",
      duration: "March 2022 – Nov 2024",
      location: "Noida",
      description:
        "Enterprise-level billing, invoice, and heavy machinery parts management system for Danfoss client, handling complex inventory and financial operations.",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      achievements: [
        {
          icon: "📊",
          title: "Data Management",
          detail:
            "Built comprehensive system for managing heavy machinery parts inventory and billing data",
        },
        {
          icon: "💰",
          title: "Invoice System",
          detail:
            "Developed automated invoice generation and management for complex B2B transactions",
        },
        {
          icon: "🔧",
          title: "Parts Tracking",
          detail:
            "Implemented real-time parts tracking and availability system for industrial equipment",
        },
        {
          icon: "📈",
          title: "Reporting Dashboard",
          detail:
            "Created interactive dashboards for financial reporting and inventory analytics",
        },
      ],
      techStack: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
      responsibilities: [
        "Developed frontend interfaces for Client data management",
        "Created RESTful APIs for parts inventory and financial data management",
        "Implemented secure data handling for sensitive billing information",
        "Built responsive dashboards for real-time data visualization",
      ],
    },
    {
      id: 3,
      type: "personal",
      title: "Student Daily Tracking System",
      subtitle: "Library Management Web App",
      duration: "September 2025",
      description:
        "Full-featured MERN stack application for tracking students' library activities with comprehensive CRUD operations and real-time updates.",
      thumbnail:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      gradient: "from-pink-600 via-rose-600 to-red-700",
      github: "https://github.com/amitpatelcr07/daily-library-tracker",
      liveDemo: "https://libfront.vercel.app/",
      achievements: [
        {
          icon: "⚡",
          title: "Performance Boost",
          detail:
            "Improved data load speed by 25% through optimized API structure and modular components",
        },
        {
          icon: "🎨",
          title: "Modern UI/UX",
          detail:
            "Developed interactive frontend with React.js and responsive UI via Tailwind CSS",
        },
        {
          icon: "🔒",
          title: "Secure Backend",
          detail:
            "Designed and implemented secure backend using Node.js + Express.js connected to MongoDB",
        },
        {
          icon: "🔄",
          title: "CRUD Operations",
          detail:
            "Built complete CRUD functionality for managing student library activities",
        },
      ],
      techStack: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      features: [
        "Real-time student activity tracking",
        "Book borrowing and return management",
        "Automated late fee calculation",
        "Search and filter functionality",
        "Responsive design for all devices",
      ],
    },
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Project Portfolio
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Showcasing enterprise solutions and personal projects built with
            modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
            >
              {/* Project Header */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                ></div>

                {/* Project Type Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg">
                    {project.type === "professional" ? (
                      <>
                        <FaBuilding className="text-blue-600" />
                        <span className="text-gray-800">Professional</span>
                      </>
                    ) : (
                      <>
                        <FaUser className="text-purple-600" />
                        <span className="text-gray-800">Personal</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Project Title & Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-xl opacity-90 mb-2">
                      {project.subtitle}
                    </p>
                  )}
                  {project.company && (
                    <p className="text-lg opacity-90 mb-1">{project.company}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                    {project.role && <span>• {project.role}</span>}
                    <span>• {project.duration}</span>
                    {project.location && <span>• {project.location}</span>}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Description */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                        >
                          <Icon
                            style={{ color: tech.color }}
                            className="text-xl"
                          />
                          <span className="text-gray-700 font-medium text-sm">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {achievement.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expandable Details */}
                <div className="border-t border-gray-200 pt-6">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center justify-between w-full text-left group/btn"
                  >
                    <span className="text-lg font-bold text-gray-800 group-hover/btn:text-blue-600 transition-colors">
                      {expandedProject === project.id
                        ? "Hide Details"
                        : "View Details"}
                    </span>
                    {expandedProject === project.id ? (
                      <FaChevronUp className="text-gray-600 group-hover/btn:text-blue-600 transition-colors" />
                    ) : (
                      <FaChevronDown className="text-gray-600 group-hover/btn:text-blue-600 transition-colors" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedProject === project.id
                        ? "max-h-[1000px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {project.responsibilities && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1">▸</span>
                              <span className="text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.features && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-purple-600 mt-1">▸</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.github || project.liveDemo) && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <FaGithub className="text-xl" />
                        View Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
