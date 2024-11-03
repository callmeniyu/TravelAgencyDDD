import React, { useState } from "react"
import "./Navbar.css"
import Logo from "../../assets/images/logo_white.png"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { IoMenu } from "react-icons/io5"
import { useMediaQuery } from "react-responsive"


const Navbar = () => {
    const windowScroll = () => {
        isLarge ? window.scrollTo(0,5000) : window.scrollTo(0,3000)
    }
    const isSmall = useMediaQuery({ maxWidth: 600 })
    const isLarge = useMediaQuery({ minWidth: 1300 })

    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <div className={`navbar ${menuToggle == true ? "nav-on" : ""}`}>
            <div className="nav-logo">
                <img src={Logo} alt="nav-logo" />
                <h2>{ isSmall? "DDD" : "Divine Destination Discoveries"}</h2>
            </div>
            <ul className={`nav-elements ${menuToggle == true ? "nav-elements-on" : ""}`}>
                <Link onClick={ windowScroll}>
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
