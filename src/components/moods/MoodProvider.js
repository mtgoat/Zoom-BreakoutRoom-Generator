// Purpose: to provide mood api for adding and updating theme 
import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const MoodContext = createContext()

// This component establishes what data can be used.
export const MoodProvider = (props) => {
    const [moods, setMoods] = useState([])

    const getMoods = () => {
        return fetch("http://localhost:8088/moods")
        .then(res =>  res.json())
        .then(setMoods)
    }

    const addMood = MoodObj => {
        return fetch("http://localhost:8088/moods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(MoodObj)
        })
        .then(getMoods)
    }

    /*
        You return a context provider which has the
        `moods` state, `getMoods` function,
        and the `addMood` function as keys. This
        allows any child elements to access them.
    */
    return (
        <MoodContext.Provider value={{
            moods, getMoods, addMood
        }}>
            {props.children}
        </MoodContext.Provider>
    )
}
