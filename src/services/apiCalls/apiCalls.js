

const API_BASE_URL = 'https://api.github.com';

export const popularRepos = async (topic, sort) => {
  const response = await fetch(
    `${API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&order=desc`
  );
  const data = await response.json();
  return data.items;
};
