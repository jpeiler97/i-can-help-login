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
  visible: {
    visibility: "visible",
  },
  invisible: {
    visibility: "hidden",
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
    needed: parseInt(needed),
    count: parseInt(count),
    fulfilled: false,
  });
  const [error, setError] = useState("");

  const oneLeft = (needed, count) => {
    if (needed - count <= 1) {
      return true;
    }
  };

  const handleCommit = (id) => (e) => {
    let needed = parseInt(state.needed);
    let count = parseInt(state.count);
    let commitCount = parseInt(state.commitCount);
    e.preventDefault();
    e.stopPropagation();
    if (commitCount > 0 && needed - (count + commitCount) >= 0) {
      Commit(id, commitCount, needed, count);
      if (count + commitCount !== needed) {
        setState({
          ...state,
          count: count + commitCount,
        });
        setError("");
      } else {
        setState({ ...state, count: state.needed, fulfilled: true });
      }
    } else if (needed === 1 || needed - count === 1) {
      Commit(id, 1, needed, count);
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
            <Grid
              item
              className={
                !oneLeft(state.needed, state.count)
                  ? classes.visible
                  : classes.invisible
              }
            >
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
