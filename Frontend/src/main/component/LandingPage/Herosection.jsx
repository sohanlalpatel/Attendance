"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import rightimg from "../../../assests/img3.png"

export default function HeroSection() {
const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
const particles = [];


    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.opacity += (Math.random() - 0.5) * 0.01
        particle.opacity = Math.max(0.1, Math.min(0.5, particle.opacity))

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = `rgba(253, 121, 121, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section
      className="relative w-full pt-24 lg:h-150 pb-5 overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1649336321305-3fe272852c94?q=80&w=1170&auto=format&fit=crop')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  " />

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-red-400/40 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-300/30 blur-3xl rounded-full animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ----------- FLEX LAYOUT (Desktop) ----------- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          {/* ------- LEFT TEXT ------- */}
          <div className="max-w-xl text-black text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/40 backdrop-blur-sm mb-6 mx-auto lg:mx-0">
              <CheckCircle2 size={16} className="text-black" />
              <span className="text-sm font-medium">
                Trusted by 500+ companies
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
              Modern Attendance <br />
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(to right, #FF8A8A, #FFC9C9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Made Simple
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed drop-shadow-lg">
              Real-time attendance tracking with intelligent analytics. Manage
              your team effortlessly with our all-in-one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>

              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-300 text-black font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* ------- RIGHT 3D DASHBOARD ------- */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 group">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-30  group-hover:opacity-40 transition-all duration-300" />
            <div>
              <img src={rightimg} alt="" className="  md:h-120   w-auto" />
            </div>

            {/* <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 transform group-hover:-rotate-1 group-hover:scale-[1.02] transition-all duration-500">
              <div className="space-y-4 text-white">
                 <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 shadow-lg" />
                    <div>
                      <div className="text-sm md:text-lg font-semibold">
                        AttendanceFlow
                      </div>
                      <div className="text-xs md:text-base text-gray-200">Dashboard</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white/40"
                      />
                    ))}
                  </div>
                </div>

                 <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Present Today", value: "847", change: "+12%" },
                    { label: "Absent", value: "43", change: "-8%" },
                    { label: "On Leave", value: "28", change: "+2%" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center"
                    >
                      <div className="text-xs text-gray-100 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-red-200 font-medium mt-1">
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
