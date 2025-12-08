 

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-white overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-[#b8492d] to-[#b3482d] text-white pt-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
       

          {/* Footer Links Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-bold text-xl mb-4 text-[#fc8408]">POJA</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Delivering sacred Puja services with devotion and authenticity
                to connect you with divine blessings.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="hover:text-[#fc8408] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#fc8408] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#fc8408] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#fc8408] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-bold text-lg mb-4 text-[#fc8408]">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  "Puja Kits",
                  "Incense & Oils",
                  "Sacred Items",
                  "Flowers & Garlands",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#fc8408] transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-bold text-lg mb-4 text-[#fc8408]">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#fc8408] transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-bold text-lg mb-4 text-[#fc8408]">Contact</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <Phone
                    size={18}
                    className="text-[#fc8408] mt-1 flex-shrink-0"
                  />
                  <a
                    href="tel:+919876543210"
                    className="text-white/80 hover:text-[#fc8408] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <Mail
                    size={18}
                    className="text-[#fc8408] mt-1 flex-shrink-0"
                  />
                  <a
                    href="mailto:info@poja.com"
                    className="text-white/80 hover:text-[#fc8408] transition-colors"
                  >
                    info@poja.com
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <MapPin
                    size={18}
                    className="text-[#fc8408] mt-1 flex-shrink-0"
                  />
                  <span className="text-white/80">New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
            <p className="text-white/60 text-sm">
              © 2025 POJA. All rights reserved. Bringing divine blessings to
              your home.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-[#fc8408] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#fc8408] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#fc8408] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
