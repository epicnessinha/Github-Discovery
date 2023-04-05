import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const GITHUB_API_BASE_URL = "https://api.github.com";

export const fetchPopularReposByTopics = async (topic, sort, id) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/search/repositories?q=topic:${topic}&sort=${sort}&id=${id}&order=desc`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching popular repos:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users?username=${username}&password=${password}`
    );
    const data = response.data;
    if (data.length === 0) {
      throw new Error("Invalid username or password");
    }
    return data[0].id;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const register = async (username, password, email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?username=${username}`);
    const data = response.data;

    if (data.length > 0) {
      throw new Error("Username already exists");
    }

    const newUser = { username, password, email };

    const postResponse = await axios.post(`${API_BASE_URL}/users`, newUser);

    const createdUser = postResponse.data;
    return createdUser.id;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, updatedUser, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};
