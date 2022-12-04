import axios from "axios";
import React, { useState } from "react";
export const UserContext = React.createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const Register = (data) => {
    return axios.post("http://localhost:5000/user/register", data);
  };
  const Login = (data) => {
    return axios.post("http://localhost:5000/user/login", data);
  };

  const options = {
    Register,
    currentUser,
    setCurrentUser,
    Login,
  };
  return (
    <UserContext.Provider value={options}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
