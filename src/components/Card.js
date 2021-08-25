import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  opportunityCard: {
    whiteSpace: "unset",
  },
  paper: {
    backgroundColor: "#ecf2d8",
  },
});

function Card({ title, description, details }) {
  const { opportunityCard, paper } = useStyles();
  return (
    <Grid container item xs={8} sm={6} md={4} className={opportunityCard}>
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

export default Card;
