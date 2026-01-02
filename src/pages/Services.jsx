import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-4xl w-full text-center space-y-10">
        {/* HEADER */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Services Coming Soon 🚀
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I’m currently focused on building my skills and working on
            real-world projects. I’m actively open to internships, full-time
            roles, and freelance opportunities.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            What I Can Help With
          </h2>

          {/* SERVICES LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">✔</span>
              <p className="text-gray-700">
                Frontend Development (React, Tailwind CSS)
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">✔</span>
              <p className="text-gray-700">
                Backend APIs (Node.js, Express.js)
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">✔</span>
              <p className="text-gray-700">Full-Stack MERN Applications</p>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">✔</span>
              <p className="text-gray-700">Bug Fixing & Code Optimization</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Contact Me
            </Link>

            <p className="text-sm text-gray-500 mt-3">
              Let’s discuss how I can help on your next project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
