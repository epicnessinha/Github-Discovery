// ToggleTopics.js
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import "./ToggleTopics.css"

const ToggleTopics = ({ activeTopics, setActiveTopics }) => {
  const topics = ['javascript', 'python', 'ruby', 'java'];

  const handleToggle = (topic) => {
    if (activeTopics.includes(topic)) {
      setActiveTopics(activeTopics.filter((t) => t !== topic));
    } else {
      setActiveTopics([...activeTopics, topic]);
    }
  };

  return (
    <ButtonGroup className="mt-3 mb-3">
      {topics.map((topic) => (
        <Button
          key={topic}
          variant={activeTopics.includes(topic) ? 'primary' : 'outline-primary'}
          onClick={() => handleToggle(topic)}
        >
          {topic}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ToggleTopics;
