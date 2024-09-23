import React, { useState } from "react"
import "./Navbar.css"
import Logo from "../../assets/images/logo_white.png"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <div className={`navbar ${menuToggle == true ? "nav-on" : ""}`}>
            <div className="nav-logo">
                <img src={Logo} alt="nav-logo" />
                <h2>DDD</h2>
            </div>
            <ul className={`nav-elements ${menuToggle == true ? "nav-elements-on" : ""}`}>
                <Link to="/about">
                    <li>ABOUT</li>
                </Link>
                <Link to="/destinations">
                    <li>DESTINATIONS</li>
                </Link>
                <Link to="/pricing">
                    <li>PRICING</li>
                </Link>
                <Link to="/reviews">
                    <li>REVIEWS</li>
                </Link>
                <Link>
                    <li>
                        <Button className="nav-btn" text="Contact"/>
                    </li>
                </Link>
            </ul>
            <IoMenu
                className={`nav-menu-icon ${menuToggle == true ? "nav-menu-icon-on" : ""}`}
                onClick={() => setMenuToggle((prev) => !prev)}
            />
        </div>
    )
}

export default Navbar
