import React, { useState, useContext } from "react";
import { userContext } from "../Context";
import { TextField, Button, Grid } from "@material-ui/core";
import { Route } from "../utils/config";
import axios from "axios";

export default function SettingsPage() {
  const { user, setUser } = useContext(userContext);
  const [details, setDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const [error, setError] = useState("");

  const changeUser = (details) => {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .post(`${Route}/User/UpdateMyData`, details, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        setUser(details);
      })
      .catch((err) => {
        console.log(err);
        setError("Could not make changes");
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    changeUser(details);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <TextField
              label="First Name"
              variant="standard"
              required
              onChange={(e) =>
                setDetails({ ...details, firstName: e.target.value })
              }
              value={details.firstName}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Last Name"
              variant="standard"
              required
              onChange={(e) =>
                setDetails({ ...details, lastName: e.target.value })
              }
              value={details.lastName}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              required
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            ></TextField>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" value="LOGIN">
              Save Changes
            </Button>
          </Grid>

          {error !== "" ? <div className="error">{error}</div> : ""}
        </Grid>
      </form>
    </div>
  );
}
