export default function PsychProfile({ data, onEdit, role }) {
  if (!data) return <div className="text-zinc-500 text-center py-12 tracking-widest animate-pulse">AWAITING DATABASE RECORD...</div>;

  return (
    <div className="bg-[#111116]/95 backdrop-blur-2xl border border-purple-900/60 rounded-2xl p-6 shadow-xl">
      <span className="bg-purple-950 text-purple-400 border border-purple-900 px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold">
        TABLE: psychological_profile
      </span>
      <div className="mt-4 space-y-3 text-sm bg-black/40 p-4 rounded-xl border border-zinc-800">
        <div><span className="text-zinc-500 block mb-1">Psych Evaluation:</span> <span className="text-zinc-200 bg-zinc-900/80 p-3 rounded block border border-zinc-800">{data.psych_evaluation || "N/A"}</span></div>
        <div><span className="text-zinc-500">Stress Tolerance:</span> <span className="text-emerald-400 font-bold">{data.stress_tolerance || "N/A"}</span></div>
        <div><span className="text-zinc-500">Behavioral Tendencies:</span> <span className="text-zinc-200">{data.behavioral_tendencies || "N/A"}</span></div>
        <div><span className="text-zinc-500">Risk Assessment:</span> <span className="text-amber-400 font-bold">{data.risk_assessment || "N/A"}</span></div>
      </div>

      {role === "admin" && (
        <div className="mt-6 flex justify-end">
          <button onClick={onEdit} className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs tracking-wider shadow-lg transition-all">
            ✏️ EDIT PSYCH PROFILE
          </button>
        </div>
      )}
    </div>
  );
}
