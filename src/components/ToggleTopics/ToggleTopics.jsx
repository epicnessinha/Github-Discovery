import React from 'react';
import { Button } from 'react-bootstrap';
import './ToggleTopics.css';

const ToggleTopics = ({ topics, selectedTopics, handleTopicToggle }) => {
  return (
    <div className='topic-title'>
      <h3>Toggle Topics to show</h3>
      <div className="topic-container">
        {topics.map((topic) => (
          <Button
            key={topic}
            className={selectedTopics.includes(topic) ? 'topic-button-selected' : 'topic-button'}
            onClick={() => handleTopicToggle(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ToggleTopics;
