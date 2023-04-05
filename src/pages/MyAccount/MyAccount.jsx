import React, { useState, useEffect } from "react";
import { getUser } from "../../services/apiCalls";
import EditForm from "../../components/EditForm/EditForm";
import Header from "../../components/Header/Header"
import "./MyAccount.css";

const MyAccount = ({ user, setUser }) => {
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

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <Header isLoggedIn={true} />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <EditForm
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            userId={user.id}
            setUser={setUser}
            setErrorMessage={setErrorMessage}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default MyAccount;
