import { useState } from "react";
import { FaJava, FaReact, FaGitAlt, FaNetworkWired } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const mainSkills = [
    {
      title: "Java",
      icon: <FaJava size={28} />,
      description:
        "Strong foundation in core Java, object-oriented programming, and backend system development."
    },
    {
      title: "Spring Boot",
      icon: <SiSpringboot size={28} />,
      description:
        "Building production-ready REST APIs with clean architecture and enterprise best practices."
    },
    {
      title: "Microservices",
      icon: <FaNetworkWired size={28} />,
      description:
        "Designing scalable distributed systems with service-to-service communication and modular design."
    },
    {
      title: "React",
      icon: <FaReact size={28} />,
      description:
        "Developing modern, responsive frontend interfaces using component-based architecture."
    },
    {
      title: "MySQL",
      icon: <SiMysql size={28} />,
      description:
        "Designing relational database schemas, optimized queries, and maintaining data integrity."
    },
    {
      title: "Git",
      icon: <FaGitAlt size={28} />,
      description:
        "Version control, branching strategies, and collaborative development workflows."
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-3xl font-bold mb-12 text-white">
          Core Technical Skills
        </h3>

        {/* Main Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-white transition-all duration-300 group-hover:brightness-80">
                {skill.icon}
              </div>

              <h4 className="text-lg font-semibold mb-2 text-white">
                {skill.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            View More
          </button>
        )}

        {/* Technical Skills Table */}
        {showMore && (
          <div className="mt-14">
            <h4 className="text-2xl font-semibold text-white mb-10 text-center">
              Technical Skills Overview
            </h4>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Languages & Frameworks */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Languages & Frameworks
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Java 8+, Spring Boot, Spring Security, Spring Data JPA,
                  Hibernate, Microservices
                </p>
              </div>

              {/* Core Concepts */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Core Concepts
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  OOPs, Collections Framework, Exception Handling,
                  Multithreading, JVM Basics
                </p>
              </div>

              {/* Design */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Design
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  System Design (LLD), SOLID Principles, Design Patterns
                </p>
              </div>

              {/* Build & Deployment */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Build & Deployment Tools
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maven, Gradle, CI/CD Pipelines, AWS EC2 (Basic Deployment)
                </p>
              </div>

              {/* Databases */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Databases
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MySQL, PostgreSQL
                </p>
              </div>

              {/* Project Management */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Project Management & Methodologies
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jira, Agile / Scrum
                </p>
              </div>

              {/* Version Control */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Version Control Systems
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GitHub, GitLab
                </p>
              </div>

              {/* Operating Systems */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h5 className="text-white font-semibold mb-4">
                  Operating Systems
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Windows, Linux
                </p>
              </div>

            </div>
            {/* View Less Button (Only when open) */}
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowMore(false)}
                className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                View Less
              </button>
            </div>
          </div>

        )}
      </div>
    </section>
  );
};

export default Skills;