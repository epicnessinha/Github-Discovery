// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);
const [userBookmarks, setUserBookmarks] = useState({});


const addToBookmarks = (repo) => {
  if (!userBookmarks[loggedInUserId]?.some((bookmark) => bookmark.id === repo.id)) {
    setUserBookmarks({
      ...userBookmarks,
      [loggedInUserId]: [...(userBookmarks[loggedInUserId] || []), repo],
    });
    saveToLocal(`userBookmarks_${loggedInUserId}`, [
      ...(userBookmarks[loggedInUserId] || []),
      repo,
    ]);
  }
};

const removeFromBookmarks = (repo) => {
  const updatedBookmarks = (userBookmarks[loggedInUserId] || []).filter(
    (bookmark) => bookmark.id !== repo.id
  );
  setUserBookmarks({ ...userBookmarks, [loggedInUserId]: updatedBookmarks });
  saveToLocal(`userBookmarks_${loggedInUserId}`, updatedBookmarks);
};


  return (
    <AuthContext.Provider
    value={{
      user,
      setUser,
      loggedInUserId,
      setLoggedInUserId,
      userBookmarks,
      setUserBookmarks,
      addToBookmarks,
      removeFromBookmarks,
    }}
  >
    {children}
  </AuthContext.Provider>
  
  );
};

export default AuthContextProvider;
