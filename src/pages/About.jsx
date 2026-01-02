import Technology from "./Technology";

export default function About() {
  const technologies = [
    "C Language",
    "TypeScript",
    "Express",
    "NodeJS",
    "Postman",
    "Dart",
    "Flutter",
    "React Native",
    "HTML",
    "CSS",
    "Bootstrap",
    "Redux",
    "Sass",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ABOUT ME */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500 mb-6">
            A bit about me
          </h2>

          <section className="max-w-4xl mx-auto px-6 py-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-4">
              Full-Stack MERN Developer
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Full-Stack MERN Developer with{" "}
              <span className="font-semibold">3.5+ years of experience</span>
              in designing, developing, and deploying scalable web applications
              using
              <span className="font-semibold">
                {" "}
                React.js, Node.js, and MongoDB
              </span>
              . Experienced in RESTful API design, microservices, and CI/CD
              automation with OpenShift. Skilled in performance optimization
              using Redis and cloud integrations such as Cloudinary. Passionate
              about writing clean, reusable code and collaborating effectively
              in Agile teams.
            </p>
          </section>
        </div>

        {/* TECHNOLOGIES */}

        <Technology />
      </div>
    </section>
  );
}
