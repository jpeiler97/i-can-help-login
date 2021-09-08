import React, { useContext } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CommitmentPage from "./pages/CommitmentPage";
import NeedsPage from "./pages/NeedsPage";
import HistoryPage from "./pages/HistoryPage";
import Home from "./pages/Home";
import { userContext } from "./Context";
import Nav from "./components/Nav";
import "./styles/styles.css";

function App() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const { isAuthenticated } = useContext(userContext);

  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/register">
          {isAuthenticated ? <Redirect to="/" /> : <RegisterPage />}
        </Route>
        <Route exact path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/commitments">
          {isAuthenticated ? <CommitmentPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/meetaneed">
          {isAuthenticated ? <NeedsPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/history">
          {isAuthenticated ? <HistoryPage /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
