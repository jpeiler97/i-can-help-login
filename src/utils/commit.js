import axios from "axios";
import { Route } from "./config";

const Commit = (id) => {
  let store = JSON.parse(localStorage.getItem("login"));

  axios
    .post(
      `${Route}/Provider/Commit`,
      {
        needId: id,
        count: 1,
      },
      { withCredentials: true },
      {
        headers: { Authorization: `Bearer ${store.token}` },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default Commit;
