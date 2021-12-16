import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/Logo.png'
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='header-section'>
            <div>
                <Navbar variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand >
                            <img
                                src={logo}
                                width="100"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="menu-bar ms-auto">
                                <NavLink to='/home'>Home</NavLink>
                                <NavLink to='/blog'>Blog</NavLink>
                                <NavLink to='/products'>Products</NavLink>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                                <NavLink to='/contact'>Contact Us</NavLink>
                                <NavLink to='/about'>About Us</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;