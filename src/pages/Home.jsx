import { SiStackoverflow } from "react-icons/si";
import { FaDownload, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import HomePageImg from "../assets/HomePageImg.jpeg";

export default function Home() {
  return (
    <section
      style={{ backgroundImage: `url(${HomePageImg})` }}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
    >
      {/* DULL OVERLAY */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* GRID CONTAINER */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          min-h-screen
          px-6 sm:px-10 lg:px-20
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-4xl font-bold text-green-400 typewriter-name">
            Hi, I am Amit Patel
          </h1>

          <h2 className="text-4xl sm:text-4xl font-extrabold text-green-300 typewriter-title">
            Full Stack Developer
          </h2>

          <p className="text-gray-700 text-lg max-w-xl mx-auto lg:mx-0">
            I am a Front-End / Full-Stack Developer. Currently working at
            <span className="font-semibold"> Tata Consultancy Services </span>
            as a Full Stack Developer.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex"
            >
              <FaInstagram
                size={52}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-transform hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/amitpatelcr07"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex"
            >
              <FaGithub
                size={52}
                className="text-gray-600 hover:text-black cursor-pointer transition-transform hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/amit-patel-b944b1195"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex"
            >
              <FaLinkedin
                size={52}
                className="text-gray-600 hover:text-blue-700 cursor-pointer transition-transform hover:scale-110"
              />
            </a>
          </div>

          {/* BUTTON */}
          <button
            className="
              mt-8
              inline-flex items-center gap-3
              bg-blue-600 text-white
              px-12 py-6
              text-xl
              rounded-full font-semibold
              shadow-xl
              hover:bg-blue-700 hover:shadow-2xl
              transition-all
            "
          >
            <FaDownload />
            Download Resume
          </button>
        </div>

        {/* RIGHT COLUMN (KEEP EMPTY FOR FUTURE IMAGE / ILLUSTRATION) */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
