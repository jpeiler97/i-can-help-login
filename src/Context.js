import React, { createContext, useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";

export const userContext = createContext();

export default function Context({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    if (!isAuthenticated) {
      let store = JSON.parse(localStorage.getItem("login"));
      if (store && store.token) {
        setIsAuthenticated(true);
        setUser({
          firstName: store.user.firstName,
          lastName: store.user.lastName,
          email: store.user.email,
        });
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      {
        <userContext.Provider
          value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
        >
          {children}
        </userContext.Provider>
      }
    </>
  );
}
