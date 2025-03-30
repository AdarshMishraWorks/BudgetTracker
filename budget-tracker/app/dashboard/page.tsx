"use client";

import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {session ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {session.user?.name} 👋</p>
          
          <button
            onClick={() => signOut()}
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
