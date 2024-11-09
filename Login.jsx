import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {}
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          required
        />
        
        {}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          required
        />

        {}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
