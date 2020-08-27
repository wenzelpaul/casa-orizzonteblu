import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { app } from '../firebase/Config';
import { AuthContext } from '../firebase/Auth';


function LoginModal() {
  const {currentUser} = useContext(AuthContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Eingeloggt")
    }
  }, [isLoggedIn]);

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    let auth = app.auth();
    if (isLoggedIn2(auth)) {
      let user = auth.currentUser;
      console.log(user.email);
      auth.signOut().then(function () {
        setLoggedIn(false);
        alert('Ausloggen erfolgreich.');
      }).catch(function (error) {
        alert('oops sth went wrong: ' + error.message)
      });
    }
    else {
      setShow(true)
    }
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  function isLoggedIn2(auth) {
    if (auth && auth.currentUser != null) {
      setLoggedIn(true);
      return true;
    }
    setLoggedIn(false);
    return false;
  }

  const handleLogin = () => {
    handleClose();
    app.auth().signInWithEmailAndPassword(email, password).then(function () {
      setLoggedIn(true);
      alert('Erfolgreich eingeloggt');
    })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.message);
      });
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        {currentUser ? 'Logout' : 'Login'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;