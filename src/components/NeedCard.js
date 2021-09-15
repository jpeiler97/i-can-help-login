import React, { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import convertDate from "../utils/date";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
  descDiv: {
    whiteSpace: "wrap",
    // width: "80%",
  },
  commit: {
    backgroundColor: "#b3eba7",
    height: "30px",
    "&:focus": {
      backgroundColor: "#b3eba7",
    },
  },
  disabled: {
    display: "none",
  },
  date: {
    fontSize: "12px",
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function NeedCard({
  title,
  description,
  details,
  date,
  id,
  count,
  needed,
  Commit,
}) {
  const classes = useStyles();

  const [state, setState] = useState({
    commitCount: 0,
    needed: needed,
    count: count,
    fulfilled: false,
  });
  const [error, setError] = useState("");

  const handleCommit = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      state.commitCount > 0 &&
      state.needed - (state.count + state.commitCount) >= 0
    ) {
      Commit(id, state.commitCount, state.needed, state.count);
      if (state.count + state.commitCount !== state.needed) {
        setState({
          ...state,
          count: parseInt(state.count) + parseInt(state.commitCount),
        });
        setError("");
      } else {
        setState({ ...state, fulfilled: true });
      }
    } else {
      setError("Please enter a value");
    }
  };
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        classes={{ content: classes.content }}
      >
        <Grid container direction="column" className={classes.descDiv}>
          <Grid item>
            {title}
            <hr />
          </Grid>

          <Grid item>
            Needs remaining: {state.needed - state.count} <hr />
          </Grid>
          <Grid item className={classes.date}>
            {convertDate(date)}
          </Grid>
          <Grid container direction="row" wrap="nowrap" alignItems="flex-end">
            <Grid item>
              <TextField
                label="# needs to fulfill"
                className={classes.root}
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                onChange={(e) =>
                  setState({ ...state, commitCount: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              {" "}
              {state.count < state.needed ? (
                <Button
                  color="default"
                  size="small"
                  onClick={handleCommit(id)}
                  className={classes.commit}
                >
                  Commit
                </Button>
              ) : (
                <Button disabled size="small" color="disabled">
                  Commit
                </Button>
              )}
              {error}
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction="column">
          <Grid item>{details ? details : "No Details"}</Grid>
          <br />
          <Grid item>{description ? description : "No Description"}</Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default NeedCard;
