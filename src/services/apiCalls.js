import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const GITHUB_API_BASE_URL = "https://api.github.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const githubApiClient = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPopularReposByTopics = async (topic, sort, id) => {
  try {
    const response = await githubApiClient.get(`/search/repositories`, {
      params: {
        q: `topic:${topic}`,
        sort: sort,
        id: id,
        order: "desc",
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching popular repos:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await apiClient.get("/users", {
      params: {
        username: username,
        password: password,
      },
    });
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
    const response = await apiClient.get("/users", {
      params: {
        username: username,
      },
    });
    const data = response.data;

    if (data.length > 0) {
      throw new Error("Username already exists");
    }

    const newUser = { username, password, email };

    const postResponse = await apiClient.post("/users", newUser);

    const createdUser = postResponse.data;
    return createdUser.id;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await apiClient.put(`/users/${id}`, updatedUser);

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
    const response = await apiClient.get(`/users/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};
