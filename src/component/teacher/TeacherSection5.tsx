'use client'
import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TeacherSection5 = () => {
  return (
    <section className="tl-12-mentor tl-11-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading tl-12-courses-heading">
                <h2 className="tl-12-section-title">Top Class Mentors</h2>

                <div className="tl-12-courses-heading-right d-flex align-items-end align-items-md-center">
                    <div className="tl-12-courses-slider-pagination" id="tl-12-mentor-slider-pagination"></div>
                    <div className="tl-12-courses-slider-nav">
                        <button className="tl-12-courses-slider-prev" id="tl-12-mentor-slider-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="tl-12-courses-slider-next" id="tl-12-mentor-slider-next"><i className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
            <Swiper 
            className="tl-12-courses-slider swiper" 
            id="tl-12-mentor-slider"
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            pagination={ {
                el: "#tl-12-mentor-slider-pagination",
                type: "fraction"
            }}
            navigation={{
                    nextEl: "#tl-12-mentor-slider-next",
                    prevEl: "#tl-12-mentor-slider-prev"
                }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}
            >
                {teacherList.slice(36,41).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="tl-12-single-mentor">
                            <img src={item.imgSrc} alt="Staff Image" className="tl-12-single-mentor-img"/>
                            <div className="tl-12-single-mentor-txt">

                                <div className="tl-12-single-mentor-info">
                                    <h4 className="tl-12-single-mentor-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h4>
                                    <h6 className="tl-12-single-mentor-role">{item.position}</h6>
                                </div>
                                <div className="tl-12-single-mentor-socials">
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>   
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default TeacherSection5