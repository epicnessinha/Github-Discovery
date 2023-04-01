import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import RepoCard from '../../components/RepoCard/RepoCard';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import { popularRepos } from '../../services/apiCalls/apiCalls';
import "./Home.css"

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [topic, setTopic] = useState('javascript');
  const [sort, setSort] = useState('stars');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRepos = await popularRepos(topic, sort);
      setRepos(fetchedRepos);
    };

    fetchData();
  }, [topic, sort]);

  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Navbar setTopic={setTopic} />
      <SortDropdown setSort={setSort} />
      <div className="repo-container">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Home;

