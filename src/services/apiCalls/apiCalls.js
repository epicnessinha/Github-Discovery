const API_BASE_URL = "http://localhost:3000";
const GITHUB_API_BASE_URL = "https://api.github.com";

export const fetchPopularReposByTopics = async (topic, sort) => {
  const response = await fetch(
    `${GITHUB_API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&order=desc`
  );
  const data = await response.json();
  return data.items;
};

export const login = async (username, password) => {
  const response = await fetch(
    `${API_BASE_URL}/users?username=${username}&password=${password}`
  );
  const data = await response.json();
  if (data.length === 0) {
    throw new Error("Invalid username or password");
  }
  return data[0].id;
};

export const register = async (username, password, email) => {
  const response = await fetch(`${API_BASE_URL}/users?username=${username}`);
  const data = await response.json();

  if (data.length > 0) {
    throw new Error("Username already exists");
  }

  const newUser = {
    username,
    password,
    email,
  };

  const postResponse = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const createdUser = await postResponse.json();
  return createdUser.id;
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const data = await response.json();
    console.log(data); // add this line to check the response data

    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const getUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  const data = await response.json();
  return data;
};
