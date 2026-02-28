import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Profile Image */}
<div className="aspect-square w-80 md:w-96 mt-12">
  <img
    src="/atithi-dev-profile.jpeg"
    alt="Atithi Dev"
    className="rounded-full object-cover shadow-2xl border-4 border-white w-full h-full"
  />
</div>



          {/* Right Content */}
          <div className="md:w-1/2 text-center md:text-left mt-12">

            <p className="text-gray-600 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">
              Atithi Dev
            </h1>

            {/* Strong Focus Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
              Full Stack Developer
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
              Building scalable microservice-based systems with clean architecture
              and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
  href="/Atithi_Dev_CV.pdf"
  download="Atithi_Dev_CV.pdf"
  type="application/pdf"
  className="px-7 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
>
  Download CV
</a>

              <a
                href="#contact"
                className="px-7 py-3 border border-black text-black rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Contact Info
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-8 mt-8 justify-center md:justify-start md:pl-24">
              <a
                href="https://www.linkedin.com/in/atithi-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-gray-700 hover:text-black hover:scale-110 transition duration-200"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/atithidev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-gray-700 hover:text-black hover:scale-110 transition duration-200"
              >
                <FaGithub />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}