"use client";

import { BarChart3, Clock, Shield, Zap, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Track attendance in real-time with automatic clock-in and clock-out functionality.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive reports and analytics with visual dashboards and trend analysis.",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description:
      "Manage multiple employees with role-based access control and permissions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with data encryption and regular backups.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance for instant data processing and updates.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description:
      "Generate detailed reports to identify patterns and optimize workflows.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#FEFBF8] to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Powerful Features for{" "}
            <span className="gradient-text">Every Team</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to manage attendance efficiently and effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-[#FFCDC9] hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: "linear-gradient(to right, #FD7979, #FDACAC)",
                  }}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
