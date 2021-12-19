import React from 'react';
import logo from '../../image/Logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="row my-4">
                    <div className="col-md-4">
                        <h3> <i className="fas fa-shipping-fast"></i> Free Shipping</h3>
                        <h6>Perfume Shipping From Indonesia</h6>
                    </div>
                    <div className="col-md-4">
                        <h3> <i className="fas fa-shield-virus"></i> One Year Service</h3>
                        <h6>Service Guarantee After bye Motor bike</h6>
                    </div>
                    <div className="col-md-4">
                        <h3> <i className="fas fa-phone-alt"></i> Online Support</h3>
                        <h6>24 Online Support from Our Showroom</h6>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 footer-content">
                        <h4 className='ms-4 my-3'>Contact Us</h4>
                        <p> <i className="fas fa-map-marker-alt icon"></i> Address : Banani,Model Town,Dhaka</p>
                        <p> <i className="fas fa-phone-alt icon"></i> Phone : +0881236459</p>
                        <p> <i className="far fa-envelope-open icon"></i> email: diderbokth2255@gmail.com</p>
                    </div>
                    <div className="col-md-2 footer-content">
                        <h4 className='ms-4'>My Account</h4>
                        <ul>
                            <li>Personal Info</li>
                            <li>Orders</li>
                            <li>Address</li>
                            <li>My wishlist</li>
                        </ul>

                    </div>
                    <div className="col-md-2 footer-content">
                        <h4 className='ms-4'>Information</h4>
                        <ul>
                            <li>Delivery</li>
                            <li>Prices Drop</li>
                            <li>New Products</li>
                            <li>Best sales</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <img src={logo} alt="" className='img-fluid my-4' />
                        <p>
                            In order to continue to be a company society wants to exist,
                            Perfume Store aims to become the  “power” that supports.
                        </p>
                        <div className="social-media">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-whatsapp-square"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <p>&copy; 2021 made by Didar </p>
            </div>
        </div>
    );
};

export default Footer;