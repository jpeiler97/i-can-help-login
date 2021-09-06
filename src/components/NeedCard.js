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
  commit: {
    backgroundColor: "#b3eba7",
    height: "30px",
  },
});

function NeedCard({ title, description, details, id, Commit }) {
  const classes = useStyles();

  // console.log({ id });

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
        >
          <div className={classes.descDiv}>{title}</div>
        </AccordionSummary>
        <AccordionDetails>
          {details ? details : "No Details"}
          <br />
          {description ? description : "No Description"}
        </AccordionDetails>
      </Accordion>
      <Button onClick={() => Commit(id)} className={classes.commit}>
        Commit
      </Button>
    </Grid>
  );
}

export default NeedCard;
