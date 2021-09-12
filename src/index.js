import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import Context from "./Context";

ReactDOM.render(
  <Router>
    <Context>
      <App />
    </Context>
  </Router>,
  document.getElementById("root")
);

window.isUpdateAvailable = new Promise(function (resolve, reject) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceworker.js")
        .then((reg) => {
          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case "installed":
                  if (navigator.serviceWorker.controller) {
                    resolve(true);
                  } else {
                    resolve(false);
                  }
                  break;
              }
            };
          };
        })
        .catch((err) => console.log("Error: ", err));
    });
  }
});
