import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from "../utils/config";
import CommitCard from "../components/CommitCard";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function Commitments() {
  const [commitments, setCommitments] = useState({
    commitments: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommitments();
  }, []);

  const getCommitments = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetMyCommitments`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setCommitments(res.data);
      })
      .catch((err) => console.log(err));
  };

  const Uncommit = (id) => {
    let store = JSON.parse(localStorage.getItem("login"));

    axios
      .post(
        `${Route}/Provider/Commit`,
        {
          needId: id,
          count: 0,
        },
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      )
      .then((res) => {
        console.log(res);
        getCommitments(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : commitments.length > 0 ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {commitments.map((item, i) => {
            return (
              <CommitCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                details={item.details}
                Uncommit={Uncommit}
              ></CommitCard>
            );
          })}
        </Grid>
      ) : (
        <div className="no-commitments">
          <h2>No Commitments yet.</h2>
          <h3>View the "Fill a Need" page to find a new commitment.</h3>
        </div>
      )}
    </div>
  );
}

export default Commitments;
