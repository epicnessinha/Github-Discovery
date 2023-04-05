import React from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./FavoritesRow.css"


//empty array in repos is just a quick fix for now, need to remove
const FavoritesRow = ({ repos=[], bookmarks, setBookmarks }) => {
  const favoriteRepos = repos.filter((repo) => bookmarks.includes(repo.id));

  const toggleBookmark = (repoId) => {
    const index = bookmarks.indexOf(repoId);
    if (index === -1) {
      setBookmarks([...bookmarks, repoId]);
    } else {
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks.splice(index, 1);
      setBookmarks(updatedBookmarks);
    }
  };

  const renderFavoriteRepoCards = () => {
    return favoriteRepos.map((repo) => (
      <RepositoryCard
        key={repo.id}
        repo={repo}
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark}
      />
    ));
  };

  return (
    <div className="title">
      <p>My Bookmarks</p>
      <div className="repo-container">{renderFavoriteRepoCards()}</div>
    </div>
  );
};

export default FavoritesRow;
