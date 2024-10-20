import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";

const repo = "https://github.com/your-repo"; // Replace with your actual repo URL

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect staticTop>
        <Navbar.Brand>
          <a href={repo}>Off-canvas Navbar</a>
        </Navbar.Brand>
        <Button variant="primary" onClick={handleShow}>
          Launch offcanvas
        </Button>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link href={repo}>Code</Nav.Link>
            <Nav.Link href={`${repo}/issues`}>Issues</Nav.Link>
            <Nav.Link>Something else here</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contact;
