import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from "../utils/config";
import CommitCard from "../components/CommitCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { animated, Transition } from "react-spring";

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
        setCommitments(commitments.filter((x) => x.id !== id));
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
        <Transition
          items={commitments}
          from={{
            opacity: 0,
          }}
          enter={{
            opacity: 1,
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: "translate3d(0px,0,0)",
          }}
          leave={{ transform: "translate3d(500px,0,0)" }}
          keys={(card) => card.id}
          delay={100}
        >
          {(props, commitment) => {
            return (
              <animated.div style={props}>
                <CommitCard
                  props={props}
                  key={commitment.id}
                  id={commitment.id}
                  title={commitment.title}
                  description={commitment.description}
                  details={commitment.details}
                  date={commitment.startDate}
                  Uncommit={Uncommit}
                ></CommitCard>
              </animated.div>
            );
          }}
        </Transition>
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
