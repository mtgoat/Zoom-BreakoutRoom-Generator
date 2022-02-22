
//Purpose:  check if a user is logged in then display NavBar and Application View otherwise it goes to log in or registerimport React, { useState } from "react";
import React, { useState, useContext, useEffect} from "react";
import NavBar from "./components/nav/NavBar";
import {ApplicationViews} from "./components/ApplicationViews";
import "./Generator.css";

import { Routes, Route, Navigate } from "react-router";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Logout} from './components/auth/Logout'

export const Generator = () => {
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("react_Generator_user")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
        
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};