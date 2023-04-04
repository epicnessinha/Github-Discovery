import React from 'react';
import { Button } from 'react-bootstrap';
import './Navbar.css';

const Navbar = ({ topics, selectedTopics, handleTopicToggle }) => {
  return (
    <div className="navbar">
      {topics.map((topic) => (
        <Button
          key={topic}
          variant={selectedTopics.includes(topic) ? 'primary' : 'outline-primary'}
          onClick={() => handleTopicToggle(topic)}
          className="topic-button"
        >
          {topic}
        </Button>
      ))}
    </div>
  );
};

export default Navbar;
