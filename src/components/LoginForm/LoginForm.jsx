import React, { useState } from "react";
import { validateLoginForm } from "../../utils/validations";
import { login } from "../../services/apiCalls"
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateLoginForm(username, password);
    if (validationError !== "no error") {
      setErrorMessage(validationError);
    } else {
      try {
        const userId = await login(username, password);
        setErrorMessage("");
        onLogin({ id: userId, username: username }); // Change this line
      } catch (error) {
        if (error.message === "Invalid username or password") {
          setErrorMessage("Invalid username or password. Please try again.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    }
  };
  
  
  return (
    <div className="LoginForm">
      <h1>Login</h1>
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
