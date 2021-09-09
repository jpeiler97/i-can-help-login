import React, { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import convertDate from "../utils/date";
import { useSpring, animated } from "react-spring";

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
  },
  date: {
    fontSize: "12px",
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function NeedCard({ props, title, description, details, date, id, Commit }) {
  const classes = useStyles();
  const [cardState, setCardState] = useState("active");

  const handleCommit = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCardState("inactive");
    Commit(id);
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
          <Grid item className={classes.date}>
            {convertDate(date)}
          </Grid>
        </Grid>
        <Button
          size="small"
          onClick={handleCommit(id)}
          className={classes.commit}
        >
          Commit
        </Button>
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
