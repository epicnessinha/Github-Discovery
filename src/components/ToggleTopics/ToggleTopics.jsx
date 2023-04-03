import React, { useState } from "react";
import "./ToggleTopics.css";

const ToggleTopic = ({ setTopic }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTopicChange = (topic) => {
    setTopic(topic);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Select a topic
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li onClick={() => handleTopicChange("javascript")}>JavaScript</li>
            <li onClick={() => handleTopicChange("react")}>React</li>
            <li onClick={() => handleTopicChange("python")}>Python</li>
            <li onClick={() => handleTopicChange("java")}>Java</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleTopic;
