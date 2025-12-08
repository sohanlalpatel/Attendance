 

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          style={{
            background: "linear-gradient(to right, #FD7979, #FDACAC, #FFCDC9)",
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Transform Your Attendance Management?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies that are already saving time and
              improving accuracy with AttendanceFlow.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started Free <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
