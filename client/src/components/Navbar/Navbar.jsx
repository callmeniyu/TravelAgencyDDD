import React, { useState } from "react"
import "./Navbar.css"
import Logo_white from "../../assets/images/logo_white.png"
import Logo_black from "../../assets/images/logo_black.png"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { IoMenu } from "react-icons/io5"
import { useMediaQuery } from "react-responsive"


const Navbar = ({logo}) => {
    const isSmall = useMediaQuery({ maxWidth: 600 })
    const isLarge = useMediaQuery({ minWidth: 1300 })

    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <div className={`navbar ${menuToggle == true ? "nav-on" : ""}`}>
            <Link className="nav-logo" to="/">
                <img src={logo == "black" ? Logo_black : Logo_white} alt="nav-logo" />
                <h2 className={`${logo == "black" ? "logo-black" : ""}`}>{ isSmall? "DDD" : "Divine Destination Discoveries"}</h2>
            </Link>
            <ul className={`nav-elements ${menuToggle == true ? "nav-elements-on" : ""}`}>
                <Link to="/contact">
                    <li>
                        <Button className={`nav-btn`} text="Contact"/>
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
