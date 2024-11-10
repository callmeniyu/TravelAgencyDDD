import React from "react"
import "./Featured.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import kumbh_img1 from "../../assets/images/kumb_mela1.jpeg"
import kumbh_img2 from "../../assets/images/kumb_mela2.jpeg"
import kumbh_img3 from "../../assets/images/kumb_mela3.jpeg"
import kumbh_img4 from "../../assets/images/kumb_mela4.jpeg"
const Featured = () => {
    const isSmall = useMediaQuery({ maxWidth: 600 })
    const heightClass = isSmall == false ? { height: "100vh", overflowY: "auto" } : {height:"100%"};
    return (
        <div className="featured" style={heightClass}>
            <h2 className="section-header">
                <SectionTitle text="Featured" />
                Maha Kumb Mela 2025
            </h2>
            <div className="featured-main featured-small-left">
                <div className="featured-left">
                    <h3>
                        Connect with Us for Exclusive <span>Maha Kumbh Mela</span> Packages.
                    </h3>
                    <p>Discover the Maha Kumbh Mela 2025 like never before with the most affordable, all-inclusive package you could imagine! From Delhi to Delhi, travel hassle-free while we take care of every detail. Just immerse yourself in the divine experience and let us handle the rest. Connect with us today to secure your spot and feel the divinity of the Maha Kumbh Mela like a true pilgrim!</p>
                    <Link to="/packages" className="feature-explore-btn">Explore more!</Link>
                </div>
                <div className="featured-right">
                    <div className="featured-right-top">
                        <img src={kumbh_img1} alt="featured-right-img" />
                        <img src={kumbh_img4} alt="featured-right-img" />
                        </div>
                    <div className="featured-right-bottom">
                    <img src={kumbh_img2} alt="featured-right-img" />
                    <img src={kumbh_img3} alt="featured-right-img" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Featured
