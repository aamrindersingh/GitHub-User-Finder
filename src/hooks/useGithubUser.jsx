import { useState, useEffect } from "react";
import axios from "axios";

function useGitHubUser(username) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = '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' //i dont mind keeping it public :) 
  useEffect(() => {
    if (!username) return;
    
    setLoading(true);
    setError(null);

    axios
      .get(`https://api.github.com/users/${username}`,{
        headers:{
            Authorization:`token ${token}`
        }
      })
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("User not found");
        setLoading(false);
      });

  }, [username]);

  return { userData, loading, error };
}

export default useGitHubUser;
