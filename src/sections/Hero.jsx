const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Java Full Stack Developer
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mb-10">
        Building scalable microservice-based systems with clean architecture
        and modern frontend technologies.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;