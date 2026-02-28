const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold tracking-wide text-blue-500">
          Atithi Dev
        </h1>

        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;