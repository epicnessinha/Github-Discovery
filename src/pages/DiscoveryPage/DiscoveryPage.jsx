/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import { popularRepos } from "../../services/apiCalls/apiCalls";
import Header from "../../components/Header/Header";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import ToggleTopics from "../../components/ToggleTopics/ToggleTopics";
import "./DiscoveryPage.css";

const DiscoveryPage = () => {
  const [repos, setRepos] = useState([]);
  const [topic, setTopic] = useState("javascript");
  const [sort, setSort] = useState("stars");
  const [bookmarks, setBookmarks] = useState([]);
  const [toggleTopics, setToggleTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect the user to the login page if they are not logged in
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      const fetchedRepos = await popularRepos(topic, sort);
      setRepos(fetchedRepos);
    };
    fetchData();
  }, [topic, sort, navigate]);

  return (
    <div>
      <Header isLoggedIn={true} />
      <Navbar setTopic={setTopic} />
      <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
      <ToggleTopics
        toggleTopics={toggleTopics}
        setToggleTopics={setToggleTopics}
      />
      <SortDropdown setSort={setSort} />
      <div className="repo-container">
        {repos.map((repo) => (
          <RepositoryCard
            key={repo.id}
            repo={repo}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
            toggleTopics={toggleTopics}
          />
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default DiscoveryPage;
