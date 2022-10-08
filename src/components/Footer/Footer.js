import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavbar from '../BottomNavbar/BottomNavbar';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className="bottom-navbar-footer d-lg-none">
                <BottomNavbar></BottomNavbar>
            </div>
        <div className='footer' style={{background:'#0F3460', }}>
            
            <div className="container">
                <div className="row justify-content-between " >
                    <div className="col-md-4">
                        <div className="footer-header">
                            <Link to='/'> <img src="https://bonik-react.vercel.app/assets/images/logo.svg"  alt="" /> </Link>
                       
                        </div>
                    
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-header">
                         <h4>   About Us</h4>
                        </div>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <div className="footer-header">
                         <h4>Customer Care</h4>
                        </div>
                        <ul>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Terms & Conditions</li>
                            <li>Returns & Refunds</li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <div className="footer-header">
                         <h4>Contact Us</h4>
                        </div>
                        <ul>
                            <li>70 Washington Square South, New York, NY 10012, United States</li>
                            <li>Email: uilib.help@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;