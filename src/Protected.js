import { useEffect, useState } from "react";

export default function Protected() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    const url = `https://signinbackend.onrender.com/profile/${email}`;
    async function fetchData() {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":`${token}`,          
        },      
      })
        .then((data) => console.log(data))
        .then((response) => setData(response))
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [token,email]);

  return <div className="flex justify-center m-20"><h1 className="text-6xl ">This is protected Page{data}</h1></div>;
}
