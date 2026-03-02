const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold tracking-wide text-white font-serif">
          Atithi Dev
        </h1>


        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <a href="#about" className="inline-block transition-transform duration-200 hover:-translate-y-0.5">About</a>
          <a href="#skills" className="inline-block transition-transform duration-200 hover:-translate-y-0.5">Skills</a>
          <a href="#projects" className="inline-block transition-transform duration-200 hover:-translate-y-0.5">Projects</a>
          <a href="#contact" className="inline-block transition-transform duration-200 hover:-translate-y-0.5">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;