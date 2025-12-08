import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* ---------- LOGO SECTION ---------- */}
          <a href="#" className="flex items-center space-x-2">
            {/* Mobile Logo */}
            <div
              className="md:hidden w-10 h-10 bg-gradient-to-br from-[#fc8408] to-[#a3381c] 
              rounded-lg flex items-center justify-center transition-transform duration-300"
            >
              <span className="text-white font-bold text-lg">P</span>
            </div>

            {/* Desktop Logo */}
            <span className="hidden md:inline font-cinzel text-xl font-semibold tracking-wide text-[#a3381c]">
              POOJA
            </span>
          </a>

          {/* ---------- NAVLINKS (RIGHT ALIGNED) ---------- */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-gray-700 text-base font-medium hover:text-[#fc8408] transition-colors group"
              >
                {link.label}

                {/* Hover underline */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#fc8408] to-[#a3381c] 
                group-hover:w-full transition-all duration-300"
                ></span>
              </a>
            ))}
          </div>

          {/* ---------- CTA + Mobile Toggle ---------- */}
          <div className="flex items-center pl-4 ">
            <button
              className="hidden md:inline-flex px-4 py-2 bg-gradient-to-r from-[#fc8408] to-[#a3381c] 
              text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#fc8408]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "  border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-1 bg-white">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 font-medium rounded-md 
                hover:bg-orange-50 hover:text-[#fc8408] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-[#fc8408] to-[#a3381c] 
              text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
