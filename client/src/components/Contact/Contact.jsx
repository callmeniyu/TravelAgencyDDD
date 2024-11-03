import React, { useRef, useState } from "react"
import "./Contact.css"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import contact_phone from "../../assets/images/Contact_us_amico.png"
import { useMediaQuery } from "react-responsive"
import emailjs from '@emailjs/browser';
import { Alert } from "@mui/material"
import { IoMdClose } from "react-icons/io";

const Contact = () => {
    const [alertResponse, setAlertResponse] = useState(null)

    const isSmall = useMediaQuery({ maxWidth: 600 })
    const heightClass = isSmall == false ? { height: "100vh", overflowY: "auto" } : { height: "100%" };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y2u7zob', 'template_murjaok', form.current, {
                publicKey: 'xdzxiPeEGhvNH8LcI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setAlertResponse("success")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setAlertResponse("failed")
                },
            );
    }
    console.log(alertResponse)
    
    return (
        <div className="contact" style={heightClass}>
            <h2 className="section-header">
                <SectionTitle text="contact" />
                Get in Touch
            </h2>
            <div className="contact-main">
                <div className="contact-left">
                    <img src={contact_phone} alt="contact1_img" />
                </div>
                <form className="contact-right" ref={form} onSubmit={sendEmail}>
                    <div className="contact-right-inputs">
                        <div>
                            <label htmlFor="contact-name">Name</label>
                            <input type="text" name="from_name" id="contact-name" className="contact-name" />
                        </div>
                        <div>
                            <label htmlFor="destination">Place</label>
                            <input type="text" name="from_place" id="destination" className="contact-destination" />
                        </div>
                        <div>
                            <label htmlFor="contact-email">Email</label>
                            <input type="email" name="from_email" id="contact-email" className="contact-email" />
                        </div>
                        <div>
                            <label htmlFor="contact-ph-no">Phone No</label>
                            <input type="text" name="from_phone" id="contact-ph-no" className="contact-ph-no" />
                        </div>
                    </div>
                    <div className="contact-right-bottom">
                        <label htmlFor="contact-remarks">Query</label>
                        <textarea name="from_message" id="contact-remarks"></textarea>
                        <button className="contact-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className={`contact-alert-div ${alertResponse == "success" ? "contact-alert-on" : ""}`}>
                <Alert variant="filled" severity="success" className="contact-alert">
                    Your message has succesfully sent.
                <IoMdClose onClick={ ()=>setAlertResponse("")} className="contact-success-close-icon"/>
                </Alert>
            </div>
        </div>
    )
}

export default Contact
