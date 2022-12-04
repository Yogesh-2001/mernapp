import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import { Navbar } from "./components/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/AuthContext";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    setCurrentUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          <Route
            exact
            path="/"
            element={currentUser && currentUser._id ? <Home /> : <LoginForm />}
          />
        }
        <Route path="/user/login" element={<LoginForm />} />
        <Route path="/user/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
