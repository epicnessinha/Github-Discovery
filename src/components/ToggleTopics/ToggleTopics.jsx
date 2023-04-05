
import React from 'react';
import { Button } from 'react-bootstrap';
import './ToggleTopics.css';

const Navbar = ({ topics, selectedTopics, handleTopicToggle }) => {
  return (
    <div className='topic-title'>
    <h3>Toggle Topics to show</h3>
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
    </div>
  );
};

export default Navbar;
