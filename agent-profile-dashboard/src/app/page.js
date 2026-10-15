"use client";
import { useState } from "react";
import TargetIdentity from "@/components/TargetIdentity";
import OperativeDetails from "@/components/OperativeDetails";
import PsychProfile from "@/components/PsychProfile";
import SystemUsers from "@/components/SystemUsers";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("identity");

  const identityData = { 
    agent_id: "BRAVO-001", 
    full_name: "Sadia Haque Tasnim", 
    nick_name: "PHANTOM VIXEN", 
    gender: "Female", 
    date_of_birth: "1998-05-14", 
    nationality: "Bangladeshi" 
  };

  const operativeData = { 
    agent_title: "Elite Strike Commander", 
    rank: "CIO (Chief Intelligence Officer)", 
    specialization: "SPY Expert & Neural Net Infiltration", 
    field_status: "ACTIVE DEPLOYED", 
    last_known_location: "Sector 4 - Restricted Zone" 
  };

  const psychData = { 
    psych_evaluation: "High cognitive stability and absolute composure under extreme hostile pressure.", 
    stress_tolerance: "Tier 1 - Elite Maximum" 
  };

  const usersList = [
    { user_id: 1, username: "admin", role: "admin" }, 
    { user_id: 2, username: "viewer", role: "viewer" }
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-white p-6 md:p-10 font-mono flex flex-col justify-between selection:bg-red-600 selection:text-white">
      
      <div>
        <header className="mb-8 border-b border-red-900/50 pb-4 flex justify-between items-center">
          <h1 className="text-red-500 font-extrabold text-sm md:text-base tracking-[0.2em] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            SECURE_NET // PHANTOM UNIT E.W.U.
          </h1>
          <span className="text-xs text-zinc-500">SYSTEM: ONLINE</span>
        </header>

        <nav className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-4">
          <button 
            onClick={() => setActiveTab("identity")} 
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${activeTab === "identity" ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}
          >
            📁 TARGET IDENTITY
          </button>
          <button 
            onClick={() => setActiveTab("operative")} 
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${activeTab === "operative" ? "bg-amber-600 text-black font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.5)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}
          >
            🛡️ OPERATIVE DETAILS
          </button>
          <button 
            onClick={() => setActiveTab("psych")} 
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${activeTab === "psych" ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}
          >
            🧠 PSYCH PROFILE
          </button>
          <button 
            onClick={() => setActiveTab("users")} 
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${activeTab === "users" ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}
          >
            👥 SYSTEM USERS
          </button>
        </nav>

        <main className="max-w-4xl mx-auto animate-in fade-in duration-300">
          {activeTab === "identity" && <TargetIdentity data={identityData} />}
          {activeTab === "operative" && <OperativeDetails data={operativeData} />}
          {activeTab === "psych" && <PsychProfile data={psychData} />}
          {activeTab === "users" && <SystemUsers users={usersList} />}
        </main>
      </div>

      <footer className="text-center py-6 text-[10px] text-zinc-600 tracking-[0.2em] border-t border-zinc-900 mt-12">
        CONFIDENTIAL INTELLIGENCE SYSTEM // AUTHORIZED E.W.U. PERSONNEL ONLY
      </footer>
    </div>
  );
}
