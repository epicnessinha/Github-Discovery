import React, { useState } from 'react';
import "./RepoCard.css"

const RepoCard = ({ repo }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // Save to localStorage or state management library
  };

  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <button onClick={toggleBookmark}>
        {bookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on Github
      </a>
    </div>
  );
};

export default RepoCard;
