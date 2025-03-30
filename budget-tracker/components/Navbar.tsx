"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  if(session){
    console.log("logged in")
  }
  
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">TrackIt</Link>
        
        <div className="flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tracker">Tracker</Link>

          {session ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
