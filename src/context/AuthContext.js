import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [userBookmarks, setUserBookmarks] = useState({});
  const [user, setUser] = useState(null);

  const handleAddToBookmarks = (repo) => {
    const updatedBookmarks = { ...userBookmarks };
    if (!updatedBookmarks[loggedInUserId]) {
      updatedBookmarks[loggedInUserId] = [];
    }
    const existingBookmark = updatedBookmarks[loggedInUserId].find((bookmark) => bookmark.id === repo.id);
    if (!existingBookmark) {
      updatedBookmarks[loggedInUserId].push(repo);
      setUserBookmarks(updatedBookmarks);
      saveToLocal(`userBookmarks_${loggedInUserId}`, updatedBookmarks[loggedInUserId]);
    }
  };

  const handleRemoveFromBookmarks = (repo) => {
    const updatedBookmarks = { ...userBookmarks };
    if (updatedBookmarks[loggedInUserId]) {
      updatedBookmarks[loggedInUserId] = updatedBookmarks[loggedInUserId].filter((bookmark) => bookmark.id !== repo.id);
      setUserBookmarks(updatedBookmarks);
      saveToLocal(`userBookmarks_${loggedInUserId}`, updatedBookmarks[loggedInUserId]);
    }
  };

  const value = {
    user,
    setUser,
    loggedInUserId,
    setLoggedInUserId,
    userBookmarks,
    addToBookmarks: handleAddToBookmarks,
    removeFromBookmarks: handleRemoveFromBookmarks,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
