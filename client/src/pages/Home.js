import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";

const Home = () => {
  const { setCurrentUser } = useContext(UserContext);
  return (
    <>
      <section className="dashboard">
        <h4>Welcome {JSON.parse(localStorage.getItem("user")).fullName}</h4>
        <Button
          onClick={() => {
            localStorage.setItem("user", "");
            setCurrentUser("");
          }}
          className="log-out"
          variant="contained"
          color="secondary"
        >
          Log Out
        </Button>
      </section>
    </>
  );
};

export default Home;
