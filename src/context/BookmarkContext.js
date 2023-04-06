import React, { createContext, useState } from "react";
import { loadFromLocal, saveToLocal } from "../utils/localStorage";

export const BookmarkContext = createContext();

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(loadFromLocal("bookmarks") || []);

  const addToBookmarks = (repo) => {
    if (!bookmarks.some((bookmark) => bookmark.id === repo.id)) {
      const updatedBookmarks = [...bookmarks, repo];
      setBookmarks(updatedBookmarks);
      saveToLocal("bookmarks", updatedBookmarks);
    }
  };

  const removeFromBookmarks = (repo) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== repo.id
    );
    setBookmarks(updatedBookmarks);
    saveToLocal("bookmarks", updatedBookmarks);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addToBookmarks, removeFromBookmarks }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
