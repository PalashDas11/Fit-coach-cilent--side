import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky="top" className='navbar-bg-custom'>
                <Container>
                    <Navbar.Brand href="#home" as={Link} to="/">
                        <span className='custom-font-size text-white'>Fitness</span>
                        <span className='logo'>Club</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#services" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link href="#blog" as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link href="#about" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="#login" as={Link} to="/login" className='custom-btn2 '>Login</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;