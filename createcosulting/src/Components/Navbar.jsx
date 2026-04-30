import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-yellow-600/30 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO WITH INTERACTIVE SHINE */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer"
        >
          <img src={logo} alt="logo" className="h-10 md:h-12 relative z-10" />
          <div className="absolute inset-0 overflow-hidden skew-x-[-20deg]">
            <div className="animate-shine absolute inset-0 w-1/2 h-full bg-white/20 blur-[20px] -translate-x-[200%]"></div>
          </div>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-sm tracking-widest uppercase font-medium text-gray-300 hover:text-yellow-500 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(202, 138, 4, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold px-7 py-2.5 rounded-full text-sm uppercase tracking-tighter"
          >
            Book Session
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-yellow-500 p-2 focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-yellow-600/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-10">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-gray-300 text-2xl font-light hover:text-yellow-500 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-[80%] bg-yellow-600 text-black font-bold py-4 rounded-xl"
              >
                Book Session
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}