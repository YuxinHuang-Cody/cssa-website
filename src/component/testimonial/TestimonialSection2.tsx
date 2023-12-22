import React from 'react'
import AboutTestimonialSlider from '../slider/AboutTestimonialSlider'

const TestimonialSection2 = () => {
  return (
    <section className="tl-10-testimonial tl-testimonial pb-120">
    <div className="container">
        <div className="tl-10-section-heading">
            <h2 className="tl-section-title">
                Trusted by over 40,000+ Students Have To Say
                <span className="tl-10-users-img">
                    <img src="assets/images/tl-10/04.png" alt="user"/>
                    <img src="assets/images/tl-10/03.png" alt="user"/>
                    <img src="assets/images/tl-10/02.png" alt="user"/>
                    <span className="last-img">
                        <img src="assets/images/tl-10/01.png" alt="user"/>
                        <span className="last-img-txt">2k+</span>
                    </span>
                </span>
            </h2>
        </div>
        <AboutTestimonialSlider pageStyle="tl-10-single" singleCardStyle="tl-10-single-testimony" navStyle='tl-10'/>
        </div>
    </section>
  )
}

export default TestimonialSection2