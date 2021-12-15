import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/Logo.png'
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='header-section'>
            <div className="d-flex align-items-center justify-content-around ">
                <img src={logo} alt="" className='img-fluid' />
                <div className="search-box">
                    <button>Search</button>
                    <input type="text" placeholder='Search your Item' />
                </div>
                <h4>My Cart <i class="fas fa-cart-arrow-down icon"></i></h4>
            </div>
            <div>
                <Navbar variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Nav className="menu-bar ms-auto">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/product'>Products</NavLink>
                            <NavLink to='/contact'>Contact Us</NavLink>
                            <NavLink to='/about'>About Us</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;