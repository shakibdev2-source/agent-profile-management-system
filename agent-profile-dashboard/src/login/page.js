"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", data.username);
        router.push("/");
      } else {
        alert(data.message || "Invalid Credentials");
      }
    } catch (error) {
      alert("Server connection failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-mono flex items-center justify-center">
      <div className="bg-[#1e1e1e] border-2 border-[#8b0000] p-8 w-96 shadow-2xl">
        <h2 className="text-xl text-[#ff4d4d] font-bold mb-6 text-center">
          PHANTOM // SECURE LOGIN
        </h2>
        <form onSubmit={handleLogin}>
          <label className="block text-gray-400 text-sm mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-[#111] border border-gray-700 text-white mb-4"
            required
          />
          <label className="block text-gray-400 text-sm mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-[#111] border border-gray-700 text-white mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#8b0000] text-white font-bold py-2 hover:bg-red-700 transition"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}