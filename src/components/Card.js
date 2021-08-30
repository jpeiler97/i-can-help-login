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
  opportunityCard: {
    whiteSpace: "unset",
  },
  paper: {
    backgroundColor: "#ecf2d8",
  },
});

function Card({ title, description, details, id }) {
  const { opportunityCard, paper } = useStyles();

  // console.log({ id });
  const Commit = (id) => {
    let store = JSON.parse(localStorage.getItem("login"));

    axios
      .post(
        `${Route}/Provider/Commit`,
        {
          needId: id,
          count: 1,
        },
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container item xs={8} sm={6} md={4} className={opportunityCard}>
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

export default Card;
