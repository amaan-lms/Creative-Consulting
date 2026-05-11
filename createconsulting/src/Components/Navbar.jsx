import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/70 backdrop-blur-xl border-b border-[#c89b5d]/20"
          : "py-6 bg-transparent"
      }`}
    >
      {/* TOP GOLD BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/40 to-transparent" />

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-[#c89b5d]/10 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          whileHover={{ scale: 1.03 }}
          className="relative flex items-center"
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-12 object-contain"
          />

          {/* SHINE */}
          <div className="absolute inset-0 overflow-hidden skew-x-[-20deg]">
            <div className="animate-shine absolute top-0 left-0 w-1/3 h-full bg-white/10 blur-[18px] -translate-x-[220%]" />
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="relative text-[13px] uppercase tracking-[0.22em] text-[#d0c8bc] hover:text-[#d7b47a] transition-all duration-300 group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#c89b5d] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative overflow-hidden border border-[#c89b5d]/40 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] px-7 py-3 text-black font-semibold uppercase tracking-[0.15em] text-xs transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>

            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-11 h-11 border border-[#c89b5d]/20 bg-black/40 text-[#d7b47a]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-[#c89b5d]/10"
          >
            <div className="relative flex flex-col items-center justify-center h-full px-6">

              {/* BACKGROUND GLOW */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#c89b5d]/10 blur-[100px]" />

              {/* LINKS */}
              <div className="relative z-10 flex flex-col items-center gap-10">

                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="font-serif italic text-3xl text-[#d0c8bc] hover:text-[#d7b47a] transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* MOBILE CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 group flex items-center gap-3 border border-[#c89b5d]/30 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] px-8 py-4 text-black font-semibold uppercase tracking-[0.15em] text-xs"
                >
                  Book Consultation

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}