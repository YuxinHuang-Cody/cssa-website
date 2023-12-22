'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SoftwareSlider = () => {
  return (
    <section className="tl-14-software pt-120 pb-120">
        <div className="container">
            <h2 className="tl-14-section-title">Want to know More About The Costs of LMS Software?</h2>

            <Swiper 
            className="tl-14-software-slider owl-carousel"
            modules={[Autoplay,Pagination,Navigation]}
            autoplay={true}
            loop={true}
            pagination={{
                el: '.tl-14-software-slider-dots',
                clickable: true,
                bulletElement: 'button',
                bulletClass: 'tl-14-software-bullet',
                bulletActiveClass: 'active',
                renderBullet: function (index,className) {
                    return '<button class="' + className + '">' + '0' + (index + 1) + '</button>';
                },
              }}
            navigation={{
                prevEl: '.tl-14-software-prev',
                nextEl: '.tl-14-software-next'
            }}
            >
                <SwiperSlide className="tl-14-software-slide tl-8-course">
                    <div className="tl-8-course-txt">
                        <span className="tl-14-software-slide-index">01</span>
                        <h3 className="tl-8-course-title">Depending on Complexity of The LMS and Needs of The Organization</h3>
                        <p className="tl-8-course-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu elit semper, eget varius turpis posuere.</p>
                        <a href="#" className="tl-def-btn tl-14-def-btn">Read The Article</a>
                    </div>

                    <div className="tl-8-course-img">
                        <img src="assets/images/tl-14/about-img.jpg" alt="About Image"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="tl-14-software-slide tl-8-course">
                    <div className="tl-8-course-txt">
                        <span className="tl-14-software-slide-index">02</span>
                        <h3 className="tl-8-course-title">Depending on Complexity of The LMS and Needs of The Organization</h3>
                        <p className="tl-8-course-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu elit semper, eget varius turpis posuere.</p>
                        <a href="#" className="tl-def-btn tl-14-def-btn">Read The Article</a>
                    </div>

                    <div className="tl-8-course-img">
                        <img src="assets/images/tl-4/admission-bg.jpg" alt="About Image"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="tl-14-software-slide tl-8-course">
                    <div className="tl-8-course-txt">
                        <span className="tl-14-software-slide-index">03</span>
                        <h3 className="tl-8-course-title">Depending on Complexity of The LMS and Needs of The Organization</h3>
                        <p className="tl-8-course-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu elit semper, eget varius turpis posuere.</p>
                        <a href="#" className="tl-def-btn tl-14-def-btn">Read The Article</a>
                    </div>

                    <div className="tl-8-course-img">
                        <img src="assets/images/tl-1/banner-img.jpg" alt="About Image"/>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="tl-14-software-slider-controls position-relative">
                <div className="tl-14-slider-nav" id="tl-14-software-slider-nav">
                    <button 
                    type="button" 
                    role="presentation" 
                    className="tl-14-software-prev"
                    >
                        <i className="fa-light fa-arrow-left"></i>
                    </button>
                    <button 
                    type="button" 
                    role="presentation" 
                    className="tl-14-software-next"
                    >
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
                <div className="tl-14-software-slider-dots">
                </div>
            </div>
        </div>
    </section>
  )
}

export default SoftwareSlider