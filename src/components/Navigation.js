import React from 'react'
import {
    Link
} from "react-router-dom";
import {Link as Scroll} from 'react-scroll'

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
    return (

        <div>

            <Navbar variant="dark" expand="lg" id="nav-flex" fixed="top" >
            <Scroll activeClass="home" to="home" spy={true} smooth={true}>  <Link to="/">  <Navbar.Brand>Home</Navbar.Brand>  </Link> </Scroll>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="nav-flex-grow">
                    <Nav className="mr-auto" id="flex-nav">
                       <Scroll to="about" spy={true} smooth={true}> <Nav.Link>About</Nav.Link> </Scroll>
                       <Scroll to="languages" spy={true} smooth={true}> <Nav.Link>Languages</Nav.Link> </Scroll>
                       <Scroll to="projects" spy={true} smooth={true}> <Nav.Link>Projects</Nav.Link> </Scroll>
                        <Link to="/api/sendmail">  <span id="contact">Contact</span> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
