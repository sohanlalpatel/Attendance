"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"

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
    <section className="relative max-w-7xl mx-auto   flex items-center justify-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-15" />

      {/* Simplified gradient orbs */}
      <div
        className="absolute top-20 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        style={{ background: "linear-gradient(to bottom right, #FD7979, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        style={{ background: "linear-gradient(to top, #FFCDC9, transparent)", animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-red-100 backdrop-blur-sm mb-6">
            <CheckCircle2 size={16} className="text-red-500" />
            <span className="text-sm font-medium text-gray-700">Trusted by 500+ companies</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight text-gray-900">
            Modern Attendance <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(to right, #FD7979, #FDACAC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Made Simple
            </span>
          </h1>

          <p className="text-lg text-gray-600 text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time attendance tracking with intelligent analytics. Manage your workforce effortlessly with our
            all-in-one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-10 bg-gradient-to-r from-red-500 to-orange-300" />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">AttendanceFlow</div>
                    <div className="text-xs text-gray-500">Dashboard</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-red-200" />
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Present Today", value: "847", change: "+12%" },
                  { label: "Absent", value: "43", change: "-8%" },
                  { label: "On Leave", value: "28", change: "+2%" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-red-500 font-medium mt-1">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
