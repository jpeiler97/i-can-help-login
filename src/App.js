import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OpportunityPage from "./pages/OpportunityPage";
import NeedsPage from "./pages/NeedsPage";
import HistoryPage from "./pages/HistoryPage";
import Home from "./pages/Home";
import "./styles/styles.css";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/opportunities">
            <OpportunityPage></OpportunityPage>
          </Route>
          <Route exact path="/meetaneed">
            <NeedsPage></NeedsPage>
          </Route>
          <Route exact path="/history">
            <HistoryPage></HistoryPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
