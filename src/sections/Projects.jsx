const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        
        <h3 className="text-3xl font-bold text-center mb-16">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition hover:-translate-y-2 duration-300">
            
            <h4 className="text-xl font-semibold mb-4 text-blue-500">
              Enterprise Auth Microservice
            </h4>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Designed and implemented a JWT-based authentication and 
              authorization system with refresh token rotation, 
              multi-device login support, and RBAC-based access control.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">JWT</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                Live Demo
              </a>
            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition hover:-translate-y-2 duration-300">
            
            <h4 className="text-xl font-semibold mb-4 text-blue-500">
              IoT Device Management Backend
            </h4>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Built scalable microservices to manage IoT temperature-sensing 
              devices deployed across multiple cities, with metadata storage, 
              monitoring, and REST-based communication.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Microservices</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                Live Demo
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;