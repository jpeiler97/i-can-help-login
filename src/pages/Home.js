import React from "react";
import { Grid, Button, Container } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h2>Welcome</h2>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <Button variant="contained" color="primary">
              Meet a Need
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="primary">
              Opportunities
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="primary">
              Volunteer
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
