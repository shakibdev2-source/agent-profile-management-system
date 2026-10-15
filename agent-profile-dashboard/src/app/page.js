"use client";
import { useState } from "react";

export default function Dashboard() {
  const [role, setRole] = useState("admin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [target, setTarget] = useState({
    name: "CLASSIFIED OPERATIVE",
    agentId: "PHANTOM-00X",
    rank: "ELITE STRIKE COMMANDER",
    specialization: "COVERT OPS / NEURAL NET INFILTRATION",
    status: "ACTIVE DEPLOYED"
  });

  const [tempName, setTempName] = useState(target.name);

  const handleSave = () => {
    setTarget({ ...target, name: tempName });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-mono relative overflow-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">
      
      {/* Background Cyber Grid & Radar Sweep Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
      
      {/* Ambient Red Glow Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* TOP COMMAND HEADER */}
      <header className="relative z-10 bg-[#121216]/80 backdrop-blur-md border-b border-red-900/50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow-[0_4px_25px_rgba(220,38,38,0.15)]">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <h1 className="text-sm md:text-base font-bold tracking-widest text-red-500 uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
            SECURE_NET // PHANTOM UNIT E.W.U.
          </h1>
        </div>

        <div className="flex items-center space-x-4 bg-black/40 px-4 py-1.5 rounded-full border border-red-900/40 text-xs tracking-wider">
          <span className="text-gray-400">AUTHORIZATION:</span>
          <span className={`font-extrabold uppercase px-2 py-0.5 rounded text-[10px] ${role === 'admin' ? 'bg-red-950 text-red-400 border border-red-800 animate-pulse' : 'bg-zinc-800 text-zinc-300'}`}>
            {role}
          </span>
          <button 
            onClick={() => setRole(role === "admin" ? "viewer" : "admin")}
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white px-3 py-1 rounded transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.4)] active:scale-95"
          >
            SWITCH ROLE
          </button>
        </div>
      </header>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="relative z-10 max-w-4xl w-full mx-auto p-4 md:p-8 my-auto">
        <div className="bg-[#141419]/90 backdrop-blur-xl border border-red-900/60 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(220,38,38,0.05)] relative overflow-hidden transition-all duration-500 hover:border-red-600/80">
          
          {/* Tactical Corner Decals */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center border-b border-zinc-800/80 pb-6 gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                alt="Target Operative" 
                className="relative w-36 h-44 object-cover rounded-lg border-2 border-red-900/80 shadow-2xl filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="text-center md:text-left space-y-2 flex-1">
              <div className="inline-block bg-red-950/80 text-red-400 border border-red-900 px-3 py-0.5 rounded text-[10px] tracking-widest uppercase font-semibold">
                ENCRYPTED DOSSIER // TOP SECRET
              </div>
              <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 font-extrabold tracking-wider">
                TARGET IDENTITY
              </h2>
              <p className="text-zinc-400 text-xs tracking-widest uppercase">
                PHANTOM UNIT — ELITE TACTICAL WARFARE DIVISION
              </p>
            </div>
          </div>

          {/* Operative Specs Table */}
          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-widest text-red-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              OPERATIVE TELEMETRY & METRICS
            </h3>
            
            <div className="grid grid-cols-1 divide-y divide-zinc-800/60 bg-black/30 rounded-xl border border-zinc-800/80 overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between px-6 py-3.5 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm">Full Name:</span>
                <span className="text-white font-bold tracking-wide">{target.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-3.5 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm">Agent ID:</span>
                <span className="text-red-400 font-bold tracking-widest">{target.agentId}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-3.5 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm">Rank:</span>
                <span className="text-zinc-200">{target.rank}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-3.5 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm">Specialization:</span>
                <span className="text-zinc-300 text-xs sm:text-sm self-center sm:self-auto">{target.specialization}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-3.5 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm">Field Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {target.status}
                </span>
              </div>
            </div>
          </div>

          {/* Admin Actions */}
          {role === "admin" && (
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap justify-end gap-4">
              <button 
                onClick={() => { setTempName(target.name); setIsModalOpen(true); }}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-extrabold px-6 py-2.5 rounded-lg text-xs tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                EDIT PROFILE
              </button>
              <button 
                onClick={() => alert("SECURITY ALERT: Dossier record purged successfully.")}
                className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-red-200 border border-red-700/50 font-extrabold px-6 py-2.5 rounded-lg text-xs tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                PURGE RECORD
              </button>
            </div>
          )}
        </div>
      </main>

      {/* EDIT MODAL WITH GLASSMORPHISM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center p-4 animate-in fade-in duration-300">
          <div className="bg-[#121216] border border-amber-500/50 rounded-2xl p-6 md:p-8 w-full max-w-md shadow-[0_0_50px_rgba(245,158,11,0.15)] relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-500"></div>
            
            <h3 className="text-amber-500 font-bold text-base tracking-widest mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
              OVERRIDE CLASSIFIED DOSSIER
            </h3>
            <p className="text-zinc-400 text-xs mb-6">Modify operative clearance and name parameters.</p>
            
            <label className="block text-zinc-400 text-xs tracking-wider mb-2">TARGET FULL NAME:</label>
            <input 
              type="text" 
              value={tempName} 
              onChange={(e) => setTempName(e.target.value)}
              className="w-full bg-black/60 border border-zinc-700 focus:border-amber-500 rounded-lg p-3 text-white text-sm mb-6 outline-none transition-colors"
            />
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition-colors"
              >
                ABORT
              </button>
              <button 
                onClick={handleSave}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-lg text-xs font-extrabold tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all active:scale-95"
              >
                APPLY OVERRIDE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-4 text-[10px] text-zinc-600 tracking-widest border-t border-zinc-900">
        CONFIDENTIAL INTELLIGENCE SYSTEM // AUTHORIZED E.W.U. PERSONNEL ONLY
      </footer>
    </div>
  );
}
