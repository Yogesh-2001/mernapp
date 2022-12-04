import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { AppBar, Toolbar } from "@material-ui/core";
export const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/user/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
