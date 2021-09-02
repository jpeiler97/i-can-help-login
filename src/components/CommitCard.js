import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "70%",
  },
  descDiv: {
    whiteSpace: "wrap",
  },
  uncommit: {
    backgroundColor: "#c46956",
    height: "30px",
  },
});

function CommitCard({ title, description, details, id, Uncommit }) {
  const classes = useStyles();

  // console.log({ id });

  return (
    <Grid container item xs={12} justify="space-around" alignItems="center">
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className={classes.descDiv}>{title}</div>
        </AccordionSummary>
        <AccordionDetails>
          {details ? details : "No Details"}
          <br />
          {description ? description : "No Description"}
        </AccordionDetails>
      </Accordion>
      <Button onClick={() => Uncommit(id)} className={classes.uncommit}>
        Uncommit
      </Button>
    </Grid>
  );
}

export default CommitCard;
