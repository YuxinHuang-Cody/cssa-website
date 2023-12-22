'use client'
import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CourseSection4 = () => {
  return (
    <section className="tl-13-courses pt-120 pb-120" data-bg-color="#F2EFE8">
    <div className="container">
        <div className="tl-13-section-heading">
            <h2 className="tl-13-section-title">Explore Popular <span className="last-word">Courses</span></h2>
            <div className="tl-13-courses-slider-nav">
            
            <button type="button" role="presentation" className="tl-13-courses-prev">
                <i className="fa-light fa-arrow-left"></i>
            </button>
            <button type="button" role="presentation" className="tl-13-courses-next"> 
                <i className="fa-light fa-arrow-right"></i>
            </button>
            </div>
        </div>

        <Swiper 
        className="tl-13-courses-slider owl-carousel"
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        navigation={{
            nextEl: '.tl-13-courses-next',
            prevEl: '.tl-13-courses-prev'
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
            0: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1.3,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                spaceBetween: 25,
            },
            1400: {
                spaceBetween: 30,
            }
        }}
        >
            {courseList.slice(0,6).map((item) => (
             <SwiperSlide className="tl-9-class tl-13-course" key={item.id}>
                <span className="tl-9-class-tag">{item.price}</span>
                <img src={item.imgSrc} alt="class image" className="tl-9-class-img"/>
                <div className="tl-9-class-infos">
                    <span className="tl-9-class-category">Courses</span>
                </div>
                <h3 className="tl-13-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h3>
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
                <div className="tl-13-course-actions">
                    <Link href={`/course/${item.slug}`} className="tl-9-program-btn">Teaching Online <i className="fa-regular fa-arrow-right"></i></Link>
                    <span className="tl-12-course-stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
            </SwiperSlide>   
            ))}
            
        </Swiper>
    </div>
</section>
  )
}

export default CourseSection4