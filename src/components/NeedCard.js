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
    width: "65%",
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

  const handleCommit = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    Commit(id, state.commitCount, state.needed, state.count);
    if (state.count + state.commitCount !== state.needed) {
      setState({
        ...state,
        count: parseInt(state.count) + parseInt(state.commitCount),
      });
    } else {
      setState({ ...state, fulfilled: true });
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
          <Grid item>{title}</Grid>
          <Grid item>Needs remaining: {state.needed - state.count}</Grid>
          <Grid item className={classes.date}>
            {convertDate(date)}
          </Grid>
          <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="# needs to fulfill"
                onChange={(e) =>
                  setState({ ...state, commitCount: e.target.value })
                }
              />
            </form>
          </Grid>
        </Grid>
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
