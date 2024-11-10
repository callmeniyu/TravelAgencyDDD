import React from "react"
import "./Hero.css"
import packages_hero_right from "../../../assets/images/packages_hero_right.jpeg"
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Handshake, Clock, Heart} from "lucide-react"

const Hero = () => {
    return (
        <div className="phero">
            <div className="phero-main">
                <div className="phero-left">
                    <h1>
                        <span className="packages-title-span">Maha Kumbh Mela 2025:</span> <br /> Join the World’s Largest
                        Gathering of Faith
                    </h1>
                    <p>Discover the Maha Kumbh Mela 2025 like never before with the most affordable, all-inclusive package you could imagine! From Delhi to Delhi, travel hassle-free while we take care of every detail. Just immerse yourself in the divine experience and let us handle the rest. Connect with us today to secure your spot and feel the divinity of the Maha Kumbh Mela like a true pilgrim!</p>
                </div>
                <div className="phero-right">
                    <div className="phero-right-features">
                        <FaHandHoldingDollar className="phero-right-features-icon"/> Affordable
                    </div>
                    <div className="phero-right-features">
                        <Handshake className="phero-right-features-icon"/> Fiendly
                    </div>
                    <div className="phero-right-features">
                        <Clock  className="phero-right-features-icon"/> Time-Bound
                    </div>
                    <div className="phero-right-features">
                        <Heart  className="phero-right-features-icon"/> Affordable
                    </div>
                    <img src={packages_hero_right} alt="package-right-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero
