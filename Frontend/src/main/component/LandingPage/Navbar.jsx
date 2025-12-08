 

import { useState } from "react"
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform"
              style={{
                background: "linear-gradient(to right, #FD7979, #FDACAC)",
              }}
            >
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-text hidden sm:inline gradient-text">
              AttendanceFlow
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/Login"
              className="px-6 py-2 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #FD7979, #FDACAC)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeInUp">
            <Link
              href="#features"
              className="block px-4 py-2 text-text-secondary hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block px-4 py-2 text-text-secondary hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="block px-4 py-2 text-text-secondary hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/Login"
              className="block mx-4 mt-4 px-6 py-2 text-white rounded-full font-medium text-center hover:shadow-lg transition-all"
              style={{
                background: "linear-gradient(to right, #FD7979, #FDACAC)",
              }}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
