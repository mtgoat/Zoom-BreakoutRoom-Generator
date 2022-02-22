// Purpose: to print the theme
import { useContext, useEffect, useState } from "react"
import {  Button, Card, InputGroup, Modal } from "react-bootstrap"
import {useNavigate, useParams } from "react-router-dom"
import { ThemeContext } from "./ThemeProvider";




export const ThemeCard = ({theme}) => {

    return (
        <tr>
        <section className="themeCard" id={theme.id} >
            <div className="card-body">
                <h5 className="themeCard__name">Theme Name: {theme.themeTitle}</h5>
                <p className="themeCard__description">Description: {theme.description}</p>
                <p className="themeCard__mood">Mood: {theme.mood.moodName}</p>
                {theme.experienced}?<p className="themeCard__completed">Completed</p>:<p className="themeCard__completed">Not Completed</p>
          </div>
        </section>
        </tr>

)
}