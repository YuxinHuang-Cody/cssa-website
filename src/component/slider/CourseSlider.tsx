"use client";
import { courseList } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CourseSlider = () => {
  return (
    <>
      <div className="tl-1-section-heading">
        <h2 className="tl-1-section-title">Most Popular Courses</h2>
        <div 
        className="tl-2-blogs-slider-nav" 
        id="tl-1-courses-slider-nav"
        >
          <button className="owl-prev">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button className="owl-next">
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Swiper
      className="tl-1-courses-slider owl-carousel"
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      navigation={{
        nextEl: '.owl-next',
        prevEl: '.owl-prev'
      }}
      modules={[Navigation]}
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15
        },
        576: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        992: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 3
        }
      }}
    >
        {courseList.slice(0,6).map((item) => (
          <SwiperSlide className="tl-1-course" key={item.id}>
            <div className="tl-1-course-img">
              <img src={item.imgSrc} alt="Course Image" />
              <span className="tl-1-course-price">{item.price}</span>
            </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
                By <a href="#">{item.author}</a>
              </span>
              <h4 className="tl-1-course-title">
                <Link href={`/course/${item.slug}`}>{item.title}</Link>
              </h4>
              <div className="tl-1-course-stats">
                <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-book-blank"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">
                    {item.lessons} Lessons
                  </span>
                </div>

                <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-user-group"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">
                    {item.students} Students
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CourseSlider;
