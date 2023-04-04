// DiscoveryPage.js

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import { fetchPopularReposByTopics } from "../../services/apiCalls";
import { saveToLocal, loadFromLocal } from "../../utils/localStorage";
import "./DiscoveryPage.css";

const topics = ["javascript", "java", "python", "ruby", "php"];

const DiscoveryPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [repos, setRepos] = useState({});
  const [sort, setSort] = useState(loadFromLocal("sort") || "stars");
  const [selectedTopics, setSelectedTopics] = useState(loadFromLocal("selectedTopics") || []);

  useEffect(() => {
    saveToLocal("sort", sort);
  }, [sort]);

  useEffect(() => {
    saveToLocal("selectedTopics", selectedTopics);
  }, [selectedTopics]);

  useEffect(() => {
    const fetchRepos = async () => {
      const fetchedRepos = {};
      for (const topic of topics) {
        const reposForTopic = await fetchPopularReposByTopics(topic, sort);
        fetchedRepos[topic] = reposForTopic;
      }
      setRepos(fetchedRepos);
    };
    fetchRepos();
  }, [sort]);

  const handleTopicToggle = (selected) => {
    setSelectedTopics(selected);
  };
  

  const renderRepoRow = (topic) => {
    return repos[topic]?.map((repo) => (
      <RepositoryCard
        key={repo.id}
        repo={repo}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    ));
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <Navbar
        topics={topics}
        selectedTopics={selectedTopics}
        handleTopicToggle={handleTopicToggle}
      />
       <SortDropdown setSort={setSort} />
      <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
      {topics.map((topic) => (
  <div key={topic}>
    <h2>{topic}</h2>
    <div className="sort-dropdown-container">
      {/* <SortDropdown setSort={setSort} /> */}
    </div>
    <div className="repo-container">{renderRepoRow(topic)}</div>
  </div>
))}
    </div>
  );
};

export default DiscoveryPage;
