import React from "react"
import "./Contact.css"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import contact1_img from "../../assets/images/contact1.jpg"
const Contact = () => {
    return (
        <div className="contact">
            <h2 className="section-header">
                <SectionTitle text="contact" />
                Get in Touch
            </h2>
            <div className="contact-main">
                <div className="contact-left">
                    <img src={contact1_img} alt="contact1_img" />
                </div>
                <form className="contact-right">
                    <div className="contact-right-inputs">
                        <div>
                            <label htmlFor="contact-name">Name</label>
                            <input type="text" name="contact-name" id="contact-name" className="contact-name" />
                        </div>
                        <div>
                            <label htmlFor="destination">Destinations</label>
                            <input type="text" name="destination" id="destination" className="contact-destination" />
                        </div>
                        <div>
                            <label htmlFor="contact-email">Email</label>
                            <input type="email" name="email" id="contact-email" className="contact-email" />
                        </div>
                        <div>
                            <label htmlFor="contact-ph-no">Phone No</label>
                            <input type="text" name="phone" id="contact-ph-no" className="contact-ph-no" />
                        </div>
                    </div>
                    <div className="contact-right-bottom">
                        <label htmlFor="contact-remarks">Remarks</label>
                        <textarea name="remarks" id="contact-remarks"></textarea>
                        <div className="contact-submit">Submit</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
