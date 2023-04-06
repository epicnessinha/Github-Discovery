import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ToggleTopics from "../../components/ToggleTopics/ToggleTopics";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import { fetchPopularReposByTopics } from "../../services/apiCalls";
import { saveToLocal, loadFromLocal } from "../../utils/localStorage";
import "./DiscoveryPage.css";

const topics = ["javascript", "java", "python", "ruby", "php"];

const DiscoveryPage = () => {
  const [repos, setRepos] = useState({});
  const [sort, setSort] = useState(loadFromLocal("sort") || "stars");
  const [selectedTopics, setSelectedTopics] = useState(() => {
    const storedTopics = loadFromLocal("selectedTopics");
    return Array.isArray(storedTopics) ? storedTopics : [];
  });

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
    if (selectedTopics.includes(selected)) {
      setSelectedTopics(selectedTopics.filter((topic) => topic !== selected));
    } else {
      setSelectedTopics([...selectedTopics, selected]);
    }
  };

  const renderRepoRow = (topic) => {
    return repos[topic]?.map((repo) => (
      <RepositoryCard key={repo.id} repo={repo} />
    ));
  };

  const topicsToRender = selectedTopics.length > 0 ? selectedTopics : topics;

  return (
    <div>
      <Header isLoggedIn={true} />
      <Bookmarks />
      <ToggleTopics
        topics={topics}
        selectedTopics={selectedTopics}
        handleTopicToggle={handleTopicToggle}
      />

      {topicsToRender.map((topic) => (
        <div key={topic}>
          <h2>{topic}</h2>
          <div className="sort-dropdown-container">
            <SortDropdown setSort={setSort} />
          </div>
          <div className="repo-container">{renderRepoRow(topic)}</div>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryPage;
