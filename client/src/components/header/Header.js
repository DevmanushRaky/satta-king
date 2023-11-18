import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Logo from "../../assests/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>

            <Navbar bg="light" expand="md" sticky='top' className='shadow-sm'>
                <Container>
                    <Navbar.Brand >
                        <Link to="/">
                            <img
                                src={Logo}
                                className="d-inline-block align-top main-logo "
                                alt="Your Logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto menu">
                            <Nav.Link className="nav_links" as={Link} to="/">Home </Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/result">Result</Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/chart">Chart</Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header