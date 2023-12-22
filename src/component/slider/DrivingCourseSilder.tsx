'use client'
import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const DrivingCourseSilder = () => {
  return (
    <section className="tl-8-courses tl-3-section-spacing">
        <div className="container">
            <div className="tl-8-courses-heading">
                <h2 className="tl-8-section-title">Our Popular Driving Courses</h2>
                <div className="tl-8-courses-slider-nav">
                    <button type="button" role="presentation" className="owl-prev">
                        <i className="fa-regular fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next"> 
                        <i className="fa-regular fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <Swiper
            autoplay={true}
            loop={true}
            navigation={{
                nextEl: '.owl-next',
                prevEl: '.owl-prev'
            }}
            modules={[Autoplay,Navigation]} 
            className="tl-8-courses-slider owl-carousel">
                {courseList.slice(31,34).map((item) => (
                  <SwiperSlide className="tl-8-course" key={item.id}>
                    <div className="tl-8-course-img">
                        <img src={item.imgSrc} alt="Course Image"/>
                    </div>

                    <div className="tl-8-course-txt">
                        <div className="tl-8-course-info">
                            <span className="tl-8-course-price">{item.price}</span>
                            <span className="tl-8-course-level"><i className="fa-sharp fa-solid fa-signal-bars-good"></i> Intermediate</span>
                        </div>

                        <h3 className="tl-8-course-title">
                            <Link href={`/course/${item.slug}`}>
                                {item.title}
                            </Link>
                        </h3>
                        <p className="tl-8-course-descr">{item.desc}</p>

                        <div className="tl-8-course-parts">
                            <div className="tl-8-course-part">
                                <img src="assets/images/tl-8/service-1.png" alt="course part icon"/>

                                <div className="tl-8-course-part-txt">
                                    <h6 className="tl-8-course-part-title">Theory Session</h6>
                                    <h6 className="tl-8-course-part-duration">04 Hours</h6>
                                </div>
                            </div>

                            <div className="tl-8-course-part">
                                <img src="assets/images/tl-8/service-2.png" alt="course part icon"/>

                                <div className="tl-8-course-part-txt">
                                    <h6 className="tl-8-course-part-title">Practical Session</h6>
                                    <h6 className="tl-8-course-part-duration">04 Hours</h6>
                                </div>
                            </div>
                        </div>

                        <Link href={`/course/${item.slug}`} className="tl-def-btn">Read More</Link>
                    </div>
                </SwiperSlide>  
                ))}
                
            </Swiper>
        </div>
    </section>
  )
}

export default DrivingCourseSilder