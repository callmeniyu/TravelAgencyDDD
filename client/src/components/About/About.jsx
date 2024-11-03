import React from "react"
import "./About.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import about_img from "../../assets/images/about.jpeg"
import Spiritual_BG from "../../assets/images/Spiritual_BG.jpg"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const About = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })
    const heightClass = isSmallScreen == false ? { height: "100vh", overflowY: "auto" } : {height:"100%"};

    const h2Variant = {
        small: {
            x: [-10, 0],
            opacity: [0, 1],
            transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            x: [-10, 0],
            opacity: [0, 1],
            transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }
    const pVariant = {
        small: {
            x: [-10, 0],
            opacity: [0, 1],
            transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            x: [-10, 0],
            opacity: [0, 1],
            transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }

    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }

    return (
        <div className="about" style={heightClass}>
            <h2 className="section-header"><SectionTitle text="about us" />
            What Sets Us Apart</h2>
            <div className="about-main">
                <div className="about-left">
                    <img src={Spiritual_BG} alt="about-img" />
                </div>
                <div className="about-right">
                    <motion.h2
                        variants={h2Variant}
                        whileInView={getVariant()}
                        viewport={{once:true}}
                    >We Craft Memorable Spiritual Experiences That Last a Lifetime</motion.h2>
                    <motion.div
                        variants={pVariant}
                        whileInView={getVariant()}
                        viewport={{once:true}}
                        className="about-right-description">
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
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
