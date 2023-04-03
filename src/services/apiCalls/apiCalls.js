/* eslint-disable no-undef */

// const API_BASE_URL = 'https://api.github.com';

// export const popularRepos = async (topic, sort) => {
//   // eslint-disable-next-line no-undef
//   const response = await fetch(
//     `${API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&order=desc`
//   );
//   const data = await response.json();
//   return data.items;
// };

// Add error handling to check the response status and throw an error if the fetch request fails.
// Wrapped the code in a try-catch block to handle any errors that might occur during fetching and parsing the response.

const API_BASE_URL = 'http://localhost:3000';
const GITHUB_API_BASE_URL = 'https://api.github.com';

export const popularRepos = async (topic, sort) => {
  const response = await fetch(
    `${GITHUB_API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&order=desc`
  );
  const data = await response.json();
  return data.items;
};

export const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/users?username=${username}&password=${password}`);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('Invalid username or password');
  }
  return data[0].id;
};
