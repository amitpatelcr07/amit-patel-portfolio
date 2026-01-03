import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaBug,
  FaMobile,
  FaDatabase,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

export default function Services() {
  const services = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description:
        "Building modern, responsive user interfaces with React.js and Tailwind CSS",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript ES6+",
        "Responsive Design",
      ],
      gradient: "from-cyan-500 to-blue-600",
      iconColor: "#61DAFB",
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      description: "Crafting robust RESTful APIs and server-side applications",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      gradient: "from-green-500 to-emerald-600",
      iconColor: "#339933",
    },
    {
      icon: FaDatabase,
      title: "Full-Stack MERN",
      description:
        "End-to-end application development using MERN stack technology",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-purple-500 to-pink-600",
      iconColor: "#9333EA",
    },
    {
      icon: FaCode,
      title: "Code Optimization",
      description:
        "Improving performance, refactoring code, and implementing best practices",
      technologies: [
        "Performance Tuning",
        "Code Review",
        "Refactoring",
        "Best Practices",
      ],
      gradient: "from-orange-500 to-red-600",
      iconColor: "#F97316",
    },
    {
      icon: FaBug,
      title: "Bug Fixing & Debugging",
      description:
        "Identifying and resolving issues to ensure smooth application functionality",
      technologies: [
        "Debugging",
        "Testing",
        "Error Handling",
        "Quality Assurance",
      ],
      gradient: "from-yellow-500 to-amber-600",
      iconColor: "#EAB308",
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description:
        "Creating mobile-first, cross-platform compatible web applications",
      technologies: ["Mobile-First", "Cross-Browser", "Accessibility", "UI/UX"],
      gradient: "from-indigo-500 to-purple-600",
      iconColor: "#6366F1",
    },
  ];

  const keyFeatures = [
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "Quick turnaround time without compromising quality",
    },
    {
      icon: FaLightbulb,
      title: "Modern Solutions",
      description: "Using latest technologies and best practices",
    },
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              What I Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              My Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about building modern web applications and helping
            bring your ideas to life. Open to internships, full-time roles, and
            freelance opportunities.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* KEY FEATURES */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Work With Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECH STACK SHOWCASE */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-blue-100 text-lg">
              Working with modern, industry-standard technologies
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: FaReact, name: "React.js" },
              { icon: FaNodeJs, name: "Node.js" },
              { icon: SiExpress, name: "Express.js" },
              { icon: SiMongodb, name: "MongoDB" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
              { icon: SiJavascript, name: "JavaScript" },
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="text-2xl" />
                  <span className="font-semibold">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600">
              Whether you need a full-stack application, frontend development,
              or just want to discuss your project ideas, I'm here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-600"
              >
                View My Work
              </Link>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              💼 Open for: Full-time roles • Internships • Freelance projects
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "3.5+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "6+", label: "Technologies" },
            { number: "95%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
