import React from "react"
import "./Testimonials.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { LuQuote } from "react-icons/lu"
import profile_img1 from "../../assets/images/testimonial_img1.jpg"
import profile_img2 from "../../assets/images/testimonial_img2.jpg"
import profile_img3 from "../../assets/images/testimonial_img5.jpg"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const Testimonials = () => {
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
        <div className="testimonials">
            <h2 className="section-header">
                <SectionTitle text="testimonials" />
                Reviews and Reflections
            </h2>
            <div className="testimonials-main">
                <div className="testimonials-main-top">
                    <motion.div
                        variants={Variant1}
                        whileInView={getVariant()}
                        viewport={{ once: true }}
                        className="testimonials-container"
                    >
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                            sapiente tenetur, laudantium impedit quam quis cupiditate quos odio? 
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img1} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>John Fernandez</h3>
                                <p>Aaro ivan aaro</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={Variant2}
                        whileInView={getVariant()}
                        viewport={{ once: true }}
                        className="testimonials-container"
                    >
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                            sapiente tenetur, laudantium impedit quam quis cupiditate quos odio?
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img2} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>John Fernandez</h3>
                                <p>Aaro ivan aaro</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={Variant3}
                        whileInView={getVariant()}
                        viewport={{ once: true }}
                        className="testimonials-container"
                    >
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                            sapiente tenetur, laudantium impedit quam quis cupiditate quos odio? 
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img3} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>John Fernandez</h3>
                                <p>Aaro ivan aaro</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="testimonials-main-bottom">
                <motion.div
                    variants={Variant3}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="testimonials-container"
                >
                    <LuQuote className="testimonials-quote-icon" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                        sapiente tenetur, laudantium impedit quam quis cupiditate quos odio?
                    </p>
                    <div className="testimonials-profile">
                        <div className="testimonials-profile-left">
                            <img src={profile_img3} alt="" />
                        </div>
                        <div className="testimonials-profile-right">
                            <h3>John Fernandez</h3>
                            <p>Aaro ivan aaro</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={Variant3}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="testimonials-container"
                >
                    <LuQuote className="testimonials-quote-icon" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                        sapiente tenetur, laudantium impedit quam quis cupiditate quos odio? 
                    </p>
                    <div className="testimonials-profile">
                        <div className="testimonials-profile-left">
                            <img src={profile_img3} alt="" />
                        </div>
                        <div className="testimonials-profile-right">
                            <h3>John Fernandez</h3>
                            <p>Aaro ivan aaro</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={Variant3}
                    whileInView={getVariant()}
                    viewport={{ once: true }}
                    className="testimonials-container"
                >
                    <LuQuote className="testimonials-quote-icon" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi, quaerat provident totam
                        sapiente tenetur, laudantium impedit quam quis cupiditate quos odio?
                    </p>
                    <div className="testimonials-profile">
                        <div className="testimonials-profile-left">
                            <img src={profile_img3} alt="" />
                        </div>
                        <div className="testimonials-profile-right">
                            <h3>John Fernandez</h3>
                            <p>Aaro ivan aaro</p>
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
