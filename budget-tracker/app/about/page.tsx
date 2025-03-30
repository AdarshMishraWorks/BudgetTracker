"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white pt-0 px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to TrackIt</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        TrackIt is a powerful budget tracker that helps you manage your expenses,
        set goals, and gain financial control effortlessly.
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.push("/tracker")}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
        >
          Go to Tracker
        </button>
      </div>
    </div>
  );
}
