//purpose: to decide what happens at each url 
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="home/*" />
            <Route path="theme/create/*" />
            <Route path="name/create/*" />
            <Route path="edit/:userInputId/*" />
            <Route path=""
        </Routes>
    )
}