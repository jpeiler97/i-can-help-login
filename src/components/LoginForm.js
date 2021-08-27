import React, { useState } from "react";
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
  loginTitle: {
    fontSize: "30px",
    fontFamily: "Roboto",
  },
  innerPaper: {
    marginTop: "10px",
    marginBottom: "20px",
  },
});

function LoginForm({ Login, error }) {
  const classes = useStyles();
  const [details, setDetails] = useState({ Email: "", Password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
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
            spacing={2}
          >
            <h2 className={classes.loginTitle}>Login</h2>
            <Box width="70%">
              <Paper className={classes.innerPaper} elevation={2}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="standard"
                      type="email"
                      onChange={(e) =>
                        setDetails({ ...details, Email: e.target.value })
                      }
                      value={details.Email}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      type="password"
                      variant="standard"
                      onChange={(e) =>
                        setDetails({ ...details, Password: e.target.value })
                      }
                      value={details.Password}
                    ></TextField>
                  </Grid>
                </Grid>
                {error !== "" ? <div className="error">{error}</div> : ""}
              </Paper>
            </Box>
            <Button
              className={classes.submitButton}
              variant="contained"
              type="submit"
              value="LOGIN"
            >
              LOGIN
            </Button>
          </Grid>

          <Grid container direction="column" alignItems="center"></Grid>
        </Paper>
      </Container>
    </form>
  );
}

export default LoginForm;
