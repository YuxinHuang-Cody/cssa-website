'use client'
import { courseList } from '@/data/Data'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CourseSlider2 = () => {
  return (
    <section className="tl-2-courses tl-2-blogs pt-120 pb-120">
            <div className="container">
                <div className="tl-2-section-heading">
                    <h2 className="tl-2-section-title">Explore Popular Courses</h2>
                    <div className="tl-2-blogs-slider-nav" id="tl-2-courses-slider-nav">
                        <button type="button" role="presentation" className="owl-prev">
                            <i className="fa-light fa-arrow-left"></i>
                        </button>
                        <button type="button" role="presentation" className="owl-next"> 
                            <i className="fa-light fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <Swiper 
                className="tl-2-courses-row owl-carousel"
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                navigation={{
                    nextEl: '.owl-next',
                    prevEl: '.owl-prev'
                }}
                modules={[Autoplay,Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
        
                    480: {
                        slidesPerView: 1.5,
                        centeredSlides: true,
                    },
        
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
        
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
        
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    }
                }}
                >
                    {courseList.slice(0,6).map((item) => (
                        <SwiperSlide className="tl-2-blog tl-2-course" key={item.id}>
                        <div className="tl-2-course-img">
                            <img src={item.imgSrc} alt="Course Image"/>
                            <span className="tl-2-course-price">{item.price}</span>
                        </div>

                        <div className="tl-2-course-txt">
                            <h4 className="tl-1-course-title tl-2-course-title"><a href="#">{item.title}</a></h4>
                            <p className="tl-2-course-descr">{item.desc}</p>

                            <div className="tl-2-course-infos">
                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Age: </h6>
                                <h6 className="tl-2-course-info-value">{item.age}</h6>
                                </div>

                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Time: </h6>
                                    <h6 className="tl-2-course-info-value">{item.time}</h6>
                                </div>

                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Seat: </h6>
                                    <h6 className="tl-2-course-info-value">{item.seat}</h6>
                                </div>
                            </div>

                            <a href="#" className="tl-2-blog-btn"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span> read more</a>
                        </div>
                    </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </section>
  )
}

export default CourseSlider2