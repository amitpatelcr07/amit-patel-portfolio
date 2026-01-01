export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "React, Tailwind CSS",
    },
    {
      name: "E-Commerce App",
      tech: "React, Node.js, MongoDB",
    },
    {
      name: "Dashboard System",
      tech: "React, Chart.js",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 hover:border-blue-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.tech}</p>
              <button className="text-blue-600 font-medium hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
