// Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/apiCalls/apiCalls";
import "./Login.css";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = await login(username, password);
      localStorage.setItem("token", userId);
      setUser({ username, password });
      navigate("/discovery");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <p>Don&apos;t have an account?</p>
        <div className="register">
        <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
