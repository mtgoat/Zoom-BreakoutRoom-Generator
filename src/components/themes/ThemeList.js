import React, { useContext, useEffect, useState } from "react";
import { useNavigate} from "react-router"
import { ThemeContext } from "./ThemeProvider";
import {ThemeCard} from "./ThemeCard";
import "./Theme.css"
import { ThemeGenerator } from "./ThemeGenerator";
import { Accordion, Button } from "react-bootstrap";


export const ThemeList = (props) => {
    const { themes, getThemes } = useContext(ThemeContext)

    const navigate = useNavigate()
    // Empty dependency array - useEffect only runs after first render
   // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect (() => {
      // console.log("DocumentList: useEffect - getDocuments")
      getThemes()
  }, [])
    
  
  return (
  <>
        <div className="container">
            <h3 className="themeList__table"> List of Themes </h3 >
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-lg-10">
                        <Accordion defaultActiveKey="0">
                        {themes.map((themeObj) => (
                            <ThemeCard key={themeObj.id} theme={themeObj} />
                            ))}
                        </Accordion>
                    </div>
                </div>
        </div> 
        </> 
  )
}

