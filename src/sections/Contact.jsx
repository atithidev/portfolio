const Contact = () => {
  return (
    <>
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        
        <h3 className="text-3xl font-bold mb-8">
          Let’s Connect
        </h3>

        <p className="text-gray-400 mb-12 text-lg">
          I’m open to full-time opportunities and challenging backend-focused roles.
          Let’s build scalable systems together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* Email Button: White background, Black text */}
          <a
            href="mailto:atithidev8@gmail.com"
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg transition font-bold"
          >
            Send Email
          </a>

          {/* LinkedIn Button: White border, White text */}
          <a
            href="https://www.linkedin.com/in/atithi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition font-medium duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
    
    <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm bg-black">
      © {new Date().getFullYear()} Atithi Dev. All rights reserved.
    </footer>
    </>
  );
};

export default Contact;