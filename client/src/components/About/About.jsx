import React from "react"
import "./About.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import about_img from "../../assets/images/about.jpeg"
const About = () => {
    return (
        <div className="about">
            <h2 className="section-header"><SectionTitle text="about us" />
            What Sets Us Apart</h2>
            <div className="about-main">
                <div className="about-left">
                    <img src={about_img} alt="about-img" />
                </div>
                <div className="about-right">
                    <h2>We Craft Memorable Spiritual Experiences That Last a Lifetime</h2>
                    <div className="about-right-description">
                        <p>
                            At our core, we believe that every journey to a sacred destination should be more than just a
                            trip—it should be a transformative experience that touches the soul.
                        </p>
                        <p>
                            We meticulously design each pilgrimage, ensuring that every aspect, from spiritual guidance to
                            cultural immersion, creates lasting memories.
                        </p>

                        <p>
                            With our deep knowledge of India’s divine destinations, we take you beyond the tourist trail,
                            offering authentic, meaningful encounters that inspire personal growth and spiritual connection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
