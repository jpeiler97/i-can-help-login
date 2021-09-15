import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from "../utils/config";
import NeedCard from "../components/NeedCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { animated, Transition } from "react-spring";

function NeedsPage() {
  const [needs, setNeeds] = useState({
    needs: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNeeds();
  }, []);

  const getNeeds = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetOpenOpportunities?daysOut=60`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        setIsLoading(false);
        setNeeds(res.data);
      })
      .catch((err) => console.log(err));
  };

  const Commit = (id, count, needed, commitments) => {
    let store = JSON.parse(localStorage.getItem("login"));

    axios
      .post(
        `${Route}/Provider/Commit`,
        {
          needId: id,
          count: count,
        },
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      )
      .then((res) => {
        if (parseInt(commitments) + parseInt(count) === needed) {
          setNeeds(needs.filter((x) => x.id !== id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : needs.length > 0 ? (
        <Transition
          items={needs}
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
          {(props, need) => {
            return (
              <animated.div style={props}>
                <NeedCard
                  props={props}
                  key={need.id}
                  id={need.id}
                  title={need.title}
                  description={need.description}
                  details={need.details}
                  count={need.commitments}
                  needed={need.needed}
                  date={need.commitmentDate}
                  Commit={Commit}
                ></NeedCard>
              </animated.div>
            );
          }}
        </Transition>
      ) : (
        <div className="no-commitments">
          <h2>No Opportunities Available</h2>
        </div>
      )}
    </div>
  );
}

export default NeedsPage;
