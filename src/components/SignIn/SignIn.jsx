import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

/* ライブラリ */
import { uiConfig, auth } from "../../lib/api/user";
// import {auth} from "../../lib/api/firebase";

export default function SignIn({currentUser}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    auth.signOut();
  };

  if(currentUser) return  <button class="btn btn-primary" onClick={logout} > Logout</button>
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
