import React, { useContext, useEffect, useState } from "react";
import { useNavigate} from "react-router"
import { ThemeContext } from "./ThemeProvider";
import {ThemeCard} from "./ThemeCard";
import "./Theme.css"
import { Table } from "react-bootstrap";


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
  
        <div className="themeList">
            <Table responsive striped bordered className="themeList__table">
                <thead >
                    <tr>
                        <th>Theme  </th>
                        <th>Description</th>
                        <th>Mood</th>
                        {/* <th>Example</th> */}
                        <th>Completed</th>
                    </tr>
    
    
                </thead>
                
         {
                themes.map(themeObj => {
              return <ThemeList key={themeObj.id} theme={themeObj} />
         })
        }
            </Table>
        </div> 
      
  )
}

