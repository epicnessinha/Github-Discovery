// persistence.js

export const saveToLocal = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  };
  
  export const loadFromLocal = (key) => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error("Error loading from local storage:", error);
    }
    return null;
  };
  