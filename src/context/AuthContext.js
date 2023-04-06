// src/context/AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [userBookmarks, setUserBookmarks] = useState({});

  const addToBookmarks = (userId, repo) => {
    setUserBookmarks((prevUserBookmarks) => ({
      ...prevUserBookmarks,
      [userId]: [...(prevUserBookmarks[userId] || []), repo],
    }));
  };

  const removeFromBookmarks = (userId, repoId) => {
    setUserBookmarks((prevUserBookmarks) => ({
      ...prevUserBookmarks,
      [userId]: (prevUserBookmarks[userId] || []).filter((repo) => repo.id !== repoId),
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUserId,
        setLoggedInUserId,
        userBookmarks,
        addToBookmarks,
        removeFromBookmarks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
