import { useEffect, useState } from "react";
import bg1 from "../assets/Old library Background.jpg";
import bg2 from "../assets/hero.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth background blend
  const opacity = Math.min(scrollY / 600, 1);

  return (
    <section className="relative h-[120vh] overflow-hidden">

      {/* BACKGROUND 1 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${bg1})`,
          transform: `scale(${1 + scrollY * 0.0003})`,
        }}
      />

      {/* BACKGROUND 2 (BLEND) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${bg2})`,
          opacity: opacity,
          transform: `scale(${1 + scrollY * 0.0005})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/900 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-screen px-6">

        {/* MAIN TITLE */}
        <h1 className="text-5xl md:text-7xl font-semibold gold-text mb-6 tracking-tight leading-tight">
          Creative Consulting
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Strategic insight with timeless sophistication.
        </p>

        {/* SECOND HEADLINE BLOCK */}
        <div className="mt-10 space-y-3 text-xl md:text-2xl font-light">
          <p>
            <span className="gold-text font-medium">Unlock</span> Your Thinking.
          </p>
          <p>
            <span className="gold-text font-medium">Build</span> Your Structure.
          </p>
          <p>
            <span className="gold-text font-medium">Control</span> Your Future.
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-2xl mt-6 mb-8 text-sm md:text-base">
          Creative Consulting provides private advisory and strategic education
          to build, protect, and grow wealth with clarity and precision.
        </p>

        {/* CTA */}
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          Book a Private Consultation
        </button>
      </div>
    </section>
  );
}
