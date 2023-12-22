'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TestimonialSlider4 = () => {
  return (
    <section className="tl-8-testimonial tl-3-section-spacing">
        <div className="container">
            <div className="tl-8-experts-heading">
                <h2 className="tl-8-section-title tl-8-experts-title">Students Feedback</h2>
                <p className="tl-8-experts-heading-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, arcu ut hendrerit auctor mauris sapien finibus dui, at imperdiet sapien dolor a urna.</p>
            </div>

            <div className="row justify-content-center position-relative">
                <div className="col-lg-10 col-md-12">
                    <Swiper 
                    autoplay={true}
                    loop={true}
                    navigation={{
                        nextEl: '.owl-next',
                        prevEl: '.owl-prev'
                    }}
                    modules={[Autoplay,Navigation]}
                    className="tl-8-testimonial-slider owl-carousel">
                        <SwiperSlide className="tl-8-testimony">
                            <p className="tl-8-testimony-txt">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum</p>

                            <div className="tl-8-testimony-reviewer">
                                <img src="assets/images/tl-8/reviewer-1.png" alt="Reviewer image"/>

                                <div className="tl-8-testimony-reviewer-info">
                                    <h6 className="tl-8-testimony-reviewer-name">Thomas R. Toe</h6>
                                    <span className="tl-8-testimony-reviewer-role">Driving Student</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="tl-8-testimony">
                            <p className="tl-8-testimony-txt">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum</p>

                            <div className="tl-8-testimony-reviewer">
                                <img src="assets/images/tl-8/reviewer-2.png" alt="Reviewer image"/>

                                <div className="tl-8-testimony-reviewer-info">
                                    <h6 className="tl-8-testimony-reviewer-name">Christian Luis</h6>
                                    <span className="tl-8-testimony-reviewer-role">Driving Student</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tl-8-testimonial-slider-nav">
                    <button type="button" role="presentation" className="owl-prev">
                        <i className="fa-regular fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next"> 
                        <i className="fa-regular fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSlider4