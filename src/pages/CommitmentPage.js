import axios from "axios";
import React from "react";
import { Route } from "../utils/config";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";

class Commitments extends React.Component {
  constructor() {
    super();
    this.state = {
      commitments: [],
    };
  }

  componentDidMount() {
    this.getCommitments();
  }

  getCommitments() {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetMyCommitments`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        console.log(res);
        this.setState({ commitments: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.commitments.length > 0 ? (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {this.state.commitments.map((item, i) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  details={item.details}
                ></Card>
              );
            })}
          </Grid>
        ) : (
          <div className="no-commitments">
            <h2>No Commitments yet.</h2>
            <h3>View the "Fill a Need" page to find a new commitment.</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Commitments;
