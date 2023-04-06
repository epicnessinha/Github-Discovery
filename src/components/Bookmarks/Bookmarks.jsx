import React, { useContext } from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { AuthContext } from '../../context/AuthContext';

const Bookmarks = () => {
  const { loggedInUserId, userBookmarks } = useContext(AuthContext);

  const bookmarks = userBookmarks[loggedInUserId] || [];

  return (
    <div className="bookmarks">
    <h1>My Bookmarks</h1>
      {bookmarks.length ? (
        bookmarks.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))
      ) : (
        <h3>No bookmarks found</h3>
      )}
    </div>
  );
};

export default Bookmarks;
