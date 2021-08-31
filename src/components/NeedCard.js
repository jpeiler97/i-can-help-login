import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Route } from "../utils/config";
import axios from "axios";
const useStyles = makeStyles({
  needCard: {
    whiteSpace: "unset",
  },
  paper: {
    backgroundColor: "#ecf2d8",
  },
});

function NeedCard({ title, description, details, id, Commit }) {
  const { needCard, paper } = useStyles();

  // console.log({ id });

  return (
    <Grid container item xs={8} sm={6} md={4} className={needCard}>
      <button onClick={() => Commit(id)}>Commit</button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          {title} <br />
          <br /> {description}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default NeedCard;
