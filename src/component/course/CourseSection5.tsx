'use client'
import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const CourseSection5 = () => {
  return (
    <div className="tl-14-courses pb-120 pt-120" data-bg-color="#F3F1F1">
    <div className="container">
        <h2 className="tl-14-section-title text-center">Our Popular Courses</h2>

        <Swiper 
        className="tl-14-courses-row owl-carousel"
        spaceBetween={30}
        autoplay={true}
        loop={true}
        slidesPerView={3}
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            480: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                centeredSlides: true,
            },

            576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        }}
        >
            {courseList.slice(0,6).map((item) => (
             <SwiperSlide className="tl-12-course tl-14-course" key={item.id}>
                <div className="tl-12-course-img">
                    <img src={item.imgSrc} alt="Course Image"/>
                    <span className="tl-12-course-price">{item.price}</span>
                </div>

                <div className="tl-12-course-txt">
                    <div className="tl-12-course-info">
                        <h6 className="tl-12-course-category">Mathematics</h6>
                        <div className="tl-12-course-ratings">
                            <span className="tl-12-course-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <span>(4.8 Rating)</span>
                        </div>
                    </div>
                    <h4 className="tl-12-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h4>
                    <p className="tl-12-course-descr">{item.desc}</p>

                    <div className="tl-14-course-footer">
                        <div className="tl-12-course-stats">
                            <div className="tl-12-course-stat">
                                <span className="tl-12-course-stat-icon"><i className="fa-regular fa-book-blank"></i></span>
                                <span className="tl-12-course-stat-txt">{item.lessons} Lessons</span>
                            </div>

                            <div className="tl-12-course-stat">
                                <span className="tl-12-course-stat-icon"><i className="fa-regular fa-user-group"></i></span>
                                <span className="tl-12-course-stat-txt">{item.students} Students</span>
                            </div>
                        </div>
                        <Link href={`/course/${item.slug}`} className="tl-12-course-btn"> View Course <i className="fa-regular fa-arrow-right"></i></Link>
                    </div>
                </div>
            </SwiperSlide>   
            ))}
            
        </Swiper>

        <div className="tl-6-slider-dots tl-14-slider-dots" id="tl-14-courses-slider-dots"></div>
    </div>
</div>
  )
}

export default CourseSection5