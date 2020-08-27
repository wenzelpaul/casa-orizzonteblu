import React, { useCallback, useContext, useState } from "react";
import { app } from "../firebase/Config";
import { AuthContext } from "../firebase/Auth.js";

import { Button, Form, Modal } from "react-bootstrap";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (!!currentUser) {
            app.auth().signOut().then(function () {
                alert('Ausloggen erfolgreich.');
            }).catch(function (error) {
                alert('oops sth went wrong: ' + error.message)
            });
        }
        else {
            setShow(true)
        }
    };

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                {!!currentUser ? 'Logout' : 'Login'}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleLogin}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Login</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default Login;