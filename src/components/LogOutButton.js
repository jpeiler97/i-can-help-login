import React, { useContext } from "react";
import { Route } from "../utils/config";
import axios from "axios";
import { userContext } from "../Context";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

function LogoutButton({ closeDrawer }) {
  const { setIsAuthenticated } = useContext(userContext);

  const Logout = () => {
    let store = JSON.parse(localStorage.getItem("login"));

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
          closeDrawer();
          setIsAuthenticated(false);
        })
        .catch((err) => {
          //Will remove once I add a check for an expired token
          closeDrawer();
          setIsAuthenticated(false);
          console.log(err.response);
        });
    }
  };

  return (
    <List>
      <ListItem button onClick={Logout}>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary="Logout"></ListItemText>
      </ListItem>
    </List>
  );
}

export default LogoutButton;
