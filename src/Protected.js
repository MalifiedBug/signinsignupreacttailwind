import { useEffect, useState } from "react";

export default function Protected() {
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const url = "https://signinbackend.onrender.com/profile";
    async function fetchData() {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":token,
          
        },
        
      
      })
        .then((data) => data.json())
        .then((response) => setData(response))
        .catch((error) => alert(error));
    }
    fetchData();
  }, [token]);

  return <div><h1>This is protected Page</h1></div>;
}
