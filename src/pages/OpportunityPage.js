import axios from "axios";
import React from "react";
import { Route } from "../utils/config";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";

class Opportunities extends React.Component {
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
      .get(`${Route}/Provider/GetOpenOpportunities?daysOut=60`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => this.setState({ opportunities: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {this.state.opportunities.map((opp, i) => {
            return (
              <Card
                key={opp.id}
                title={opp.title}
                description={opp.description}
                details={opp.details}
              ></Card>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Opportunities;
