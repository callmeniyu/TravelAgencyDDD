import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo_white.png"
import { FaInstagram } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-left">
                    <div className="nav-logo">
                        <img src={Logo} alt="" />
                        <Link style={{color:"white"}} to="/">Divine Destionation Discoveries</Link>
                    </div>
                    <p>
                        DDD, A-36, Block-A<br />
                        Near Electronic City Metro Station<br />Sector 62, Noida
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-social">
                        <a href="tel:+919717495669"><FaPhone className="footer-social-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=+919717495669&text=Hi! I’d like to know more about your travel packages."><FaWhatsapp className="footer-social-icon" /></a>
                        <a href="https://www.instagram.com/divine.destination.discoveries?igsh=OHJzY2ljam9yNTl1&utm_source=qr"><FaInstagram className="footer-social-icon" /></a>
                        <a href="https://www.linkedin.com/company/divine-destination-discoveries/"><FaLinkedin className="footer-social-icon" /></a>
                    </div>
                    <p>©Divine Destionation Discoveries. <br /> All Rights Reserved</p>
                </div>
            </div>
            <p className="footer-mark">
                designed by <span><a href="https://devgurusolutions.tech/">Devguru</a></span>
            </p>
        </div>
    )
}

export default Footer
