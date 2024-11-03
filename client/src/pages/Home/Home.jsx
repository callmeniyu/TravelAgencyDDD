import React from "react"
import "./Home.css"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage"
import { useMediaQuery } from "react-responsive"
const Hero = React.lazy(() => import("../../components/Hero/Hero"))
const About = React.lazy(() => import("../../components/About/About"))
const Destinations = React.lazy(() => import("../../components/Destinations/Destinations"))
const Testimonials = React.lazy(() => import("../../components/Testimonials/Testimonials"))
const Contact = React.lazy(() => import("../../components/Contact/Contact"))
const Footer = React.lazy(() => import("../../components/Footer/Footer"))
const Featured = React.lazy(() => import("../../components/Featured/Featured"))

const Home = () => {
    const isSmall = useMediaQuery({ maxWidth: 600 })
    const heightClass = isSmall == false ? { height: "100vh", overflowY: "auto" } : "";
    
    return (
        <div className="home">
            {isSmall ? (
                <>
                    <Hero id="hero" />
                    <Featured id="featured" />
                    <About id="about" />
                    <Destinations id="destinations" />
                    <Testimonials id="testimonials" />
                    <Contact id="contact-small" />
                    <Footer />
                </>
            ) : (
                <Fullpage>
                    <FullpageNavigation style={{ cursor: "pointer", width: "1rem" }} />
                    <FullPageSections>
                        <FullpageSection>
                            <Hero id="hero" />
                        </FullpageSection>
                        <FullpageSection>
                                <Featured id="featured" style={heightClass} />
                        </FullpageSection>
                        <FullpageSection>
                            <About id="about" />
                        </FullpageSection>
                        <FullpageSection>
                            <Destinations id="destinations" />
                        </FullpageSection>
                        <FullpageSection>
                            <Testimonials id="testimonials" />
                        </FullpageSection>
                        <FullpageSection>
                            <Contact id="contact" />
                        </FullpageSection>
                        <FullpageSection style={{ height: "60vh" }}>
                            <Footer />
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
            )}
        </div>
    )
}

export default Home
