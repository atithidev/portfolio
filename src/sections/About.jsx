import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
        </div>

        {/* Main Layout - Flex order swapped */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Content Section (Now First in Code, Left on Desktop) */}
          <div className="md:w-2/3">
            {/* Compact Professional Cards */}
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              {/* Experience Card */}
              <div className="flex-1 border-2 border-gray-200 rounded-xl p-5 hover:border-gray-400 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-xl text-gray-700" />
                  <h3 className="text-base font-semibold text-gray-900">
                    Experience
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                  2+ Years <br />
                  Java Full Stack Development
                </p>
              </div>

              {/* Education Card */}
              <div className="flex-1 border-2 border-gray-200 rounded-xl p-5 hover:border-gray-400 transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-xl text-gray-700" />
                  <h3 className="text-base font-semibold text-gray-900">
                    Education
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                  Bachelor of Computer Applications <br />
                  Master of Computer Applications
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-base leading-relaxed">
              I am Atithi Dev, a dedicated Java Full Stack Developer with over two
              years of experience building scalable backend systems and modern web
              applications. My expertise includes Java, Spring Boot, Microservices,
              MySQL, PostgreSQL, and React.
              <br /><br />
              I have worked on enterprise-level applications, authentication
              systems, and cloud-integrated services, focusing on writing clean,
              maintainable, and efficient code. I enjoy solving complex problems
              and transforming business requirements into secure and high-performing
              digital solutions.
            </p>
          </div>

          {/* Profile Image (Now Second in Code, Right on Desktop) */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/atithi-dev.jpg"
              alt="Atithi Dev"
              className="w-96 h-96 object-cover object-top rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;