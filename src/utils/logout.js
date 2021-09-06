import axios from "axios";
import { Route } from "./config";

const Logout = () => {
  let store = JSON.parse(localStorage.getItem("login"));
  console.log(store.token);
  if (store && store.token) {
    axios
      .post(
        `${Route}/User/Logout`,
        { withCredentials: true },
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      )
      .then((res) => {
        localStorage.removeItem("login");
      })
      .catch((err) => console.log(err.response));
  }
};

export default Logout;
