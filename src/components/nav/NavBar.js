import React, { Component } from "react";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import { Logout } from "../auth/Logout";
// import { Howdy, Welcome } from "../welcome/Welcome";

class NavBar extends Component{
  render () {
    return (
      <>
      <Navbar bg="light" variant="light">
            <Container>
            
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    
                    <Nav.Link className="Nav1" href="/generator">Generator</Nav.Link>
                    <Nav.Link href="theme/create/*">Add Theme</Nav.Link>
                    {/* <Nav.Link href="/">Add Name</Nav.Link> */}
                    {/* <Nav.Link href="/">Add Mood</Nav.Link> */}
                    <Nav.Link href="/">View all</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                   
                    
                  </Nav>
                    
                  </Navbar.Collapse>  
            </Container>
      </Navbar>
      </>
      )
  }
}

export default NavBar