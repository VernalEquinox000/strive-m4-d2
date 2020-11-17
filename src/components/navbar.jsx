import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {

    return (
        <div>
    <Navbar bg={props.backgroundColor} expand="lg">
                <Navbar.Brand href="#home">
                    {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
            </Navbar>
            </div>
    )

}

export default NavBar;