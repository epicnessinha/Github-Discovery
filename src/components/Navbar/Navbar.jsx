import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";

const Navbar = ({ selectedTopics, handleTopicToggle }) => {
  return (
    <div className="navbar">
      {['javascript', 'python', 'ruby', 'java'].map((topic) => (
        <Button
          key={topic}
          variant={selectedTopics.includes(topic) ? 'primary' : 'outline-primary'}
          onClick={() => handleTopicToggle(topic)}
        >
          {topic}
        </Button>
      ))}
    </div>
  );
};

export default Navbar;
