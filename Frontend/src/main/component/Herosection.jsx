import React from "react";

export default function HeroSection() {
  return (
    <div className="  w-full bg-white">
      {/* Navigation */}
      {/* <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-100">
        <div className="text-2xl font-bold" style={{ color: "#fc8408" }}>
          POJA
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Work
          </a>
          <button
            className="px-6 py-2 rounded-full text-white transition hover:shadow-lg"
            style={{ backgroundColor: "#fc8408" }}
          >
            Contact
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "#fc8408" }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: "#a3381c" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="inline-block mb-8">
            <span
              className="text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
              style={{ backgroundColor: "#fc8408", color: "white" }}
            >
              Creative Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl  lg:text-8xl font-bold leading-tight mb-8"
            style={{ color: "#a3381c" }}
          >
            Build Something
            <span style={{ color: "#fc8408" }}> Extraordinary</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
            We transform your vision into reality. From concept to execution,
            our team delivers design excellence and innovative solutions that
            elevate your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-white transition hover:shadow-xl hover:-translate-y-1 duration-300"
              style={{ backgroundColor: "#fc8408" }}
            >
              Get Started
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition hover:shadow-lg border-2"
              style={{ borderColor: "#a3381c", color: "#a3381c" }}
            >
              Learn More
            </button>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
            <div>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#fc8408" }}
              >
                250+
              </p>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#a3381c" }}
              >
                95%
              </p>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
            <div>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#fc8408" }}
              >
                15+
              </p>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="mt-24 relative">
          <div
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: "#fc8408" }}
                ></div>
                <p className="text-gray-400">Featured Project Image</p>
              </div>
            </div>
          </div>

          {/* Accent element */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
            style={{ backgroundColor: "#a3381c", opacity: 0.1 }}
          ></div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Scroll to explore
          </p>
          <svg
            className="w-5 h-5"
            style={{ color: "#fc8408" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
