import React from "react";
import "./SortDropdown.css";

const SortDropdown = ({ setSort }) => {
  const handleSortChange = (e) => {
    setSort(e.target.value);
    localStorage.setItem("sort", e.target.value);
  };

  return (
    <select onChange={handleSortChange}>
      <option value="stars">Sort by Stars</option>
      <option value="forks">Sort by Forks</option>
      <option value="updated">Sort by Last Updated</option>
    </select>
  );
};

export default SortDropdown;
