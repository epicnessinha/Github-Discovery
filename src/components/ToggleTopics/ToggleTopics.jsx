import React, { useState } from "react";
import "./ToggleTopics.css";

const ToggleTopics = ({ setTopics }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicChange = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleApply = () => {
    setTopics(selectedTopics);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Topics
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li
              className={selectedTopics.includes("javascript") ? "selected" : ""}
              onClick={() => handleTopicChange("javascript")}
            >
              JavaScript
            </li>
            <li
              className={selectedTopics.includes("react") ? "selected" : ""}
              onClick={() => handleTopicChange("react")}
            >
              React
            </li>
            <li
              className={selectedTopics.includes("python") ? "selected" : ""}
              onClick={() => handleTopicChange("python")}
            >
              Python
            </li>
            <li
              className={selectedTopics.includes("java") ? "selected" : ""}
              onClick={() => handleTopicChange("java")}
            >
              Java
            </li>
          </ul>
          <button onClick={handleApply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default ToggleTopics;
