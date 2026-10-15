export default function OperativeDetails({ data }) {
  return (
    <div className="bg-[#111116] border border-amber-900/60 rounded-2xl p-6 shadow-xl">
      <h3 className="text-amber-500 font-extrabold mb-4 border-b border-zinc-800 pb-2">
        🛡️ OPERATIVE DETAILS (table: operative_details)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div><span className="text-zinc-500">Title:</span> <span className="text-zinc-200">{data?.agent_title || "N/A"}</span></div>
        <div><span className="text-zinc-500">Rank:</span> <span className="text-zinc-200">{data?.rank || "N/A"}</span></div>
        <div><span className="text-zinc-500">Specialization:</span> <span className="text-zinc-200">{data?.specialization || "N/A"}</span></div>
        <div><span className="text-zinc-500">Field Status:</span> <span className="text-emerald-400 font-bold">{data?.field_status || "N/A"}</span></div>
        <div><span className="text-zinc-500">Last Location:</span> <span className="text-red-400 font-bold">{data?.last_known_location || "N/A"}</span></div>
      </div>
    </div>
  );
}