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
                        <Hero />
                    </FullpageSection>
                    <FullpageSection>
                        <About />
                    </FullpageSection>
                    <FullpageSection>
                        <Destinations />
                    </FullpageSection>
                    <FullpageSection>
                        <Pricing />
                    </FullpageSection>
                    <FullpageSection>
                        <Testimonials />
                    </FullpageSection>
                    <FullpageSection>
                        <Contact />
                    </FullpageSection>
                    <FullpageSection style={{height:"50vh"}}>
                        <Footer />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>

        </div>
    )
}

export default Home
