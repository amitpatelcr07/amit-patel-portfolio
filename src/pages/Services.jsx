export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive, and high-performance UI development.",
    },
    {
      title: "Full Stack Development",
      description: "Complete web solutions using frontend & backend.",
    },
    {
      title: "UI/UX Design",
      description: "Clean and user-friendly interface designs.",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
