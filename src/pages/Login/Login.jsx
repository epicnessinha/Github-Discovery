import React from "react";
import { useNavigate, Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      const { username, id: userId } = user;
      localStorage.setItem("token", userId);
      setUser({ id: userId, username });
      navigate("/discovery");
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <div className="container">
      <h1 className="red-text">Github Discovery</h1>
      <div className="form">
        <LoginForm onLogin={handleLogin} />
      </div>
      <div className="new">
        <p>Don&apos;t have an account?</p>
        <div className="register">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
