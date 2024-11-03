import React from "react"
import "./Featured.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { useMediaQuery } from "react-responsive"
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
                    <h4 className="feature-explore-btn">Explore more!</h4>
                </div>
                <form className="featured-right">
                        <div>
                            <label htmlFor="contact-name">Name</label>
                            <input type="text" name="contact-name" id="contact-name" className="contact-name" />
                        </div>
                        <div>
                            <label htmlFor="contact-email">Email</label>
                            <input type="email" name="email" id="contact-email" className="contact-email" />
                        </div>
                        <div>
                            <label htmlFor="contact-ph-no">Phone No</label>
                            <input type="text" name="phone" id="contact-ph-no" className="contact-ph-no" />
                        </div>
                        <div>
                            <label htmlFor="contact-ph-no">Place</label>
                            <input type="text" name="phone" id="contact-ph-no" className="contact-ph-no" />
                        </div>
                        <a href="" className="features-submit-btn">Get a quote Now!</a>
                    </form>
            </div>
        </div>
    )
}

export default Featured
