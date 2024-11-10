import React from "react"
import "./Packages.css"
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Packages/Hero/Hero"
import Journey from "../../components/Packages/Journey/Journey"
import Batches from "../../components/Packages/Batches/Batches"
import Pricing from "../../components/Packages/Pricing/Pricing"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
const Packages = () => {
    return (
        <div className="packages">
            <Navbar logo="black"/>
            <Hero />
            <Journey />
            <Batches />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}

export default Packages
