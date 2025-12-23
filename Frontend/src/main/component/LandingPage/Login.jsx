"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AlertCircle } from "lucide-react";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    role: "EMPLOYEE",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= LOGIN =================
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await axios.post("/api/user/login", {
        email: formData.email,
        password: formData.password,
      });

      // ✅ Session Storage
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= REGISTER =================
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      await axios.post("/api/user/register", formData);

      setMessage("Registration successful. Please login.");
      setIsRegister(false);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= FORGOT PASSWORD =================
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      await axios.post("/api/user/forgot-password", {
        email: formData.email,
      });

      setMessage("Password reset link sent to your email");
      setIsForgot(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-[#FEFBF8] to-background px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isForgot
            ? "Forgot Password"
            : isRegister
            ? "Create Account"
            : "Welcome Back"}
        </h2>

        <p className="text-center text-gray-500 mb-6">
          {isForgot
            ? "Enter your registered email"
            : isRegister
            ? "Register to continue"
            : "Login to your account"}
        </p>

        {(error || message) && (
          <div
            className={`flex gap-2 p-3 mb-4 rounded-lg text-sm ${
              error
                ? "bg-red-50 border border-red-200 text-red-600"
                : "bg-green-50 border border-green-200 text-green-600"
            }`}
          >
            <AlertCircle size={18} />
            <p>{error || message}</p>
          </div>
        )}

        <form
          onSubmit={
            isForgot
              ? handleForgotPassword
              : isRegister
              ? handleRegister
              : handleLogin
          }
          className="space-y-4"
        >
          {isRegister && (
            <>
              <input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                name="gender"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          {!isForgot && (
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-red-400 text-white rounded-lg font-semibold"
          >
            {loading
              ? "Please wait..."
              : isForgot
              ? "Send Reset Link"
              : isRegister
              ? "Register"
              : "Login"}
          </button>
        </form>

        {!isRegister && !isForgot && (
          <p
            className="text-center text-sm mt-4 text-red-500 cursor-pointer"
            onClick={() => setIsForgot(true)}
          >
            Forgot password?
          </p>
        )}

        <p className="text-center text-sm mt-6">
          {isRegister ? "Already have an account?" : "Not registered?"}{" "}
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setIsForgot(false);
              setError("");
              setMessage("");
            }}
            className="text-red-500 font-semibold"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
