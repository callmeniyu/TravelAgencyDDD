import React from "react"
import "./Destinations.css"
import Button from "../Button/Button"
import SectionTitle from "../SectionTitle/SectionTitle"
import destinations_img1 from "../../assets/images/destinations.jpeg"
import destinations_img2 from "../../assets/images/hero_img4.jpg"
import destinations_img3 from "../../assets/images/hero_img1.jpeg"
import { FaLongArrowAltRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
const Destinations = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

    const Variant1 = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }
    const Variant2 = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }
    const Variant3 = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.8, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.8, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }

    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }
    return (
        <div className="destinations">
            <h2 className="section-header">
                <SectionTitle text="destinations" />
                Sacred Sites to Visit
            </h2>
            <div className="destinations-main">
                <motion.div
                    variants={Variant1}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="destinations-container"
                >
                    <div className="destinations-container-top">
                        <img src={destinations_img1} alt="destinations_img1" />
                    </div>
                    <div className="destinations-container-bottom">
                        <h3>Mathura</h3>
                        <p>
                            Birthplace of Lord Krishna. It is one of India’s most revered spiritual destinations. Situated
                            on the banks of the Yamuna River, it is home to numerous temples, each celebrating Krishna's
                            life and teachings. The city comes alive during festivals like Janmashtami and Holi, attracting
                            pilgrims and tourists alike. Mathura’s vibrant culture, combined with its rich mythology, offers
                            a deeply spiritual experience.{" "}
                        </p>
                        <div className="destinations-container-btn">
                            Know Details <FaLongArrowAltRight className="arrow" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={Variant2}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="destinations-container"
                >
                    <div className="destinations-container-top">
                        <img src={destinations_img2} alt="destinations_img1" />
                    </div>
                    <div className="destinations-container-bottom">
                        <h3>Kedarnath</h3>
                        <p>
                            Kedarnath, nestled in the majestic Himalayas, is one of the holiest pilgrimage sites in India
                            and a key part of the Char Dham Yatra. Dedicated to Lord Shiva, the ancient Kedarnath Temple
                            sits at an altitude of 3,583 meters, surrounded by snow-capped peaks and the Mandakini River.
                            The temple’s spiritual significance, combined with its breathtaking natural beauty, draws
                            thousands of devotees and trekkers each year.{" "}
                        </p>
                        <div className="destinations-container-btn">
                            Know Details <FaLongArrowAltRight className="arrow" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={Variant3}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="destinations-container"
                >
                    <div className="destinations-container-top">
                        <img src={destinations_img3} alt="destinations_img1" />
                    </div>
                    <div className="destinations-container-bottom">
                        <h3>Varanasi</h3>
                        <p>
                            Varanasi, one of the oldest living cities in the world, is a sacred hub of Hindu spirituality
                            situated along the banks of the Ganges River. Known as the city of Lord Shiva, Varanasi is
                            revered for its ghats, where pilgrims perform rituals, bathe in the holy waters, and attend the
                            mesmerizing Ganga Aarti. The city’s narrow lanes are filled with ancient temples, bustling
                            markets, and spiritual energy.{" "}
                        </p>
                        <div className="destinations-container-btn">
                            Know Details <FaLongArrowAltRight className="arrow" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Destinations
