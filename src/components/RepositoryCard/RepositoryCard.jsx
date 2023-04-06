import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./RepositoryCard.css";

const RepositoryCard = ({ repo }) => {
  const { loggedInUserId, userBookmarks, addToBookmarks, removeFromBookmarks } =
    useContext(AuthContext);

  const bookmarked = userBookmarks[loggedInUserId]?.some(
    (bookmark) => bookmark.id === repo.id
  );

  const toggleBookmark = (event) => {
    event.stopPropagation();
    if (bookmarked) {
      removeFromBookmarks(repo);
    } else {
      addToBookmarks(repo);
    }
  };

  const handleCardClick = (event) => {
    if (event.target.closest(".bookmark-icon")) {
      toggleBookmark(event);
    } else {
      window.open(repo.html_url, "_blank");
    }
  };

  return (
    <Card
      className="repo-card"
      style={{ width: "15rem" }}
      onClick={handleCardClick}
    >
      <>
        <Card.Img variant="top" src={repo.owner.avatar_url} />
        <Card.Body>
          <Card.Title className="title">{repo.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className="bookmark-icon">
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
