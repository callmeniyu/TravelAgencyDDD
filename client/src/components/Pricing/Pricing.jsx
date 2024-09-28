import React, { useState } from "react"
import "./Pricing.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"


const Pricing = () => {
    const [pack, setPack] = useState("Kedarnath")
    const handleHover = (e) => {
        setPack(e.currentTarget.getAttribute("name"))
    }
    return (
        <div className="pricing">
            <h2 className="section-header">
                <SectionTitle text="pricing" />
                Affordable Pilgrimage Packages
            </h2>
            <div className="pricing-main">
                <div
                    className={`pricing-container ${pack == "Mathura" ? "current-pack" : ""}`}
                    onMouseEnter={(e) => handleHover(e)}
                    name="Mathura"
                >
                    <div className="pricing-container-top">
                        <h3>Mathura</h3>
                        <div className="pricing-container-pricing">
                            <h2>$50</h2>
                            <p>per head</p>
                        </div>
                    </div>
                    <ul className="pricing-container-middle">
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                    </ul>
                    <div className="pricing-container-bottom">Get Details</div>
                </div>
                <div
                    className={`pricing-container ${pack == "Kedarnath" ? "current-pack" : ""}`}
                    onMouseEnter={(e) => handleHover(e)}
                    name="Kedarnath"
                >
                    <div className="pricing-container-top">
                        <h3>Kedarnath</h3>
                        <div className="pricing-container-pricing">
                            <h2>$50</h2>
                            <p>per head</p>
                        </div>
                    </div>
                    <ul className="pricing-container-middle">
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                    </ul>
                    <div className="pricing-container-bottom">Get Details</div>
                </div>
                <div
                    className={`pricing-container ${pack == "Varanasi" ? "current-pack" : ""}`}
                    onMouseEnter={(e) => handleHover(e)}
                    name="Varanasi"
                >
                    <div className="pricing-container-top">
                        <h3>Varanasi</h3>
                        <div className="pricing-container-pricing">
                            <h2>$50</h2>
                            <p>per head</p>
                        </div>
                    </div>
                    <ul className="pricing-container-middle">
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            Lorem ipsum dolor sit
                        </li>
                    </ul>
                    <div className="pricing-container-bottom">Get Details</div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
