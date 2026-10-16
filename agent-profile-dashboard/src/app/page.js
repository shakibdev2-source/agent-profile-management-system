"use client";
import { useState, useEffect } from "react";
import TargetIdentity from "../components/TargetIdentity";
import OperativeDetails from "../components/OperativeDetails";
import PsychProfile from "../components/PsychProfile";
import SystemUsers from "../components/SystemUsers";

export default function Dashboard() {
  const [role, setRole] = useState("viewer");
  const [activeTab, setActiveTab] = useState("identity");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [dossier, setDossier] = useState({
    identity: null,
    operative: null,
    psychological: null,
    users: []
  });

  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/phantom/data")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDossier(data);
          setFormData({
            ...data.identity,
            ...data.operative,
            ...data.psychological
          });
        }
      })
      .catch((err) => console.log("Database offline or waiting for connection:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/phantom/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        alert("Failed to sync changes with MySQL Database.");
        setIsModalOpen(false);
      });
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
        
        <div className="mb-6 bg-gradient-to-r from-red-950/40 via-black to-zinc-950 border border-red-900/50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div>
              <p className="text-[10px] text-zinc-400 tracking-widest uppercase">GLOBAL THREAT ASSESSMENT</p>
              <p className="text-red-400 font-bold tracking-widest text-sm">ALPHA-CRITICAL</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500">ENCRYPTION: AES-256-GCM</span>
            <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold tracking-wider">
              SECURE
            </span>
          </div>
        </div>

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
          <div className="bg-[#121217] border border-amber-500/60 rounded-2xl p-6 md:p-8 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <h3 className="text-amber-500 font-extrabold text-base tracking-widest mb-4">
              COMMIT ALL EDITS TO MYSQL DATABASE (ADMIN PERMISSION)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-zinc-400">Full Name:</label>
                <input type="text" name="full_name" value={formData.full_name || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Nick Name (Alias):</label>
                <input type="text" name="nick_name" value={formData.nick_name || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Profile Picture URL:</label>
                <input type="text" name="profile_picture" value={formData.profile_picture || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Rank:</label>
                <input type="text" name="rank" value={formData.rank || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Specialization:</label>
                <input type="text" name="specialization" value={formData.specialization || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Field Status:</label>
                <input type="text" name="field_status" value={formData.field_status || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Last Known Location:</label>
                <input type="text" name="last_known_location" value={formData.last_known_location || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
              <div>
                <label className="text-zinc-400">Psych Evaluation:</label>
                <input type="text" name="psych_evaluation" value={formData.psych_evaluation || ""} onChange={handleInputChange} className="w-full bg-black/80 border border-zinc-700 rounded p-2 text-white mt-1"/>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsModalOpen(false)} className="bg-zinc-800 text-zinc-300 px-5 py-2.5 rounded-xl text-xs font-bold">CANCEL</button>
              <button onClick={handleSaveChanges} disabled={loading} className="bg-amber-500 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-lg">
                {loading ? "SAVING..." : "COMMIT TO DATABASE"}
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
