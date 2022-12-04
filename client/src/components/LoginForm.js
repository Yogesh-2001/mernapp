import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { Login, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(data)
      .then((response) => {
        setError("");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setCurrentUser(response.data.user);
        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="col-md-6 col-10 mx-auto">
        <h4>Login Form</h4>
        {error && <p className="error-msg">{error}</p>}
        <TextField
          className="my-3 w-100"
          type="email"
          variant="outlined"
          label="Email address"
          required
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />

        <TextField
          className="my-3 w-100"
          type="password"
          variant="outlined"
          label="Password"
          required
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Link to="/user/register">Don't have an account ? Register</Link>
      </form>
    </>
  );
};

export default LoginForm;
