export default function TargetIdentity({ data, onEdit }) {
  if (!data) return null;
  return (
    <div className="bg-[#111116]/95 backdrop-blur-2xl border border-red-900/60 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center border-b border-zinc-800 pb-6 gap-6">
        <img 
          src={data.profile_picture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"} 
          alt="Target" 
          className="w-36 h-44 object-cover rounded-xl border-2 border-red-900 shadow-xl filter grayscale contrast-125"
        />
        <div className="text-center md:text-left space-y-2 flex-1">
          <span className="bg-red-950 text-red-400 border border-red-900 px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold">
            TABLE: target_identity
          </span>
          <h2 className="text-3xl text-white font-extrabold tracking-wider">{data.full_name || "N/A"}</h2>
          <p className="text-red-400 text-xs tracking-widest">AGENT ID: {data.agent_id || "N/A"} | ALIAS: {data.nick_name || "N/A"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-black/40 p-5 rounded-xl border border-zinc-800 text-sm">
        <div><span className="text-zinc-500">Gender:</span> <span className="text-zinc-200">{data.gender || "N/A"}</span></div>
        <div><span className="text-zinc-500">Date of Birth:</span> <span className="text-zinc-200">{data.date_of_birth || "N/A"}</span></div>
        <div><span className="text-zinc-500">Place of Birth:</span> <span className="text-zinc-200">{data.place_of_birth || "N/A"}</span></div>
        <div><span className="text-zinc-500">Nationality:</span> <span className="text-zinc-200">{data.nationality || "N/A"}</span></div>
        <div><span className="text-zinc-500">Languages:</span> <span className="text-zinc-200">{data.languages_spoken || "N/A"}</span></div>
        <div><span className="text-zinc-500">Physical Build:</span> <span className="text-zinc-200">{data.physical_build || "N/A"} ({data.height || "0"}, {data.weight || "0"})</span></div>
        <div><span className="text-zinc-500">Eye / Hair:</span> <span className="text-zinc-200">{data.eye_color || "N/A"} / {data.hair_color || "N/A"}</span></div>
        <div><span className="text-zinc-500">Distinguishing Marks:</span> <span className="text-zinc-200">{data.distinguishing_marks || "N/A"}</span></div>
      </div>
    </div>
  );
}
