import React from "react";
import ContactForm from "../form/ContactForm";

const ContactSection = () => {
  return (
    <section className="tl-7-contact">
      <div className="container">
        <div className="row gy-4 gy-md-5 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="tl-7-section-heading tl-7-contact-heading">
                <h2 className="tl-7-section-title">Keep In <span className="last-word">Touch</span> With Us</h2>
            </div>
            <ContactForm/>
          </div>

          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2169.5878941785077!2d90.39650346418186!3d23.861328234002062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9884c556831%3A0xbf922ce212df4e67!2sSpeedDigit%20Software%20Solution!5e0!3m2!1sen!2sbd!4v1687239684068!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
