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
import convertDate from "../utils/date";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
  descDiv: {
    whiteSpace: "wrap",
    width: "65%",
  },
  uncommit: {
    backgroundColor: "#c46956",
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

function CommitCard({ title, description, details, date, id, Uncommit }) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-around"
      alignItems="center"
    >
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
            onClick={Uncommit(id)}
            className={classes.uncommit}
          >
            Uncommit
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
    </Grid>
  );
}

export default CommitCard;
