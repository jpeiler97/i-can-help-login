import React from "react";
import LoginForm from "../components/LoginForm";
import Home from "./Home";
import { Route } from "../utils/config";
import axios from "axios";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: null,
      Password: null,
      login: false,
      store: null,
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
      .catch((err) => console.log(err));
  };

  Logout = () => {
    this.setState({ login: false });
  };

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, store: store });
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.login ? (
            <Home Logout={this.Logout} />
          ) : (
            <div>
              <LoginForm Login={this.Login}></LoginForm>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
