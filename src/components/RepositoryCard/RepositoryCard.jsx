import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RepositoryCard.css";

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

  const topicMatch =
    toggleTopics.length === 0 || toggleTopics.includes(repo.topic);

  return (
    <Card
      as={Link}
      to={{ pathname: repo.html_url }}
      className="repo-card"
      style={{ width: "18rem" }}
    >
      {topicMatch && (
        <>
          <Card.Img variant="top" src={repo.owner.avatar_url} />
          <Card.Body>
            <Card.Title>{repo.name}</Card.Title>
            <Card.Text>{repo.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button
              onClick={toggleBookmark}
              className={`btn btn-sm ${
                bookmarked ? "btn-danger" : "btn-outline-danger"
              }`}
            >
              {bookmarked ? "Unbookmark" : "Bookmark"}
            </button>{" "}
            <button
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              View on Github
            </button>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default RepositoryCard;
