import axios from "axios";
import React from "react";
import { Route } from "../utils/config";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";

class NeedsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      needs: [],
    };
  }

  componentDidMount() {
    this.getNeeds();
  }

  getNeeds() {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetOpenOpportunities?daysOut=60`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => this.setState({ needs: res.data }))
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
          {this.state.needs.map((need, i) => {
            return (
              <Card
                key={need.id}
                id={need.id}
                title={need.title}
                description={need.description}
                details={need.details}
              ></Card>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default NeedsPage;
