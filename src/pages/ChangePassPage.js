import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
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
        <TextField
          label="Password"
          variant="standard"
          required
          type="password"
          onChange={(e) => setPass({ ...pass, password: e.target.value })}
          value={pass.password}
        ></TextField>

        <TextField
          label="Confirm Password"
          variant="standard"
          required
          type="password"
          onChange={(e) => setState({ ...state, password2: e.target.value })}
          value={state.password2}
        ></TextField>

        {state.error !== "" ? <div className="error">{state.error}</div> : ""}
        <Button variant="contained" type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
}
