import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './RepositoryCard.css';

const RepositoryCard = ({ repo, bookmarks, setBookmarks, toggleTopics }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    const index = bookmarks.indexOf(repo.id);
    if (index === -1) {
      setBookmarks([...bookmarks, repo.id]);
    } else {
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks.splice(index, 1);
      setBookmarks(updatedBookmarks);
    }
  };

  const topicMatch = toggleTopics.length === 0 || toggleTopics.includes(repo.topic);

  return (
    <Card className="repo-card mb-3" style={{ maxWidth: '540px' }}>
      {topicMatch && (
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
      )}
    </Card>
  );
};

export default RepositoryCard;
