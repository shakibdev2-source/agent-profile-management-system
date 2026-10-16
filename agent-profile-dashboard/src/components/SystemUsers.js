export default function SystemUsers({ users }) {
  return (
    <div className="bg-[#111116]/95 backdrop-blur-2xl border border-blue-900/60 rounded-2xl p-6 shadow-xl">
      <span className="bg-blue-950 text-blue-400 border border-blue-900 px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold">
        TABLE: users
      </span>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-500 text-xs">
              <th className="py-2 px-3">USER ID</th>
              <th className="py-2 px-3">USERNAME</th>
              <th className="py-2 px-3">ROLE</th>
              <th className="py-2 px-3">CREATED AT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-sm">
            {users && users.length > 0 ? (
              users.map((u) => (
                <tr key={u.user_id}>
                  <td className="py-2 px-3 text-zinc-500">#{u.user_id}</td>
                  <td className="py-2 px-3 text-white font-bold">{u.username}</td>
                  <td className="py-2 px-3"><span className="bg-zinc-800 text-amber-400 px-2 py-0.5 rounded text-xs uppercase">{u.role}</span></td>
                  <td className="py-2 px-3 text-zinc-400 text-xs">{u.created_at || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center text-zinc-500 text-xs">NO USERS FOUND IN DATABASE</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
