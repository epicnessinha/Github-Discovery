import React, { useState } from 'react';
import "./UserAccount.css"

const UserAccount = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, username, email });
  };

  return (
    <div>
      <h1>My Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserAccount;
