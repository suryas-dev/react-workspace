import React, { useEffect } from "react";
import { useState } from "react";
import  {useLoaderData} from 'react-router-dom';

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/suryas-dev")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className="text-center bg-gray-100 m-4 text-white p-4">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="avatar"
        className="rounded-full h-32 w-32 mx-auto"
      />
    </div>
  );
}

export default Github;

export const gitHubloader = async () => {
    const response = await fetch("https://api.github.com/users/suryas-dev")
    return response.json();
};

