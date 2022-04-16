import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home" as={Link} to ="/"> <span className='logo'> Fitness Club</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-items">
                            <Nav.Link href="#features" as={Link} to ="/">Home</Nav.Link>
                            <Nav.Link href="#pricing" as={Link} to ="/services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;