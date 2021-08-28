import React, { useContext } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OpportunityPage from "./pages/OpportunityPage";
import NeedsPage from "./pages/NeedsPage";
import HistoryPage from "./pages/HistoryPage";
import Home from "./pages/Home";
import { userContext } from "./Context";
import "./styles/styles.css";

function App() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const { userObject, isAuthenticated } = useContext(userContext);
  console.log(userObject, isAuthenticated);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/opportunities">
          {isAuthenticated ? <OpportunityPage /> : <Redirect to="/login" />}
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
