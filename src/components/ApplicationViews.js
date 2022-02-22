//purpose: to decide what happens at each url 
import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserProvider } from "./users/UserProvider";
import { ThemeProvider } from "./themes/ThemeProvider";
import { MoodProvider } from "./moods/MoodProvider";
import { ThemeList } from "./themes/ThemeList";


export const ApplicationViews = () => {
    return (
        <ThemeProvider> 
            <MoodProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<ThemeList />} />
                        <Route path="theme/create/*" />
                        {/* <Route path="name/create/*" /> */}

                    </Routes>
                </UserProvider>
            </MoodProvider>
        </ThemeProvider>
    )
}

{/* <Route path="edit/:userInputId/*" />
            <Route path=""/> */}