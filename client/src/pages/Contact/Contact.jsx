import React from 'react'
import "./Contact.css"
import ContactComponent from "../../components/Contact/Contact"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Contact = () => {
  return (
    <div className='contact-page'>
      <Navbar logo="black"/>
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default Contact