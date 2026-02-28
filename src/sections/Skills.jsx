const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black"> {/* Added bg-black for better contrast with white */}
      <div className="max-w-6xl mx-auto">
        
        <h3 className="text-3xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Backend */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Backend
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Microservices Architecture</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
              <li>RBAC Authorization</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Frontend
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>React</li>
              <li>Angular (Learning)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Database & Tools */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Database & Tools
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Git & GitHub</li>
              <li>Docker (Basics)</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;