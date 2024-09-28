import React from "react"
import "./Home.css"
import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Pricing from "../../components/Pricing/Pricing"
import Destinations from "../../components/Destinations/Destinations"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <div className="home">
            <Fullpage>
                <FullpageNavigation style={{ cursor: "pointer",width:"1rem"}} />
                <FullPageSections>
                    <FullpageSection>
                        <Hero id="hero" />
                    </FullpageSection>
                    <FullpageSection>
                        <About id="about"/>
                    </FullpageSection>
                    <FullpageSection>
                        <Destinations id="destinations"/>
                    </FullpageSection>
                    <FullpageSection>
                        <Pricing id="pricing"/>
                    </FullpageSection>
                    <FullpageSection>
                        <Testimonials id="testimonials"/>
                    </FullpageSection>
                    <FullpageSection>
                        <Contact id="contact"/>
                    </FullpageSection>
                    <FullpageSection style={{height:"60vh"}}>
                        <Footer />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>

        </div>
    )
}

export default Home
