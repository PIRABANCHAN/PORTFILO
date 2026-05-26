"use client";

import NetworkBackground from "./NetworkBackground";

export default function HomeLayout() {
  return (
    <div className="relative min-h-screen text-white">
      <NetworkBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 py-5 px-10 flex justify-between items-center glass border-b border-white/5">
        <div className="text-xl font-bold gradient-text">PIRABANCHAN N</div>
        <div className="flex items-center gap-10">
          <div className="flex gap-8 text-gray-300 text-sm font-medium">
            <a href="#" className="hover:text-cyan-400 transition">About</a>
            <a href="#" className="hover:text-cyan-400 transition">Tools</a>
            <a href="#" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          {/* 🔥 New Action Button in Navbar */}
          <button className="px-5 py-2.5 bg-white text-black font-extrabold text-xs rounded-full hover:bg-cyan-400 transition-all shadow-lg">
            DOWNLOAD RESUME
          </button>
        </div>
      </nav>

      {/* HERO SECTION - All Content Center Aligned */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-10">
        <div className="relative z-20 max-w-4xl">
          {/* Main Title */}
          <h1 className="text-8xl font-black gradient-text tracking-tight uppercase">
            PIRABANCHAN N
          </h1>

          {/* Qualification Details */}
          <p className="text-3xl mt-6 text-purple-300 font-medium max-w-3xl mx-auto">
           Full Stack Developer / Web Development
          </p>

          {/* Container-oda width-a left and right side stretch panna 'max-w-6xl' use pannu */}
      <div className="mt-12 glass px-12 py-10 rounded-[2rem] border border-white/10 text-gray-200 text-xl leading-relaxed font-normal shadow-2xl max-w-6xl mx-auto">
      I am a developer who loves building things that actually work and look great. For me, 
  coding isn't just about lines of logic; it’s about creating smooth, user-friendly 
  experiences from scratch. Whether it’s designing a clean frontend or handling complex 
  backend data, I enjoy the challenge of turning a simple idea into a fully functional 
  digital reality. My goal is to keep learning, keep building, and always deliver quality 
  work that makes a difference.
</div>
        </div>
      </div>
    </div>
  );
}