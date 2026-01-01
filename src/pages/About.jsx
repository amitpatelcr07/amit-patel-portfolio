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

          <p className="text-gray-600 leading-relaxed text-lg">
            Hi, I'm Amit Patel, a passionate Full-Stack Developer (MERN) with a
            strong focus on building scalable, user-friendly web applications. I
            specialize in React.js for dynamic frontends and Node.js/Express.js
            with MongoDB for robust backends. With hands-on experience in
            designing, developing, and optimizing full-stack applications, I
            enjoy solving complex problems and creating efficient solutions.
          </p>
        </div>

        {/* TECHNOLOGIES */}

        <Technology />
      </div>
    </section>
  );
}
