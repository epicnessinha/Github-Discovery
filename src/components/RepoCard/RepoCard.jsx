import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './RepoCard.css';

const RepoCard = ({ repo }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // Save to localStorage or state management library
  };

  return (
    <Card className="repo-card mb-3" style={{ maxWidth: '540px' }}>
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Text>{repo.description}</Card.Text>
        <Button onClick={toggleBookmark} variant="primary">
          {bookmarked ? 'Unbookmark' : 'Bookmark'}
        </Button>{' '}
        <Button
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          View on Github
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RepoCard;
