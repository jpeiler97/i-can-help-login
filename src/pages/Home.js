import React from "react";
import { Grid, Button, Container } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import logOut from "../utils/logout";
function Home() {
  const location = useLocation();

  return (
    <div className="welcome">
      <h2>Welcome</h2>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Link to="/meetaneed" className={location.pathname === "/meetaneed"}>
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
          <Link
            to="/opportunities"
            className={location.pathname === "/opportunities"}
          >
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
          <Link to="/history" className={location.pathname === "/history"}>
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
      {/* <button onClick={() => logOut()}>Log out</button> */}
    </div>
  );
}

export default Home;
