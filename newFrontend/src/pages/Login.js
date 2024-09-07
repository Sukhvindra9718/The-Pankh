import React, { useState } from "react";
import "../style/Login.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://thepankh.info/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Login successful");
      navigate("/dashboard");
      setToken(data.token);
      // Perform any further actions such as redirecting the user
    } else {
      alert(data.message);
    }
  };

  const setToken = (token) => {
    document.cookie = `token=${token}`;
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
