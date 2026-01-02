import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Noida, Sector 66",
      link: "https://maps.google.com/?q=Noida+Sector+66",
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:shadow-red-500/50",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "pamitvns99@gmail.com",
      link: "mailto:pamitvns99@gmail.com",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 638 855 7509",
      link: "tel:+916388557509",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/50",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Amit Patel",
      link: "https://linkedin.com/in/amit-patel-b944b1195/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-600/50",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "amitpatelcr07",
      link: "https://github.com/amitpatelcr07",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-700/50",
    },
    {
      icon: FaGlobe,
      label: "Portfolio",
      value: "View My Work",
      link: "https://amit-patel-portfolio.vercel.app/",
      color: "from-purple-500 to-indigo-600",
      hoverColor: "hover:shadow-purple-500/50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'm always open
          to discussing new projects and opportunities.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.link}
              target={contact.link.startsWith("http") ? "_blank" : "_self"}
              rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl ${contact.hoverColor} transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <Icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-800 font-medium text-base break-words">
                  {contact.value}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:pamitvns99@gmail.com"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <FaEnvelope />
          Send Email
        </a>
        <a
          href="https://amit-patel-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 flex items-center gap-2"
        >
          <FaGlobe />
          View Portfolio
        </a>
      </div>
    </div>
  );
};

export default Contact;
