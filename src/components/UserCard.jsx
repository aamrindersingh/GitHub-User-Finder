function UserCard({ name, avatar_url, public_repos, followers, location }) {
    return (

<div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
  <div className="flex flex-col items-center gap-4">
    
    <img src={avatar_url} alt="User Avatar" className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md" />
    
    <h2 className="text-2xl font-bold text-blue-700">{name || "No Name"}</h2>
    <p className="text-gray-500 text-lg">📍 {location || "Private"}</p>

    <div className="flex justify-around w-full text-center text-gray-700">
      <div>
        <p className="text-xl font-semibold">{public_repos}</p>
        <p className="text-sm">Repos</p>
      </div>
      <div>
        <p className="text-xl font-semibold">{followers}</p>
        <p className="text-sm">Followers</p>
      </div>
    </div>
  </div>
</div>

    );
  }
  
  export default UserCard;
  