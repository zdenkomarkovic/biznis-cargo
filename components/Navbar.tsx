"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Početna", href: "#hero" },
  { label: "Usluge", href: "#usluge" },
  { label: "Zašto mi", href: "#zasto-mi" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Biznis Cargo DOO"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a6b] hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#kontakt")}
              className="ml-4 px-5 py-2.5 bg-[#f97316] hover:bg-[#ea6a00] text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Pošaljite upit
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#1a3a6b]"
            aria-label="Otvori meni"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-gray-100">
            <div className="pt-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1a3a6b] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="mt-2 mx-4 py-2.5 bg-[#f97316] hover:bg-[#ea6a00] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Pošaljite upit
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
