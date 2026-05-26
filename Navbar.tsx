export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-5 flex justify-between glass">
      <h1 className="text-2xl font-bold gradient-text">
        PIRABANCHAN N
      </h1>

      <div className="flex gap-8">
        <a href="#about">About</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}