import React, { useState, createContext }  from "react";

export const ThemeContext = createContext()

// This component establishes what data can be used.
export const ThemeProvider = (props) => {
    const [themes, setThemes] = useState([])
//     const currentUser = JSON.parse(localStorage.getItem("react_Generator_user")).id
// console.log(JSON.parse(localStorage.getItem("react_Generator_user")).id)
    const getThemes = () => {
        return fetch(`http://localhost:8088/themes?_expand=mood&_expand=user`)
        .then(res =>  res.json())
        .then(setThemes)
    }

    const addTheme =  themeObj => {
        return fetch("http://localhost:8088/themes?_expand=mood&_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(themeObj)
        })
        .then(getThemes)
    }

    const getThemeById = (id) => {
        return fetch(`http://localhost:8088/themes/${id}?_expand=mood&_expand=user`)
            .then(res => res.json())
    }

    const updateTheme = themeObj => {
        return fetch(`http://localhost:8088/themes/${themeObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(themeObj)
        })
          .then(getThemes)
      }

      //this is for search function
      const [ searchTerms, setSearchTerms ] = useState("")
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ThemeContext.Provider value={{
            themes, getThemes, addTheme,  getThemeById, updateTheme, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}