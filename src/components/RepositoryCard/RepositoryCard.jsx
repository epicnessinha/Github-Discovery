import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./RepositoryCard.css";

const RepositoryCard = ({ repo, bookmarks, setBookmarks }) => {
  const [bookmarked, setBookmarked] = useState(bookmarks.includes(repo.id));

  const toggleBookmark = (event) => {
    event.stopPropagation();
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

  return (
    <Card className="repo-card" style={{ width: "15rem" }}>
      <>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={repo.owner.avatar_url} />
          <Card.Body>
            <Card.Title>{repo.name}</Card.Title>
            {/* <Card.Text>{repo.description}</Card.Text> */}
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
