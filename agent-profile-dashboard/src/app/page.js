"use client";
import { useState } from "react";

export default function Dashboard() {
  const [role, setRole] = useState("admin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [target, setTarget] = useState({
    name: "",
    agentId: "",
    rank: "",
    specialization: "",
    status: ""
  });

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-mono">
      <header className="bg-[#8b0000] text-white p-4 flex justify-between items-center border-b-2 border-[#ff4d4d]">
        <span>CLASSIFIED // PHANTOM UNIT E.W.U.</span>
        <div>
          Logged in as: <span className="font-bold uppercase">{role}</span>
          <button 
            onClick={() => setRole(role === "admin" ? "viewer" : "admin")}
            className="ml-4 bg-black text-white px-2 py-1 text-xs rounded"
          >
            Switch Role
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto mt-10 bg-[#1e1e1e] border-2 border-[#8b0000] p-6 shadow-2xl">
        <div className="flex items-center border-b-2 border-dashed border-gray-700 pb-6">
          <img 
            src="/uploads/default-avatar.png" 
            alt="Target" 
            className="w-35 h-40 border-2 border-[#8b0000] object-cover" 
          />
          <div className="ml-6">
            <h2 className="text-2xl text-[#ff4d4d] font-bold">TARGET IDENTITY</h2>
            <p className="text-gray-400 text-sm">PHANTOM UNIT - ELITE WARFARE</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[#ff4d4d] border-b border-gray-700 pb-2 font-bold">OPERATIVE DETAILS</h3>
          <table className="w-full mt-4 border-collapse">
            <tbody>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 py-2 w-1/3">Full Name:</th>
                <td className="py-2">{target.name || "N/A"}</td>
              </tr>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 py-2">Agent ID:</th>
                <td className="py-2">{target.agentId || "N/A"}</td>
              </tr>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 py-2">Rank:</th>
                <td className="py-2">{target.rank || "N/A"}</td>
              </tr>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 py-2">Specialization:</th>
                <td className="py-2">{target.specialization || "N/A"}</td>
              </tr>
              <tr>
                <th className="text-left text-gray-400 py-2">Field Status:</th>
                <td className="py-2 text-green-400 font-bold">{target.status || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {role === "admin" && (
          <div className="mt-8 pt-4 border-t border-gray-700 text-right">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ffaa00] text-black font-bold px-4 py-2 rounded mr-3 hover:bg-yellow-500"
            >
              Edit Profile
            </button>
            <button 
              onClick={() => alert("Record purged")}
              className="bg-[#cc0000] text-white font-bold px-4 py-2 rounded hover:bg-red-700"
            >
              Delete Record
            </button>
          </div>
        )}
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-[#1a1a1a] border-2 border-[#ffaa00] p-6 w-96">
            <h3 className="text-[#ffaa00] font-bold text-lg mb-4">UPDATE CLASSIFIED RECORD</h3>
            <label className="block text-gray-400 text-sm mb-1">Target Full Name:</label>
            <input 
              type="text" 
              value={target.name} 
              onChange={(e) => setTarget({ ...target, name: e.target.value })}
              className="w-full p-2 bg-[#111] border border-gray-700 text-white mb-4"
            />
            <div className="flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-green-600 text-white px-4 py-2 rounded mr-2 font-bold"
              >
                Save
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}