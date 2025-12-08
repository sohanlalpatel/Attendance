"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo validation
    if (email !== "demo@example.com" || password !== "demo123") {
      setError("Invalid email or password");
      return;
    }

    setError("");
    alert("Login successful!");
  };

  return (
    <div className="  bg-gradient-to-br from-background via-[#FEFBF8] to-background flex items-center justify-center px-4 py-8">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{
          background: "linear-gradient(to bottom right, #FD7979, transparent)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{
          background: "linear-gradient(to bottom right, #FFCDC9, transparent)",
          animationDelay: "1s",
        }}
      />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#FFCDC9]">
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-3 mb-8 cursor-pointer"
          >
            <div className="w-12 h-12 bg-red-300 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white  font-bold text-xl">A</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">AttendanceFlow</h1>
          </div>

          <h2 className="text-2xl font-bold text-center text-text mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-text-secondary mb-8">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle size={20} className="flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-text-secondary">
            <p>Demo Credentials:</p>
            <p className="font-mono text-xs mt-2 bg-surface p-2 rounded">
              demo@example.com / demo123
            </p>
          </div>

          <p className="text-center text-text-secondary text-sm mt-6">
            Don't have an account?{" "}
            <Link to="#" className="text-primary font-semibold hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
