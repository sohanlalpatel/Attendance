import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSection() {
  const categories = ["All", "Pooja Vidhi", "Mantra", "Festival", "Astrology"];

  const blogData = [
    {
      title: "How to Perform Daily Pooja at Home",
      category: "Pooja Vidhi",
      img: "https://media.istockphoto.com/id/1355217670/photo/a-sacred-fire-for-puja-selective-focus-is-used.jpg?s=612x612&w=0&k=20&c=mJqiZN2lSNCkJwxNRRg7m3afagzA6DSNRwySb7InwSM=",
      desc: "Simple steps for morning and evening pooja rituals.",
    },
    {
      title: "How to Perform Daily Pooja at Home",
      category: "Pooja Vidhi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5y-91vUzujkxjnSpHcr6faJ3gW05M8ZuKg&s",
      desc: "Simple steps for morning and evening pooja rituals.",
    },
    
    {
      title: "How to Perform Daily Pooja at Home",
      category: "Pooja Vidhi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4LYyG2Kd6Tytd1kH3_tHMm0drJYmgLRW1w&s",
      desc: "Simple steps for morning and evening pooja rituals.",
    },

    {
      title: "Powerful Hanuman Chalisa Benefits",
      category: "Mantra",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20200803/pngtree-lord-shiva-trishul-background-om-namah-shivay-mantra-wallpaper-golden-trishul-image_374681.jpg",
      desc: "Know the spiritual power of chanting Hanuman Chalisa.",
    },
    {
      title: "Why We Celebrate Diwali",
      category: "Festival",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241012/pngtree-vibrant-diwali-festival-background-with-lanterns-and-decorations-colorful-celebration-traditional-image_16372439.jpg",
      desc: "The spiritual story behind Deepawali and traditions.",
    },

    {
      title: "Rashi and Planet Effects",
      category: "Astrology",
      img: "https://t4.ftcdn.net/jpg/05/27/82/49/360_F_527824903_o3NOqwVIPABypBDt3fNIux6y4s5h1CaC.jpg",
      desc: "How planets influence your daily life according to astrology.",
    },
    {
      title: "Rashi and Planet Effects",
      category: "Astrology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG1wqbJXejaDOYG_FPypOa52d1e0WkiGbgQ&s",
      desc: "How planets influence your daily life according to astrology.",
    },
    {
      title: "Rashi and Planet Effects",
      category: "Astrology",
      img: "https://t3.ftcdn.net/jpg/15/35/29/64/360_F_1535296451_gZY4LfXRaHHjD9Amt98GlkuNAXzwtCdn.jpg",
      desc: "How planets influence your daily life according to astrology.",
    },
    {
      title: "Ganesh Pooja Proper Rituals",
      category: "Pooja Vidhi",
      img: "https://housing.com/news/wp-content/uploads/2023/08/Dhanteras-Puja-Vidhi-2023-f.jpg",
      desc: "Step-by-step guide to perform Ganesh Pooja at home.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((b) => b.category === selectedCategory);

  return (
    <section className="w-full  bg-gray-50">
      {/* Section Heading */}
      <div
        className="relative w-full py-24 md:py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1314779344/photo/havan-ceremony-in-hindu-culture.jpg?s=612x612&w=0&k=20&c=LgMhR9QxT3m3gTJiB4f_u_tj_xbacwX7egT6kqXUfZ8=')",
        }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-white drop-shadow-lg animate-fadeIn">
            Our Spiritual Blogs
          </h2>

          <p className="text-gray-200 mt-3 text-lg animate-fadeIn delay-150">
            Explore daily pooja tips, mantras, astrology & more
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 md:px-0 py-5">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#fc8408] to-[#a3381c] text-white shadow-md"
                  : "text-gray-700 border-gray-300 hover:bg-orange-50 hover:text-[#fc8408]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={index} // <-- FIXED: unique key
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm font-bold text-[#fc8408] tracking-wide">
                    {blog.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-2 text-gray-800 group-hover:text-[#a3381c] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">{blog.desc}</p>

                  <button className="mt-4 inline-block text-[#a3381c] font-medium group-hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
