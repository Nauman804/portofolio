import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 50);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white tracking-tighter">
  GOK<span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">BORU</span>
</h1>
      </div>

      {/* Menu with Blue Glow and Modern Styling */}
<ul
  className={`flex items-center sm:gap-10 gap-4 
    md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
    md:opacity-100 transition-all duration-500
    /* Blue Glassmorphism Effect */
    bg-blue-900/10 backdrop-blur-lg border border-blue-500/20
    md:bg-transparent md:backdrop-blur-none md:border-none
    p-4 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.1)]
    ${active ? "top-4 opacity-100" : "top-0 md:opacity-100 opacity-0"}`}
>
        <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">Project</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;  
