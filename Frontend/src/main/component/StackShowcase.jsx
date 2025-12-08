/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Premium Hair Care",
    text: "Advanced keratin, smoothing and nourishing treatments.",
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Skin Glow Therapy",
    text: "Rejuvenating facials and glow rituals for radiant skin.",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Relaxing Body Spa",
    text: "Healing therapies and full body spa relaxation experience.",
    img: "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Beauty & Styling",
    text: "Trendy makeup, styling and professional grooming.",
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&auto=format&fit=crop&q=60",
  },
];

const StackShowcase = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // ✔ scroll sensitivity
      const slideHeight = 350;

      let newActive = Math.min(
        slides.length - 1,
        Math.floor(scrolled / slideHeight)
      );

      setActive(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[280vh] bg-gradient-to-b from-white to-green-50">
      {/* Sticky slide frame */}
      <div className="sticky top-20 flex justify-center pt-10">
        <div className="relative w-[85%] md:w-[70%] h-[500px]">
          {slides.map((slide, index) => {
            const isPast = index < active;
            const isActive = index === active;

            return (
              <div
                key={index}
                className="
                  absolute w-full h-full bg-white rounded-3xl shadow-xl p-8
                  transition-all duration-700 ease-out flex flex-col md:flex-row
                "
                style={{
                  transform: `
                    translateY(${(index - active) * 50}px)
                    scale(${isPast ? 0.85 : isActive ? 1 : 0.95})
                  `,
                  opacity: isPast ? 0 : 1,
                  zIndex: 20 - index,
                }}
              >
                {/* LEFT IMAGE */}
                <div className="w-full md:w-1/2">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-64 md:h-full rounded-2xl object-cover"
                  />
                </div>

                {/* RIGHT TEXT */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                  <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
                  <p className="text-lg text-gray-700">{slide.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StackShowcase;
