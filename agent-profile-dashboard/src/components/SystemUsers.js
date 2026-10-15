export default function SystemUsers({ users }) {
  return (
    <div className="bg-[#111116] border border-blue-900/60 rounded-2xl p-6 shadow-xl">
      <h3 className="text-blue-400 font-extrabold mb-4 border-b border-zinc-800 pb-2">
        👥 SYSTEM USERS (table: users)
      </h3>
      <div className="space-y-2">
        {users && users.length > 0 ? (
          users.map((u) => (
            <div key={u.user_id} className="flex justify-between items-center text-sm py-2 border-b border-zinc-800">
              <span className="text-white font-bold">{u.username}</span>
              <span className="bg-zinc-800 text-amber-400 text-xs px-2 py-0.5 rounded uppercase">{u.role}</span>
            </div>
          ))
        ) : (
          <p className="text-zinc-500 text-sm">No users found.</p>
        )}
      </div>
    </div>
  );
}