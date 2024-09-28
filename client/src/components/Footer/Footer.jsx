import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo_white.png"
import { FaInstagram } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-left">
                    <div className="nav-logo">
                        <img src={Logo} alt="" />
                        <h2>Devinedestinydiscovery</h2>
                    </div>
                    <p>
                        Divinedestionationdiscoveries, 3rd Floor, Vantage Plaza, Koramangala 6th Block, Bengaluru, Karnataka
                        560095
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-social">
                        <Link></Link>
                        <FaPhone className="footer-social-icon" />
                        <FaWhatsapp className="footer-social-icon" />
                        <FaTwitter className="footer-social-icon" />
                    </div>
                    <p>©DD. All Rights Reserved</p>
                </div>
            </div>
            <p className="footer-mark">
                designed by <span>Devguru</span>
            </p>
        </div>
    )
}

export default Footer
