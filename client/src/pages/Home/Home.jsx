import React, { Suspense } from "react"
import "./Home.css"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
const Hero = React.lazy(() => import("../../components/Hero/Hero"))
const About = React.lazy(() => import("../../components/About/About"))
const Pricing = React.lazy(() => import("../../components/Pricing/Pricing"))
const Destinations = React.lazy(() => import("../../components/Destinations/Destinations"))
const Testimonials = React.lazy(() => import("../../components/Testimonials/Testimonials"))
const Contact = React.lazy(() => import("../../components/Contact/Contact"))
const Footer = React.lazy(() => import("../../components/Footer/Footer"))
import PropagateLoader from "react-spinners/PropagateLoader"

const Home = () => {
    return (
        <div className="home">
            <Fullpage>
                <FullpageNavigation style={{ cursor: "pointer", width: "1rem" }} />
                <FullPageSections>
                    <Suspense
                        fallback={
                            <div className="loader-container">
                                <PropagateLoader data-testid="loader" color="#f1693b" className="loader" />
                            </div>
                        }
                    >
                        <FullpageSection>
                            <Hero id="hero" />
                        </FullpageSection>
                        <FullpageSection>
                            <About id="about" />
                        </FullpageSection>
                        <FullpageSection>
                            <Destinations id="destinations" />
                        </FullpageSection>
                        <FullpageSection>
                            <Pricing id="pricing" />
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
                    </Suspense>
                </FullPageSections>
            </Fullpage>
        </div>
    )
}

export default Home
