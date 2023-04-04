// DiscoveryPage.js

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import { fetchPopularReposByTopics } from "../../services/apiCalls/apiCalls";
import { saveToLocal, loadFromLocal } from "../../utils/persistence";
import "./DiscoveryPage.css";

const topics = ["javascript", "java", "python", "ruby", "php"];

const DiscoveryPage = () => {
  const [bookmarks, setBookmarks] = useState(loadFromLocal("bookmarks") || []);
  const [repos, setRepos] = useState({});
  const [sort, setSort] = useState(loadFromLocal("sort") || {});
  const [selectedTopics, setSelectedTopics] = useState(loadFromLocal("selectedTopics") || []);

  useEffect(() => {
    saveToLocal("selectedTopics", selectedTopics);
  }, [selectedTopics]);

  useEffect(() => {
    saveToLocal("sort", sort);
  }, [sort]);

  useEffect(() => {
    const fetchRepos = async () => {
      const fetchedRepos = await fetchPopularReposByTopics(topics, sort);
      setRepos(fetchedRepos);
    };
    fetchRepos();
  }, [sort]);

  const handleTopicToggle = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSortChange = (topic, value) => {
    setSort({ ...sort, [topic]: value });
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
      <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
      {topics.map((topic) => (
        <div key={topic}>
          {selectedTopics.includes(topic) && (
            <>
              <h2>{topic}</h2>
              <SortDropdown
                value={sort[topic]}
                onChange={(value) => handleSortChange(topic, value)}
              />
              <div className="repo-container">{renderRepoRow(topic)}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiscoveryPage;
