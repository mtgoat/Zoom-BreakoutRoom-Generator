// Purpose: log in form
import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Row, Col, Image, Form, Button, Modal, Container } from 'react-bootstrap';

export const Login = (props) => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()

    const navigate = useNavigate() //now needs to be navigate and useNaviagte()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(userExists => {
                if (userExists) {
                    localStorage.setItem("react_Generator_user", JSON.stringify(userExists))
                    props.setLoggedin(true)
                    navigate("/") // change to navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <Button variant="success" className="button--close" onClick={e => existDialog.current.close()}>Close</Button>
            </dialog>

            <Container>
                <Row>
                    <Col sm={6}>
                    <section className="left-sign-in">
                
                        <section as={Col} >
                            
                            <Form className="form--signIn" onSubmit={handleLogin}>
                                
                                <h2>Please sign in</h2>
                                <Form.Group as={Row}>
                                    <Form.Label sm="2" htmlFor="inputEmail"> Email address </Form.Label>
                                    <Col sm="10">
                                    <Form.Control ref={email} type="email"
                                        id="email"
                                        className="mb-3 form-control"
                                        placeholder="Email address"
                                        required autoFocus /></Col>
                                </Form.Group>
                                    <Button className="mb-3" variant="success" type="submit">
                                        Sign in
                                    </Button>
                            </Form>
                        
                            <section className="link--register">
                                <Link to="/register" className="link--register--name">Not a member yet?</Link>
                            </section>
                        
                        </section>

                    
                    </section>
                    </Col>
                   
                </Row>
           </Container>
        </main>
    )
}

