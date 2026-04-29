import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Creative Consulting Logo 1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/40 border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO WITH SHINE */}
        <div className="relative group cursor-pointer">
          <img src={logo} alt="logo" className="h-12 relative z-10" />

          {/* Shine Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-shine"></div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-300 hover:text-yellow-600 transition-colors duration-300 group"
            >
              {item}

              {/* Underline Hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
            Book Session
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-6 text-center border-t border-yellow-600/20">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-300 hover:text-yellow-600 text-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-6 py-3 rounded-md">
            Book Session
          </button>
        </div>
      )}
    </nav>
  );
}
