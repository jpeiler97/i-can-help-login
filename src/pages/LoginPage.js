import React from "react";
import LoginForm from "../components/LoginForm";
import { Route } from "../utils/config";
import logo from "../assets/images/logoNoBkg.png";
import axios from "axios";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: null,
      Password: null,
      login: false,
      store: null,
      error: "",
    };
  }

  Login = (details) => {
    axios
      .post(`${Route}/User/Login`, details)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.token,
          })
        );
        this.storeCollector();
      })
      .catch((err) => this.setState({ error: "Could not log in" }));
  };

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, store: store, error: "" });
    }
  }
  render() {
    return (
      <div>
        <img className="login-logo" src={logo} alt={"KyendR"} />
        <LoginForm Login={this.Login} error={this.state.error}></LoginForm>
      </div>
    );
  }
}

export default LoginPage;
