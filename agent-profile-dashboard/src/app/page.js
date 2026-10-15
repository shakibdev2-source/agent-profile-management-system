"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [role, setRole] = useState("admin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logs, setLogs] = useState([
    "INITIALIZING SECURE_NET PROTOCOL v4.8...",
    "ESTABLISHING ENCRYPTED TUNNEL TO E.W.U. SERVERS...",
    "BIOMETRIC SIGNATURE VERIFIED: ACCESS GRANTED."
  ]);
  
  const [target, setTarget] = useState({
    name: "CLASSIFIED OPERATIVE",
    agentId: "PHANTOM-00X",
    rank: "ELITE STRIKE COMMANDER",
    specialization: "COVERT OPS / NEURAL NET INFILTRATION",
    status: "ACTIVE DEPLOYED",
    threatLevel: "ALPHA-CRITICAL"
  });

  const [tempName, setTempName] = useState(target.name);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamps = new Date().toISOString().split('T')[1].slice(0, 8);
      const fakeActions = [
        "PING NODE 127.0.0.1: SECURE [0.4ms]",
        "ENCRYPTION KEY ROTATION SUCCESSFUL",
        "SATELLITE UPLINK STABLE - PHANTOM SECTOR",
        "ZERO-DAY FIREWALL SHIELD: ACTIVE"
      ];
      const randomLog = `[${timestamps}] ${fakeActions[Math.floor(Math.random() * fakeActions.length)]}`;
      setLogs(prev => [randomLog, ...prev.slice(0, 4)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = () => {
    setTarget({ ...target, name: tempName });
    setIsModalOpen(false);
    setLogs(prev => [`[SYSTEM] OPERATIVE DOSSIER UPDATED: ${tempName}`, ...prev]);
  };

  const triggerNeuralSync = () => {
    setIsSyncing(true);
    setLogs(prev => [`[WARNING] INITIATING NEURAL SYNC OVERRIDE...`, ...prev]);
    setTimeout(() => {
      setIsSyncing(false);
      setLogs(prev => [`[SUCCESS] NEURAL LINK SYNCHRONIZED ACROSS NODES.`, ...prev]);
      alert("NEURAL SYNC COMPLETE: Target telemetry refreshed.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-mono relative overflow-x-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141418_1px,transparent_1px),linear-gradient(to_bottom,#141418_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <header className="relative z-20 bg-[#0d0d11]/90 backdrop-blur-xl border-b border-red-900/40 px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-[0_4px_30px_rgba(220,38,38,0.2)]">
        <div className="flex items-center space-x-3 mb-3 md:mb-0">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
          </span>
          <h1 className="text-sm md:text-base font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
            SECURE_NET // PHANTOM UNIT E.W.U.
          </h1>
        </div>

        <div className="flex items-center space-x-4 bg-black/60 px-4 py-2 rounded-xl border border-red-900/40 text-xs tracking-wider shadow-inner">
          <span className="text-zinc-400">CLEARANCE:</span>
          <span className={`font-extrabold uppercase px-2.5 py-0.5 rounded text-[10px] tracking-widest ${role === 'admin' ? 'bg-red-950 text-red-400 border border-red-800 animate-pulse' : 'bg-zinc-800 text-zinc-300'}`}>
            {role}
          </span>
          <button 
            onClick={() => setRole(role === "admin" ? "viewer" : "admin")}
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white px-3.5 py-1.5 rounded-lg transition-all duration-300 shadow-[0_0_12px_rgba(220,38,38,0.5)] active:scale-95 font-bold tracking-wider"
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
              <p className="text-red-400 font-bold tracking-widest text-sm">{target.threatLevel}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500">ENCRYPTION: AES-256-GCM</span>
            <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold tracking-wider">
              SECURE
            </span>
          </div>
        </div>

        <div className="bg-[#111116]/95 backdrop-blur-2xl border border-red-900/60 rounded-2xl p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(220,38,38,0.03)] relative overflow-hidden transition-all duration-500">
          
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>

          <div className="flex flex-col md:flex-row items-center border-b border-zinc-800/80 pb-8 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-amber-600 to-red-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                alt="Target Operative" 
                className="relative w-40 h-48 object-cover rounded-xl border-2 border-red-900/80 shadow-2xl filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="text-center md:text-left space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 bg-red-950/80 text-red-400 border border-red-900/80 px-3.5 py-1 rounded-md text-[10px] tracking-widest uppercase font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                CLASSIFIED DOSSIER // E.W.U. SPECIAL FORCES
              </div>
              <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 font-extrabold tracking-wider drop-shadow-md">
                TARGET IDENTITY
              </h2>
              <p className="text-zinc-400 text-xs tracking-[0.2em] uppercase font-semibold">
                PHANTOM UNIT — ELITE TACTICAL WARFARE DIVISION
              </p>
            </div>

            {role === "admin" && (
              <button 
                onClick={triggerNeuralSync}
                disabled={isSyncing}
                className="bg-black/80 hover:bg-red-950 text-red-400 border border-red-800/80 px-4 py-3 rounded-xl text-xs font-bold tracking-widest transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:scale-105 active:scale-95 flex flex-col items-center gap-1"
              >
                <span>{isSyncing ? "SYNCING..." : "NEURAL SYNC"}</span>
                <span className="text-[9px] text-zinc-500">BIOMETRIC LINK</span>
              </button>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-red-500 font-extrabold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              OPERATIVE TELEMETRY & METRICS
            </h3>
            
            <div className="grid grid-cols-1 divide-y divide-zinc-800/60 bg-black/40 rounded-xl border border-zinc-800/80 overflow-hidden shadow-inner">
              <div className="flex flex-col sm:flex-row justify-between px-6 py-4 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm font-medium">Full Name:</span>
                <span className="text-white font-bold tracking-wide">{target.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-4 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm font-medium">Agent ID:</span>
                <span className="text-red-400 font-bold tracking-widest">{target.agentId}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-4 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm font-medium">Rank:</span>
                <span className="text-zinc-200 font-semibold">{target.rank}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-4 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm font-medium">Specialization:</span>
                <span className="text-zinc-300 text-xs sm:text-sm self-center sm:self-auto font-mono">{target.specialization}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between px-6 py-4 hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-400 text-sm font-medium">Field Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  {target.status}
                </span>
              </div>
            </div>
          </div>

          {role === "admin" && (
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap justify-end gap-4">
              <button 
                onClick={() => { setTempName(target.name); setIsModalOpen(true); }}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-extrabold px-6 py-3 rounded-xl text-xs tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                EDIT PROFILE
              </button>
              <button 
                onClick={() => alert("SECURITY ALERT: Dossier record purged successfully.")}
                className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-red-200 border border-red-700/50 font-extrabold px-6 py-3 rounded-xl text-xs tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                PURGE RECORD
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 bg-[#0a0a0e] border border-zinc-800 rounded-xl p-4 font-mono text-xs shadow-xl relative">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
            <span className="text-red-500 font-bold tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              LIVE_SYSTEM_LOGS // STREAM
            </span>
            <span className="text-[10px] text-zinc-500">ENCRYPTION: ACTIVE</span>
          </div>
          <div className="space-y-1.5 text-zinc-400 max-h-24 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-red-600 font-bold">&gt;</span>
                <span className={index === 0 ? "text-emerald-400 font-semibold" : "text-zinc-400"}>{log}</span>
              </div>
            ))}
          </div>
        </div>

      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4 animate-in fade-in duration-300">
          <div className="bg-[#121217] border border-amber-500/60 rounded-2xl p-6 md:p-8 w-full max-w-md shadow-[0_0_60px_rgba(245,158,11,0.2)] relative">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-500"></div>
            
            <h3 className="text-amber-500 font-extrabold text-base tracking-widest mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
              OVERRIDE CLASSIFIED DOSSIER
            </h3>
            <p className="text-zinc-400 text-xs mb-6">Modify operative clearance and identity parameters.</p>
            
            <label className="block text-zinc-400 text-xs tracking-wider mb-2 font-semibold">TARGET FULL NAME:</label>
            <input 
              type="text" 
              value={tempName} 
              onChange={(e) => setTempName(e.target.value)}
              className="w-full bg-black/80 border border-zinc-700 focus:border-amber-500 rounded-xl p-3.5 text-white text-sm mb-6 outline-none transition-colors shadow-inner"
            />
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors"
              >
                ABORT
              </button>
              <button 
                onClick={handleSave}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-95"
              >
                APPLY OVERRIDE
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="relative z-10 text-center py-5 text-[10px] text-zinc-600 tracking-[0.2em] border-t border-zinc-900/80 bg-black/40">
        CONFIDENTIAL INTELLIGENCE SYSTEM // AUTHORIZED E.W.U. PERSONNEL ONLY // SECURE_NET v4.8
      </footer>
    </div>
  );
}
