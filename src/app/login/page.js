"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-6 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
