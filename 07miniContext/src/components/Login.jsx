import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName:", userName);
    setUser(userName);
  };
return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button style={{ margin: "2px" }} type="submit">Login</button>
        </form>
    </div>
);
}

export default Login;
