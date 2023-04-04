import React from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

const FavoritesRow = ({ repos, bookmarks, setBookmarks }) => {
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
    <div>
      <h2>Favorite Repositories</h2>
      <div className="repo-container">{renderFavoriteRepoCards()}</div>
    </div>
  );
};

export default FavoritesRow;
