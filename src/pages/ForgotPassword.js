import React from "react";
import ResetForm from "../components/ResetForm";
import { Route } from "../utils/config";
import axios from "axios";

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: null,
      error: "",
    };
  }

  ResetPassword = (details) => {
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
        this.setState({ error: "Could not send password link" });
      });
  };

  render() {
    return (
      <div className="register-page">
        {/* <img className="login-logo" src={logo} alt={"KyendR"} /> */}
        <ResetForm
          ResetPassword={this.ResetPassword}
          error={this.state.error}
        ></ResetForm>
      </div>
    );
  }
}

export default ForgotPassword;
