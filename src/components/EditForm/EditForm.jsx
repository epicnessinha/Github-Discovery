import React from "react";
import { updateUser, getUser } from "../../services/apiCalls";
import { validateEditForm } from "../../utils/validations";
import "./EditForm.css";

const EditForm = ({
  username,
  setUsername,
  email,
  setEmail,
  userId,
  setUser,
  setErrorMessage,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationError = validateEditForm(username);
  
    if (validationError !== "no error") {
      setErrorMessage(validationError);
      return;
    }
  
    try {
      const existingUser = await getUser(userId);
      const updatedUserData = { ...existingUser, username, email };
      const updatedUser = await updateUser(userId, updatedUserData);
      setUser((prevUser) => ({ ...prevUser, username: updatedUser.username, email: updatedUser.email }));
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="EditForm">
      <h1>Edit User</h1>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter your username"
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
          required
          placeholder="Enter your email address"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Save Changes
      </button>
    </form>
  );
};

export default EditForm;
