export default function PsychProfile({ data }) {
  return (
    <div className="bg-[#111116] border border-purple-900/60 rounded-2xl p-6 shadow-xl">
      <h3 className="text-purple-400 font-extrabold mb-4 border-b border-zinc-800 pb-2">
        🧠 PSYCHOLOGICAL PROFILE (table: psychological_profile)
      </h3>
      <div className="space-y-3 text-sm">
        <div><span className="text-zinc-500 block">Evaluation:</span> <span className="text-zinc-200">{data?.psych_evaluation || "N/A"}</span></div>
        <div><span className="text-zinc-500 block">Stress Tolerance:</span> <span className="text-emerald-400 font-bold">{data?.stress_tolerance || "N/A"}</span></div>
      </div>
    </div>
  );
}