import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../services/apiCalls/apiCalls";
import "./UserAccount.css"

const UserAccount = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(user.id);
      setUsername(userData.username);
      setEmail(userData.email);
    };

    fetchUser();
  }, [user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser(user.id, { username, email });
      setUser(updatedUser);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <h1 className="text-center mb-4">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Save Changes
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default UserAccount;
