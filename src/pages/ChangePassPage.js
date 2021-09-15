import React, { useContext, useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import axios from "axios";
import { Route } from "../utils/config";
import { userContext } from "../Context";
export default function ChangePassPage() {
  const { user } = useContext(userContext);

  const [state, setState] = useState({
    password2: "",
    error: "",
  });

  const [pass, setPass] = useState({
    email: user.email,
    password: "",
  });

  const changePassword = (details) => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (pass.password === state.password2) {
      axios
        .post(`${Route}/User/ChangePassword`, details, {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setState({ ...state, error: "Password Changed" });
        })
        .catch((err) => {
          console.log(err.response);
          setState({ ...state, error: "Could not make changes" });
        });
    } else {
      setState({ ...state, error: "Passwords do not match" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    changePassword(pass);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Grid container direction="column" alignContent="center" spacing={2}>
          <Grid item>
            <TextField
              label="Password"
              variant="standard"
              required
              type="password"
              onChange={(e) => setPass({ ...pass, password: e.target.value })}
              value={pass.password}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Confirm Password"
              variant="standard"
              required
              type="password"
              onChange={(e) =>
                setState({ ...state, password2: e.target.value })
              }
              value={state.password2}
            ></TextField>
          </Grid>
          <Grid item>
            {state.error !== "" ? (
              <div className="error">{state.error}</div>
            ) : (
              ""
            )}
            <Button variant="contained" type="submit">
              Change Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
