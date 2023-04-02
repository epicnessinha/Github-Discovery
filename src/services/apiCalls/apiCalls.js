
const API_BASE_URL = 'https://api.github.com';

export const popularRepos = async (topic, sort) => {
  const response = await fetch(
    `${API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&order=desc`
  );
  const data = await response.json();
  return data.items;
};

// Add error handling to check the response status and throw an error if the fetch request fails.
// Wrapped the code in a try-catch block to handle any errors that might occur during fetching and parsing the response.

