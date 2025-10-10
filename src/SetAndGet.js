// Function to set data in localStorage
function setLocalStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value); // convert object/array to string
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Function to get data from localStorage
function getLocalStorage(key) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return null; // key does not exist
    return JSON.parse(serializedValue); // convert string back to object/array
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};

export {setLocalStorage, getLocalStorage};