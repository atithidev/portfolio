const Projects = () => {
  return (
    <>

      {/* Section Title */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Project
            </h2>

            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/atithidev/AI-powered-Email-Reply-Generator-With-Gmail-Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-white text-black border border-gray-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                View Demo
              </a>

              <a
                href="https://github.com/atithidev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-gray-500 text-white 
hover:bg-white hover:text-black hover:border-white 
hover:shadow-md hover:-translate-y-0.5 
transition-all duration-200"
              >
                View More Projects
              </a>
            </div>

          </div>

          {/* Your existing project layout continues below */}


          {/* Main Container */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE - Screenshots */}
            <div className="space-y-6">
              <img
                src="/email-ui-1.jpg"
                alt="Email Reply Generator UI - Screenshot 1"
                className="w-full h-52 object-cover rounded-xl border border-zinc-800 shadow-md hover:scale-105 transition duration-300"
              />

              <img
                src="/email-ui-2.jpg"
                alt="Email Reply Generator UI - Screenshot 2"
                className="w-full h-52 object-cover rounded-xl border border-zinc-800 shadow-md hover:scale-105 transition duration-300"
              />
            </div>

            {/* RIGHT SIDE - Project Details */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-3">
                AI-Powered Email Reply Generator with Gmail Integration
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A lightweight full-stack AI integration project that demonstrates
                how generative AI can be connected with a Spring Boot microservice
                and a React frontend to automate email reply generation.
                The system allows users to select different response tones and
                generates contextual replies using the Gemini API.
              </p>

              <div className="space-y-4 text-gray-300 text-sm">

                <div>
                  <p className="text-white font-semibold">Key Highlights</p>
                  <ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
                    <li>Integrated Gemini API with Spring Boot microservice</li>
                    <li>Dynamic tone selection (Professional, Casual, Friendly)</li>
                    <li>REST-based backend communication</li>
                    <li>Chrome Extension plugin integrated into Gmail reply UI</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-semibold">Tech Stack</p>
                  <p className="text-gray-400 mt-1">
                    Java 8+, Spring Boot, REST APIs, React, Gemini API, Chrome Extension
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold">Purpose</p>
                  <p className="text-gray-400 mt-1">
                    Built as a practical demonstration of AI integration with
                    modern full-stack architecture and browser extension capability.
                  </p>
                </div>

              </div>
            </div>



          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;