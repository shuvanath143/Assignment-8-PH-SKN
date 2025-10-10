// Function to set data in localStorage
function setLocalStorage(key, value) {
  try {
    const convertedValue = JSON.stringify(value); // convert object/array to string
    localStorage.setItem(key, convertedValue);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Function to get data from localStorage
function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return []; // key does not exist
    return JSON.parse(value); // convert string back to object/array
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

export {setLocalStorage, getLocalStorage};