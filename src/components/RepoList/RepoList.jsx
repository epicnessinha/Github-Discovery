import React from 'react';
import RepoCard from './RepoCard';
import './RepoList.css';

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
