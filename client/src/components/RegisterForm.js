import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        console.log(response);
        setError("");
        alert(response.data.message);
        navigate("/user/login");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" register col-md-6 col-10 mx-auto"
      >
        <h4>Registeration Form</h4>
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
          type="text"
          variant="outlined"
          label="Full Name"
          required
          onChange={(event) =>
            setData({ ...data, fullName: event.target.value })
          }
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
          Register
        </Button>
        <Link to="/user/login">Already have an account ? Login</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
