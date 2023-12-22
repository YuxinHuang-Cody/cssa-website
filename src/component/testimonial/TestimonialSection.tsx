import React from 'react'
import AboutTestimonialSlider from '../slider/AboutTestimonialSlider'

const TestimonialSection = () => {
  return (
    <section className="tl-testimonial tl-2-testimonial pt-120 pb-120">
    <div className="container">
        <div className="tl-2-section-heading">
            <h2 className="tl-2-section-title">What Parents Say About Us</h2>
        </div>
        <AboutTestimonialSlider 
        pageStyle='tl-2' 
        singleCardStyle='tl-single-testimony tl-2-testimony'
        navStyle='tl'
        />
        </div>
    </section>
  )
}

export default TestimonialSection