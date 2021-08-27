import axios from "axios";
import { Route } from "./config";

const Logout = () => {
  let store = JSON.parse(localStorage.getItem("login"));
  if (store && store.token) {
    axios
      .post(`${Route}/user/logout`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("login");
      })
      .catch((err) => console.log(err));
  }
};

export default Logout;
