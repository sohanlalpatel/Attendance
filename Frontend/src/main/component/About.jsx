import React from "react";
import { motion } from "framer-motion";

export default function AboutPoojaPathNew() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#fff7f0] via-white to-[#ffe9d2] overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/854/854866.png"
        alt=""
        className=" w-12 md:w-24 opacity-20 absolute top-10 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/854/854880.png"
        alt=""
        className="w-10  md:w-20 opacity-20 absolute bottom-16 right-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center relative">
        {/* LEFT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Divine Glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-80 h-80 md:w-96 md:h-96 bg-[#fc8408]/20 blur-3xl rounded-full"
          />

          {/* Golden Frame */}
          {/* <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute w-72 h-72 md:w-96 md:h-126 border-4 border-[#a3381c] rounded-3xl"
          /> */}

          {/* Main Image */}
          <img
            src="https://www.nicepng.com/png/full/260-2604440_http-syedimranrocks-blogspot-in-pooja-png.png"
            className="w-72 h-72 md:w-96 md:h-126 object-cover rounded-3xl shadow-xl relative z-10"
            alt="About PoojaPath"
          />
        </motion.div>

        {/* RIGHT CONTENT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-[#a3381c] mb-4">
            About PoojaPath
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            PoojaPath is created with one divine mission — to bring sacred
            rituals, mantras, and spiritual guidance closer to every home. Our
            platform ensures that every pooja becomes meaningful, pure, and
            fully guided.
          </p>

          <p className="mt-4 text-gray-600">
            From online pooja booking to astrology, vastu, mantras, and festival
            rituals — PoojaPath has become a trusted spiritual companion for
            thousands of families across India.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Authentic Pooja Vidhis & Ritual Guidance",
              "Certified & Trusted Pandits Across Cities",
              "Daily Mantras, Astrology & Spiritual Blogs",
              "Festival Pooja Packages & Personalized Rituals",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#fc8408] to-[#a3381c]"></span>
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-7 py-3 bg-gradient-to-r from-[#fc8408] to-[#a3381c] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
