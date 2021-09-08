import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
  paper: {
    backgroundColor: "#c2ede4",
  },
  submitButton: {
    margin: "15px",
  },
  registerTitle: {
    fontSize: "25px",
    fontFamily: "Roboto",
  },
  innerPaper: {
    marginTop: "10px",
    marginBottom: "20px",
  },
});

function RegisterForm({ Register, error }) {
  const classes = useStyles();

  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (details.password === details.confirmPassword) {
      Register(details);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container maxWidth="sm" className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <h2 className={classes.registerTitle}>Register</h2>
            <Box width="70%">
              <Paper className={classes.innerPaper} elevation={2}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
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
                    <TextField
                      label="Password"
                      type="password"
                      required
                      variant="standard"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Confirm Password"
                      type="password"
                      required
                      variant="standard"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          confirmPassword: e.target.value,
                        })
                      }
                      value={details.confirmPassword}
                    ></TextField>
                  </Grid>
                </Grid>
                {error !== "" ? <div className="error">{error}</div> : ""}
              </Paper>
            </Box>
            <Link to="/login">Log in</Link>
            <Button
              className={classes.submitButton}
              variant="contained"
              type="submit"
              value="LOGIN"
            >
              SIGN UP
            </Button>
          </Grid>

          <Grid container direction="column" alignItems="center"></Grid>
        </Paper>
      </Container>
    </form>
  );
}

export default RegisterForm;
