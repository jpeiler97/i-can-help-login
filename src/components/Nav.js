import React, { useContext } from "react";
import Hamburger from "./Hamburger";
import NavBar from "./NavBar";
import { Typography } from "@material-ui/core";
import { userContext } from "../Context";

function Nav() {
  const { isAuthenticated } = useContext(userContext);
  return (
    <div className="nav">
      {isAuthenticated ? <Hamburger></Hamburger> : <NavBar></NavBar>}
    </div>
  );
}

export default Nav;
