import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ setTopic }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const topics = ["javascript", "python", "ruby", "java"];

  useEffect(() => {
    if (selectedTopics.length > 0) {
      setTopic(selectedTopics.join("+"));
    } else {
      setTopic("javascript+python+ruby+java");
    }
  }, [selectedTopics, setTopic]);

  const handleTopicSelection = (topic) => {
    const index = selectedTopics.indexOf(topic);
    if (index === -1) {
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      const updatedSelectedTopics = [...selectedTopics];
      updatedSelectedTopics.splice(index, 1);
      setSelectedTopics(updatedSelectedTopics);
    }
  };

  const topicIsSelected = (topic) => {
    return selectedTopics.indexOf(topic) !== -1;
  };

  return (
    <nav>
      {topics.map((topic) => (
        <label key={topic}>
          <input
            type="checkbox"
            checked={topicIsSelected(topic)}
            onChange={() => handleTopicSelection(topic)}
          />
          {topic}
        </label>
      ))}
    </nav>
  );
};

export default Navbar;
