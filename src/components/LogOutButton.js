import React, { useContext } from "react";
import { Route } from "../utils/config";
import axios from "axios";
import { userContext } from "../Context";

function LogoutButton() {
  const { setIsAuthenticated } = useContext(userContext);

  const Logout = () => {
    let store = JSON.parse(localStorage.getItem("login"));

    if (store && store.token) {
      axios
        .post(
          `${Route}/User/Logout`,
          { withCredentials: true },
          {
            headers: { Authorization: `Bearer ${store.token}` },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.removeItem("login");
          setIsAuthenticated(false);
        })
        .catch((err) => console.log(err.response));
    }
  };

  return <button onClick={Logout}>Logout</button>;
}

export default LogoutButton;
