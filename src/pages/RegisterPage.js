import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { Route } from "../utils/config";
import logo from "../assets/images/logoNoBkg.png";
import axios from "axios";

function RegisterPage() {
  const [error, setError] = useState("");

  const Register = (details) => {
    axios
      .post(`${Route}/User/Register`, details)
      .then((res) => {
        console.log(res);
        window.location.replace(`/`);
      })
      .catch((err) => {
        console.log(err);
        setError("Could not sign up");
      });
  };

  return (
    <div>
      <img className="login-logo" src={logo} alt={"KyendR"} />
      <RegisterForm Register={Register} error={error}></RegisterForm>
    </div>
  );
}

export default RegisterPage;
