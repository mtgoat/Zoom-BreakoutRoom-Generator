// Purpose: to print the theme
import React from "react";
import { Accordion, Badge, Button, Card, Modal, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";



export const ThemeCard = ({theme}) => {

    return (
      
        <Accordion.Item className="themeItem" eventKey={theme.id} >
        <Accordion.Header> <h5 className="themeCard__name">Theme Name: {theme.themeTitle}</h5></Accordion.Header>
        <Accordion.Body>
            <Row>
                <Col>
                <p className="themeCard__description">Description :</p>
                <p>{theme.description}</p>
                </Col>
                <Col>
                <p className="themeCard__mood">Mood:</p><p> {theme.mood.moodName}</p>
                </Col>
                <Col>
                <p className="themeCard__user"> User Name:</p>
                <p> {theme.user.userName} 
                    </p></Col>
                <Col>
                {theme.experienced ?<div><p className="themeCard__completed">Usage: </p> <p>  Completed</p></div>:<div><p className="themeCard__completed">Usage: </p> <p> Not Yet</p></div>}
                </Col>
            </Row>
        </Accordion.Body>
    </Accordion.Item> 


)
}