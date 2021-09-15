import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Route } from "../utils/config";
import logo from "../assets/images/logoNoBkg.png";
import axios from "axios";

function LoginPage() {
  const [error, setError] = useState("");

  const Login = (details) => {
    axios
      .post(`${Route}/User/Login`, details)
      .then((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            user: {
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              email: res.data.email,
            },
            token: res.data.token,
            expiration: res.data.expiration,
          })
        );
        window.location.replace(`${window.location.pathname}/`);
      })
      .catch((err) => {
        console.log(err);
        setError("Could not log in");
      });
  };

  return (
    <div>
      <img className="login-logo" src={logo} alt={"KyendR"} />
      <LoginForm Login={Login} error={error}></LoginForm>
    </div>
  );
}

export default LoginPage;
