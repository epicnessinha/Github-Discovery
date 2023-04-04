// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmarks = (repo) => {
    if (!bookmarks.some((bookmark) => bookmark.id === repo.id)) {
      setBookmarks([...bookmarks, repo]);
    }
  };

  const removeFromBookmarks = (repo) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== repo.id));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, bookmarks, addToBookmarks, removeFromBookmarks }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
