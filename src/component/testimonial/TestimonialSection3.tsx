import React from 'react'
import TestimonialSlider6 from '../slider/TestimonialSlider6'

const TestimonialSection3 = () => {
  return (
    <section className="tl-12-testimonial tl-11-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading">
                <h2 className="tl-12-section-title text-start">Students Feedback</h2>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img src="assets/images/tl-12/testimonial.jpg" alt="testimonial"/>
                </div>

                <div className="col-lg-8">
                    <TestimonialSlider6 />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection3