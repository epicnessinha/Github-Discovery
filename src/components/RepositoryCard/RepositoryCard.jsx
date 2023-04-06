import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./RepositoryCard.css";

const RepositoryCard = ({ repo, bookmarks, setBookmarks }) => {
  const [bookmarked, setBookmarked] = useState(bookmarks.includes(repo.id));

  const toggleBookmark = (event) => {
    event.stopPropagation();
    const updatedBookmarks = bookmarked
      ? bookmarks.filter((id) => id !== repo.id)
      : [...bookmarks, repo.id];
    setBookmarks(updatedBookmarks);
    setBookmarked(!bookmarked);
  };

  return (
    <Card className="repo-card" style={{ width: "15rem" }}>
      <>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Card.Img
            variant="top"
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login}'s avatar`}
          />
          <Card.Body>
            <Card.Title className="title">{repo.name}</Card.Title>
          </Card.Body>
        </a>
        <Card.Footer>
          <div className="bookmark-icon" onClick={toggleBookmark}>
            {bookmarked ? (
              <BsStarFill size={24} color="gold" />
            ) : (
              <BsStar size={24} color="gold" />
            )}
          </div>
        </Card.Footer>
      </>
    </Card>
  );
};

export default RepositoryCard;
