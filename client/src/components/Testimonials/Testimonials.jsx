import React from "react"
import "./Testimonials.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { LuQuote } from "react-icons/lu"
import profile_img1 from "../../assets/images/testimonial_img1.jpeg"
import profile_img2 from "../../assets/images/testimonial_img2.jpeg"
import profile_img3 from "../../assets/images/testimonial_img3.jpeg"
import moments_img1 from "../../assets/images/moments_img1.jpg"
import moments_img2 from "../../assets/images/moments_img2.jpg"
import moments_img3 from "../../assets/images/moments_img3.jpg"
import { useMediaQuery } from "react-responsive"
import { Carousel } from "react-responsive-3d-carousel"
import { FaStar } from "react-icons/fa6"

const Testimonials = () => {
    const isSmall = useMediaQuery({ maxWidth: 600 })
    const isLarge = useMediaQuery({ minWidth: 1300 })
    const carouselHeight = isLarge ? "33rem" : "24rem"
    const carouselWidth = isLarge ? "25rem" : "20.5"
    const smallStyle = { width: "120%" }
    return (
        <>
            <div className="testimonials">
                <h2 className="section-header">
                    <SectionTitle text="testimonials" />
                    Reviews and Reflections
                </h2>
                <Carousel
                    interval="4000"
                    autoPlay={false}
                    showIndicators={false}
                    width={isLarge ? "25rem" : "20.5rem"}
                    height={carouselHeight || "24rem"}
                    showStatus={false}
                    arrowsWidth="2rem"
                    arrowsHeight="2rem"
                    arrowsDefaultColor="black"
                    isArrowsShadow={false}
                    selectable={true}
                    showArrows={!isSmall}
                    className="testimonials-main"
                    style={isSmall ? smallStyle : ""}
                >
                    <div className="testimonials-container">
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            What an amazing experience! Everything was perfectly organized, from start to finish. I felt
                            completely taken care of, and it made the whole journey so much more meaningful. Best wishes to
                            Divine Destination Discoveries – you guys deserve all the success!
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img1} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>Rajesh Sharma</h3>
                                <div className="testimonial-profile-star-div">
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-moments-container">
                        <div className="testimonials-moments-top">
                            <img src={moments_img1} alt="moments-img" />
                        </div>
                        <div className="testimonials-moments-bottom">
                            <p>
                                Absolutely fantastic! We couldn't have imagined such a smooth and fulfilling trip. Thanks
                                for all the attention to detail and the warm hospitality.
                            </p>
                            <h3>Kedarnath</h3>
                        </div>
                    </div>
                    <div className="testimonials-container">
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            Divine Destination Discoveries truly exceeded my expectations. I loved how easy everything was, from the booking to the final return.
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img2} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>Vikram Reddy</h3>
                                <div className="testimonial-profile-star-div">
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                    <FaStar className="testimonial-profile-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-moments-container">
                        <div className="testimonials-moments-top">
                            <img src={moments_img2} alt="moments-img" />
                        </div>
                        <div className="testimonials-moments-bottom">
                            <p>
                            This was hands-down the best travel experience I’ve had! Everything was well planned, and the guides were so knowledgeable.
                            </p>
                            <h3>Chopta</h3>
                        </div>
                    </div>
                    <div className="testimonials-container">
                        <LuQuote className="testimonials-quote-icon" />
                        <p>
                            Such a wonderful experience! I felt like a VIP the whole time. You took care of every little detail, and it made a huge difference. Thank you for the amazing trip, and best of luck for all your future journeys!
                        </p>
                        <div className="testimonials-profile">
                            <div className="testimonials-profile-left">
                                <img src={profile_img3} alt="" />
                            </div>
                            <div className="testimonials-profile-right">
                                <h3>Arjun Patel</h3>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-moments-container">
                        <div className="testimonials-moments-top">
                            <img src={moments_img3} alt="moments-img" />
                        </div>
                        <div className="testimonials-moments-bottom">
                            <p>
                            Thanks for all the attention to detail and the warm hospitality.
                            </p>
                            <h3></h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Testimonials
