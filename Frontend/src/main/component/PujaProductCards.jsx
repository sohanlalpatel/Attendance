import React, { useState } from "react";
import { Star, Zap, Shield, Gift, Heart, ShoppingCart } from "lucide-react";
import puja1 from "../../assests/poja1.jpg";
import puja2 from "../../assests/puja2.webp";
export default function PujaProductCards() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Puja Ritual Kit",
      price: "499",
      rating: 4.8,
      reviews: 324,
      image: puja1,
      badge: "Best Seller",
      features: ["100% Organic", "Certified", "Complete Set"],
      description: "Complete spiritual ritual kit with premium ingredients",
    },
    {
      id: 2,
      name: "Sacred Incense Bundle",
      price: "349",
      rating: 4.9,
      reviews: 512,
      image: puja2,
      badge: "Top Rated",
      features: ["6 Varieties", "Long Lasting", "Authentic"],
      description: "Premium incense collection for meditation and worship",
    },
    {
      id: 3,
      name: "Meditation Candles",
      price: "299",
      rating: 4.7,
      reviews: 289,
      image: puja1,
      badge: "New",
      features: ["Soy Wax", "Essential Oils", "Handmade"],
      description: "Handcrafted candles for peaceful spiritual moments",
    },
    {
      id: 4,
      name: "Prayer Beads Set",
      price: "449",
      rating: 4.6,
      reviews: 198,
      image: puja2,
      badge: "Premium",
      features: ["108 Beads", "Natural Stones", "Artisan Made"],
      description: "Traditional prayer beads crafted with natural stones",
    },
    {
      id: 5,
      name: "Puja Lamp Collection",
      price: "599",
      rating: 4.9,
      reviews: 445,
      image: puja1,
      badge: "Bestseller",
      features: ["LED Option", "Brass Made", "Eco Friendly"],
      description: "Beautiful brass lamps perfect for ritual lighting",
    },
    {
      id: 6,
      name: "Spiritual Herbs Mix",
      price: "249",
      rating: 4.5,
      reviews: 267,
      image: puja2,
      badge: "Limited",
      features: ["Organic", "Therapeutic", "Packaged Fresh"],
      description: "Organic herb blend for rituals and wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">
            Puja Essentials
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Premium spiritual products for your sacred moments
          </p>
        </div>

        {/* Filter/Sort Options */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-2 rounded-full bg-[#fc8408] text-white font-medium hover:bg-[#a3381c] transition-all duration-300 transform hover:scale-105">
            All Products
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-[#fc8408] text-[#fc8408] font-medium hover:bg-[#fc8408] hover:text-white transition-all duration-300">
            Best Sellers
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-[#fc8408] text-[#fc8408] font-medium hover:bg-[#fc8408] hover:text-white transition-all duration-300">
            New Arrivals
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block bg-gradient-to-r from-[#fc8408] to-[#a3381c] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 z-20 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Heart
                  size={20}
                  className={`transition-all duration-300 ${
                    favorites[product.id]
                      ? "fill-[#a3381c] text-[#a3381c]"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#fc8408] transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-orange-50 text-[#a3381c] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      <Zap size={12} />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "fill-[#fc8408] text-[#fc8408]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between gap-3">
                  <div className="text-3xl font-bold text-[#fc8408]">
                    ₹{product.price}
                  </div>
                  <button className="flex-1 bg-gradient-to-r from-[#fc8408] to-[#a3381c] text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <ShoppingCart
                      size={18}
                      className="group-hover/btn:rotate-12 transition-transform"
                    />
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fc8408] via-[#a3381c] to-[#fc8408] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <button className="bg-gradient-to-r from-[#fc8408] to-[#a3381c] text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          View All Products
        </button>
      </div>
    </div>
  );
}
