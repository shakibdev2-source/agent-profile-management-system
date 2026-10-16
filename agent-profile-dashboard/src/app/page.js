"use client";
import { useState } from "react";
import TargetIdentity from "../components/TargetIdentity";
import OperativeDetails from "../components/OperativeDetails";
import PsychProfile from "../components/PsychProfile";
import SystemUsers from "../components/SystemUsers";

export default function Dashboard() {
  const [role, setRole] = useState("viewer");
  const [activeTab, setActiveTab] = useState("identity");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dossier, setDossier] = useState({
    identity: {
      agent_id: "PHANTOM-00X",
      full_name: "CLASSIFIED OPERATIVE",
      nick_name: "VIPER",
      gender: "Female",
      date_of_birth: "1998-05-14",
      place_of_birth: "Dhaka",
      nationality: "Bangladeshi",
      languages_spoken: "Bengali, English",
      physical_build: "Athletic",
      height: "5'7\"",
      weight: "58 kg",
      eye_color: "Dark Brown",
      hair_color: "Black",
      distinguishing_marks: "None",
      profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    operative: {
      agent_title: "Elite Strike Commander",
      rank: "ELITE STRIKE COMMANDER",
      unit_division: "Cyber Warfare & Infiltration",
      specialization: "COVERT OPS / NEURAL NET INFILTRATION",
      clearance_level: "Level 5",
      active_since: "2021-03-10",
      field_status: "ACTIVE DEPLOYED",
      known_aliases: "Echo-7",
      last_known_location: "Sector 4 - Restricted Zone"
    },
    psychological: {
      psych_evaluation: "High cognitive stability and absolute composure under extreme hostile pressure.",
      stress_tolerance: "Tier 1 - Elite Maximum",
      behavioral_tendencies: "Calculative and analytical",
      risk_assessment: "Low Hazard"
    },
    users: [
      { user_id: 1, username: "admin", role: "admin", created_at: "2026-10-15" },
      { user_id: 2, username: "viewer", role: "viewer", created_at: "2026-10-15" }
    ]
  });

  const [formData, setFormData] = useState({
    full_name: dossier.identity.full_name,
    rank: dossier.operative.rank,
    specialization: dossier.operative.specialization,
    field_status: dossier.operative.field_status,
    last_known_location: dossier.operative.last_known_location
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setDossier((prev) => ({
      ...prev,
      identity: { ...prev.identity, full_name: formData.full_name },
      operative: {
        ...prev.operative,
        rank: formData.rank,
        specialization: formData.specialization,
        field_status: formData.field_status,
        last_known_location: formData.last_known_location
      }
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-mono relative overflow-x-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141418_1px,transparent_1px),linear-gradient(to_bottom,#141418_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40"></div>

      <header className="relative z-25 bg-[#0d0d11]/90 backdrop-blur-xl border-b border-red-900/40 px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
        <div className="flex items-center space-x-3 mb-3 md:mb-0">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
          </span>
          <h1 className="text-sm md:text-base font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
            SECURE_NET // PHANTOM UNIT E.W.U.
          </h1>
        </div>

        <div className="flex items-center space-x-4 bg-black/60 px-4 py-2 rounded-xl border border-red-900/40 text-xs tracking-wider">
          <span className="text-zinc-400">CLEARANCE:</span>
          <span className={`font-extrabold uppercase px-2.5 py-0.5 rounded text-[10px] tracking-widest ${role === 'admin' ? 'bg-red-950 text-red-400 border border-red-800 animate-pulse' : 'bg-zinc-800 text-zinc-300'}`}>
            {role}
          </span>
          <button 
            onClick={() => setRole(role === "admin" ? "viewer" : "admin")}
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white px-3.5 py-1.5 rounded-lg transition-all font-bold tracking-wider"
          >
            SWITCH ROLE
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl w-full mx-auto p-4 md:p-8 my-6">
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

        <div className="animate-in fade-in duration-300">
          {activeTab === "identity" && <TargetIdentity data={dossier.identity} onEdit={() => setIsModalOpen(true)} role={role} />}
          {activeTab === "operative" && <OperativeDetails data={dossier.operative} onEdit={() => setIsModalOpen(true)} role={role} />}
          {activeTab === "psych" && <PsychProfile data={dossier.psychological} onEdit={() => setIsModalOpen(true)} role={role} />}
          {activeTab === "users" && <SystemUsers users={dossier.users} />}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4">
          <div className="bg-[#121217] border border-amber-500/60 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative">
            <h3 className="text-amber-500 font-extrabold text-base tracking-widest mb-4">
              UPDATE TABLE RECORD (ADMIN ONLY)
            </h3>
            
            <div className="space-y-4 text-xs">
              <div>
                <label className="text-zinc-400">Full Name:</label>
                <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2.5 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Rank:</label>
                <input type="text" name="rank" value={formData.rank} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2.5 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Specialization:</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2.5 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Field Status:</label>
                <input type="text" name="field_status" value={formData.field_status} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2.5 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Last Known Location:</label>
                <input type="text" name="last_known_location" value={formData.last_known_location} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2.5 text-white mt-1"/>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsModalOpen(false)} className="bg-zinc-800 text-zinc-300 px-5 py-2.5 rounded-xl text-xs font-bold">CANCEL</button>
              <button onClick={handleSaveChanges} className="bg-amber-500 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center py-5 text-[10px] text-zinc-600 tracking-[0.2em] border-t border-zinc-900 bg-black/40">
        CONFIDENTIAL INTELLIGENCE SYSTEM // AUTHORIZED E.W.U. PERSONNEL ONLY
      </footer>
    </div>
  );
}
