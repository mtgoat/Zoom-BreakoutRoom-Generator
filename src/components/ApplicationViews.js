//purpose: to decide what happens at each url 
import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserProvider } from "./users/UserProvider";
import { ThemeProvider } from "./themes/ThemeProvider";
import { MoodProvider } from "./moods/MoodProvider";
import { ThemeList } from "./themes/ThemeList";
import { ThemeForm } from "./themes/ThemeForm";
import { ThemeGenerator } from "./themes/ThemeGenerator";

export const ApplicationViews = () => {
    return (
        <ThemeProvider> 
            <MoodProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<ThemeList />} />
                        <Route path="theme/create/*" element={<ThemeForm/>} />
                        <Route path="/generator" element={<ThemeGenerator />} /> 

                    </Routes>
                </UserProvider>
            </MoodProvider>
        </ThemeProvider>
    )
}

{/* <Route path="edit/:userInputId/*" />
            <Route path=""/> */}