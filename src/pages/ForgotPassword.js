import React, { useState } from "react";
import ResetForm from "../components/ResetForm";
import { Route } from "../utils/config";
import axios from "axios";

function ForgotPassword() {
  const [error, setError] = useState("");

  const ResetPassword = (details) => {
    axios
      .post(`${Route}/User/RequestNewPassword`, details, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        // window.location.replace(`${window.location.pathname}/`);
      })
      .catch((err) => {
        console.log(err.response);
        setError("Could not send password link");
      });
  };

  return (
    <div className="register-page">
      <ResetForm ResetPassword={ResetPassword} error={error}></ResetForm>
    </div>
  );
}

export default ForgotPassword;
