import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="welcome">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Link to="/meetaneed" style={{ textDecoration: "none" }}>
            <Button
              style={{ minWidth: "170px" }}
              variant="contained"
              color="primary"
            >
              Fill a Need
            </Button>
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Link to="/commitments" style={{ textDecoration: "none" }}>
            <Button
              style={{ minWidth: "170px" }}
              variant="contained"
              color="primary"
            >
              My Commitments
            </Button>
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Link to="/history" style={{ textDecoration: "none" }}>
            <Button
              style={{ minWidth: "170px" }}
              variant="contained"
              color="primary"
            >
              My History
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
