import React from 'react'
import ContactForm2 from '../form/ContactForm2'

const ContactSection2 = () => {
  return (
    <section className="tl-8-contact tl-3-section-spacing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="tl-3-consult-img">
                        <h2 className="tl-8-section-title">Get In Touch With Us</h2>
                        <img src="assets/images/tl-8/contact.jpg" alt="consult image"/>
                    </div>
                </div>

                <div className="col-lg-6 col-9 col-xxs-12">
                    <ContactForm2/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection2