export default function OperativeDetails({ data, onEdit, role }) {
  if (!data) return <div className="text-zinc-500 text-center py-12 tracking-widest animate-pulse">AWAITING DATABASE RECORD...</div>;

  return (
    <div className="bg-[#111116]/95 backdrop-blur-2xl border border-amber-900/60 rounded-2xl p-6 shadow-xl">
      <span className="bg-amber-950 text-amber-400 border border-amber-900 px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold">
        TABLE: operative_details
      </span>
      <div className="mt-4 space-y-3 text-sm bg-black/40 p-4 rounded-xl border border-zinc-800">
        <div><span className="text-zinc-500">Agent Title:</span> <span className="text-white">{data.agent_title || "N/A"}</span></div>
        <div><span className="text-zinc-500">Rank:</span> <span className="text-white">{data.rank || "N/A"}</span></div>
        <div><span className="text-zinc-500">Unit Division:</span> <span className="text-white">{data.unit_division || "N/A"}</span></div>
        <div><span className="text-zinc-500">Specialization:</span> <span className="text-white">{data.specialization || "N/A"}</span></div>
        <div><span className="text-zinc-500">Clearance Level:</span> <span className="text-amber-400 font-bold">{data.clearance_level || "N/A"}</span></div>
        <div><span className="text-zinc-500">Active Since:</span> <span className="text-zinc-200">{data.active_since || "N/A"}</span></div>
        <div><span className="text-zinc-500">Field Status:</span> <span className="text-emerald-400 font-bold">{data.field_status || "N/A"}</span></div>
        <div><span className="text-zinc-500">Known Aliases:</span> <span className="text-zinc-200">{data.known_aliases || "N/A"}</span></div>
        <div><span className="text-zinc-500">Last Location:</span> <span className="text-red-400 font-bold">{data.last_known_location || "N/A"}</span></div>
      </div>

      {role === "admin" && (
        <div className="mt-6 flex justify-end">
          <button onClick={onEdit} className="bg-amber-600 hover:bg-amber-500 text-black font-extrabold px-6 py-2.5 rounded-xl text-xs tracking-wider shadow-lg transition-all">
            ✏️ EDIT OPERATIVE DETAILS
          </button>
        </div>
      )}
    </div>
  );
}
