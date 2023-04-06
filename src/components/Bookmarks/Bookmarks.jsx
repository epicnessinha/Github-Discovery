/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./Bookmarks.css";

const Bookmarks = () => {
  const [bookmarkedRepos, setBookmarkedRepos] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedRepos(bookmarks);
  }, []);

  const handleRemoveBookmark = (id) => {
    const newBookmarks = bookmarkedRepos.filter((repo) => repo.id !== id);
    setBookmarkedRepos(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div className="title">
    <p>My Bookmarks</p>
    <div className="repo-container">{renderFavoriteRepoCards()}</div>
    <div className="bookmarks-container">
      {bookmarkedRepos.map((repo) => (
        <RepositoryCard
          key={repo.id}
          repo={repo}
          bookmarks={bookmarkedRepos}
          setBookmarks={setBookmarkedRepos}
          onRemoveBookmark={handleRemoveBookmark}
        />
      ))}
    </div>
    </div>
  );
};

export default Bookmarks;
