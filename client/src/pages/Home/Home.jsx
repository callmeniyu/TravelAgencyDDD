import React from "react"
import "./Home.css"
import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Pricing from "../../components/Pricing/Pricing"
import Destinations from "../../components/Destinations/Destinations"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage"

const Home = () => {
    const SectionStyle = {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div className="hero">
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                    <FullpageSection>
                        <Hero style={SectionStyle} />
                    </FullpageSection>
                    <FullpageSection>
                        <About style={SectionStyle} />
                    </FullpageSection>
                    <FullpageSection>
                        <Destinations style={SectionStyle} />
                    </FullpageSection>
                    <FullpageSection>
                        <Pricing style={SectionStyle} />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </div>
    )
}

export default Home
