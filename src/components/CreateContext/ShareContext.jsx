// DataContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ShareContext = createContext();

export const ShareProvider = ({ children }) => {
  const [sdata, setData] = useState(null);

  useEffect(() => {
    // Fetch or load data once
    fetch("/appData.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []); // runs once only

  return (
    <ShareContext.Provider value={{ sdata }}>
      {children}
    </ShareContext.Provider>
  );
};
