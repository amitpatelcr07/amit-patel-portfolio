import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaJenkins,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiExpress,
  SiCplusplus,
  SiJavascript,
  SiRedis,
  SiCloudinary,
  SiRedhatopenshift,
  SiGithub,
  SiJira,
} from "react-icons/si";

const technologies = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },

  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "React Router", icon: SiReact, color: "#CA4245" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: null, color: "#880000" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },

  // Cloud/DevOps
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "OpenShift", icon: SiRedhatopenshift, color: "#EE0000" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Jenkins", icon: FaJenkins, color: "#D24939" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },

  // Tools
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "VS Code", icon: null, color: "#007ACC" }, // Using null like ServiceNow and Putty
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "ServiceNow", icon: null, color: "#62D84E" },
  { name: "Putty", icon: null, color: "#000000" },
];

export default function Technology() {
  return (
    <div className="space-y-8">
      {/* TITLE */}
      <h3
        className="text-3xl sm:text-4xl font-semibold"
        style={{ color: "#3B82F6" }}
      >
        Technologies and Tools
      </h3>

      

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="
                bg-gray-50
                rounded-xl
                px-5
                py-6
                flex
                items-center
                gap-4
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* ICON */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                {Icon ? (
                  <Icon
                    className="w-full h-full"
                    style={{ color: tech.color }}
                  />
                ) : (
                  <span
                    className="font-bold text-2xl"
                    style={{ color: tech.color }}
                  >
                    {tech.name[0]}
                  </span>
                )}
              </div>

              {/* NAME */}
              <span className="text-gray-800 font-medium text-sm">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
