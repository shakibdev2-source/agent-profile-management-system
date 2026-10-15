export default function TargetIdentity({ data }) {
  return (
    <div className="bg-[#111116] border border-red-900/60 rounded-2xl p-6">
      <h3 className="text-red-500 font-bold mb-4">TARGET IDENTITY</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>Name: {data.full_name}</div>
        <div>Agent ID: {data.agent_id}</div>
        <div>Nationality: {data.nationality}</div>
        <div>Gender: {data.gender}</div>
      </div>
    </div>
  );
}