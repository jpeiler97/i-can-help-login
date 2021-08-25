import axios from "axios";
import React from "react";
import { Route } from "../utils/config";
import Card from "../components/Card";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      opportunities: [],
    };
  }

  componentDidMount() {
    this.getOpportunities();
  }

  getOpportunities() {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetOpenOpportunities?daysOut=30`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => this.setState({ opportunities: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="welcome">
        <h2>Welcome</h2>
        {this.state.opportunities.map((opp, i) => {
          return (
            <Card
              key={opp.id}
              title={opp.title}
              description={opp.description}
            ></Card>
          );
        })}
        <button onClick={this.props.Logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
