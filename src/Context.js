import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export default function Context({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      let store = JSON.parse(localStorage.getItem("login"));
      if (store && store.token) {
        setIsAuthenticated(true);
      }
    }
    // setIsLoaded(true);
  }, []);

  return (
    <>
      {
        <userContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          {children}
        </userContext.Provider>
      }
    </>
  );
}
