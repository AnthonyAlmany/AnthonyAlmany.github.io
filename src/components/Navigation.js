import React from 'react'
import {
    Link
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
    return (

        <div>

            <Navbar variant="dark" expand="lg" id="nav-flex">
                <Link to="/">  <Navbar.Brand>Home</Navbar.Brand> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="nav-flex-grow">
                    <Nav className="mr-auto">
                        <Nav.Link>Projects</Nav.Link>
                        <Link to="/api/sendmail"> <Navbar.Brand>Contact</Navbar.Brand> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
