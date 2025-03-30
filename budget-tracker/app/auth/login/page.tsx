"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import  github from "./github.png";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Login to TrackIt</h1>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-600 text-white rounded w-full max-w-md text-center">
          {error}
        </div>
      )}

      {/* Email & Password Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* OR Divider */}
      <div className="my-4 text-gray-400">or</div>

      {/* GitHub Login Button */}
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center gap-3 "
      >
        <Image 
          src={github} 
          alt="GitHub logo" 
          width={24} 
          height={24} 
        />
      </button>

      {/* Additional Links */}
      <div className="mt-4 flex flex-col items-center gap-2 text-sm text-gray-400">
        <p>
          Not registered?{" "}
          <Link href="/auth/signup" className="text-blue-400 hover:underline">
            Sign up here
          </Link>
        </p>
        <Link href="/auth/reset-password" className="text-blue-400 hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
