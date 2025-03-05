import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import useGitHubUser from "../hooks/useGithubUser";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [username, setUsername] = useState(""); 
  const { userData, loading, error } = useGitHubUser(username); //if username is empty other things dont load.

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
     <h1 className="text-2xl font-bold text-blue-600 mb-4 border border-blue-600 p-3 rounded-lg shadow-md">
  GitHub User Finder
</h1>
        

      <SearchBar setUsername={setUsername} />

      {loading && <Loader />} 

      {error && <ErrorMessage message={error} />}

      {userData && <UserCard {...userData} />}
    </div>
  );
}

export default Home;
