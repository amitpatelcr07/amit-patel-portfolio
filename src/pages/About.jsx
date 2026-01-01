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
            I'm a self-taught web developer and Mobile App Developer with
            experience in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications. I take into consideration the user experience
            while writing reusable and efficient code. I passionately combine
            good design, technology, and innovation in all my projects, which I
            like to accompany from the first idea to release. Currently, I'm
            focused on the backend development.
          </p>
        </div>

        {/* TECHNOLOGIES */}
        
        <Technology />
      </div>
    </section>
  );
}
