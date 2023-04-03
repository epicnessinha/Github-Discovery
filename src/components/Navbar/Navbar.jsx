import React from "react";
import "./Navbar.css";

const Navbar = ({ setTopic }) => {
  const topics = ["javascript", "python", "ruby", "java"];

  return (
    <nav>
      {topics.map((topic) => (
        <button key={topic} onClick={() => setTopic(topic)}>
          {topic}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
