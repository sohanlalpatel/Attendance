import React, { useState } from "react";
import { ChevronRight, Zap, Users, Award, Heart } from "lucide-react";
import about from "../../assests/image.webp";
export default function AboutUsSection() {
  const [expandedSection, setExpandedSection] = useState(null);

  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Products Delivered", value: "100K+" },
    { label: "Team Members", value: "200+" },
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Pushing boundaries with cutting-edge solutions for modern challenges",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building genuine connections with our customers and team",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Delivering excellence in every detail of our work",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Purpose",
      description: "Committed to making a positive impact on society",
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg?key=a2g27",
    },
    {
      name: "Priya Singh",
      role: "Design Director",
      image: "/placeholder.svg?key=ks70m",
    },
    { name: "Amit Sharma", role: "CTO", image: "/placeholder.svg?key=obg92" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-gradient-to-br from-white via-white to-[#fef3f0]">
        <div className="max-w-7xl mx-auto">   
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-4 bg-[#fc8408]/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#fc8408]"></div>
                <span className="text-sm font-semibold text-[#a3381c]">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-pretty">
                Building Sacred Moments with{" "}
                <span className="text-[#fc8408]">Purpose</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                POJA was founded with a simple mission: to bring authentic
                spiritual experiences and premium puja products to everyone,
                everywhere. We believe in the power of tradition combined with
                modern convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-[#fc8408] text-white font-semibold rounded-lg hover:bg-[#e07300] transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 border-2 border-[#a3381c] text-[#a3381c] font-semibold rounded-lg hover:bg-[#a3381c]/5 transition-all duration-300">
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc8408] to-[#a3381c] rounded-2xl blur-3xl opacity-20"></div>
                <img
              src={about}
                  alt="POJA Celebration"
                  className="relative rounded-2xl w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#fef3f0] to-white border border-[#fc8408]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#fc8408] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              Our Core <span className="text-[#fc8408]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a
              brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#fc8408] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fc8408]/10 flex items-center justify-center text-[#fc8408] mb-4 group-hover:bg-[#fc8408] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              Meet the <span className="text-[#a3381c]">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#a3381c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#fc8408] font-semibold mb-3">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-gradient-to-r from-[#a3381c] to-[#fc8408]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                To make authentic spiritual experiences and premium puja
                products accessible to everyone, preserving traditions while
                embracing modernity. We strive to be the most trusted platform
                for spiritual wellness and cultural celebrations.
              </p>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <p className="text-white/90">
                  Delivering excellence in every spiritual service
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                To become a global leader in spiritual wellness, creating a
                community where traditions thrive and modern life finds harmony.
                We envision a world where spirituality is accessible, relevant,
                and celebrated.
              </p>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <p className="text-white/90">
                  Building bridges between tradition and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-pretty">
            Ready to Join Our <span className="text-[#fc8408]">Community</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Become part of a movement that celebrates spirituality, tradition,
            and modern wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#fc8408] text-white font-semibold rounded-lg hover:bg-[#e07300] transition-all duration-300 text-lg">
              Explore Products
            </button>
            <button className="px-8 py-4 border-2 border-[#a3381c] text-[#a3381c] font-semibold rounded-lg hover:bg-[#a3381c]/5 transition-all duration-300 text-lg">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
