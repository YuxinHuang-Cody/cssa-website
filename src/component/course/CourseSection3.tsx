'use client'
import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CourseSection3 = () => {
  return (
    <section className="tl-12-courses tl-11-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading tl-12-courses-heading">
                <h2 className="tl-12-section-title">Explore Our Popular Courses</h2>

                <div className="tl-12-courses-heading-right d-flex align-items-end align-items-md-center">
                    <div className="tl-12-courses-slider-pagination" id="tl-12-courses-slider-pagination"></div>
                    <div className="tl-12-courses-slider-nav">
                        <button className="tl-12-courses-slider-prev" id="tl-12-courses-slider-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="tl-12-courses-slider-next" id="tl-12-courses-slider-next"><i className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
            <Swiper 
            className="tl-12-courses-slider" id="tl-12-courses-slider"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            navigation={{
                nextEl: '.tl-12-courses-slider-next',
                prevEl: '.tl-12-courses-slider-prev'
            }}
            modules={[Navigation]}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    spaceBetween: 20,
                }
            }}
            >
                {courseList.slice(0,6).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="tl-12-course">
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

                                <h4 className="tl-12-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h4>
                                <p className="tl-12-course-descr">{item.desc}</p>
                                <Link href={`/course/${item.slug}`} className="tl-12-course-btn"> View Course <i className="fa-regular fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </SwiperSlide>   
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default CourseSection3